const biens = [
    {
        id: 1,
        title: "Villa de Luxe",
        typeTransaction: "À louer",
        price: "1,550,000 TND",
        agentName: "Mohamed Ben Ali",
        agentPhone: "+216 22 123 456",
        agentEmail: "mohamed.benali@novaestate.tn",
        desc: "Une belle villa luxueuse idéale pour les familles, située dans un quartier calme.",
        surface: "450 m²",
        pieces: "4 Chambres, 3 Salles de bain",
        etage: "RDC + 1",
        annee: "2020",
        localisation: "Avenue Habib Bourguiba, Carthage, Tunis - Quartier résidentiel nord, à 5 minutes des écoles internationales et des grands commerces.",
        images: ["image/image1.png", "image/image2.png", "image/image3.png"],
        equipements: ["Chauffage Central", "Climatisation", "Garage", "Jardin", "Alarme", "Piscine"],
        etat: "Disponible"
    },
    {
        id: 2,
        title: "Appartement Moderne",
        typeTransaction: "À vendre",
        price: "420,000 TND",
        agentName: "Amine Mansour",
        agentPhone: "+216 55 789 101",
        agentEmail: "amine.mansour@novaestate.tn",
        desc: "Appartement chic au centre-ville avec une architecture moderne.",
        surface: "120 m²",
        pieces: "2 Chambres, 1 Salle de bain",
        etage: "4ème étage (avec ascenseur)",
        annee: "2022",
        localisation: "Rue de Marseille, Centre-ville, Tunis - Hypercentre, à proximité immédiate de la station de métro et des restaurants.",
        images: ["image/image4.png", "image/image5.png", "image/image6.png"],
        equipements: ["Climatisation", "Cuisine Equipée", "Ascenseur", "Sécurité", "Balcon"],
        etat: "Vendu"
    },
    {
        id: 3,
        title: "Maison de Plage",
        typeTransaction: "À louer",
        price: "890,000 TND",
        agentName: "Sarah Tunisi",
        agentPhone: "+216 98 456 789",
        agentEmail: "sarah.tunisi@novaestate.tn",
        desc: "Maison située près de la mer avec une vue panoramique.",
        surface: "250 m²",
        pieces: "3 Chambres, 2 Salles de bain",
        etage: "Plain-pied",
        annee: "2015",
        localisation: "Route de la Corniche, La Marsa, Tunis - Zone côtière, accès direct à la plage et à 10 minutes du port de plaisance.",
        images: ["image/image7.png", "image/image8.jpg", "image/image9.jpg"],
        equipements: ["Jardin", "Piscine Privée", "Vue sur mer", "Barbecue"],
        etat: "Disponible"
    },
    {
        id: 4,
        title: "Studio Elégant",
        typeTransaction: "À vendre",
        price: "180,000 TND",
        agentName: "Kais Hamdi",
        agentPhone: "+216 21 333 444",
        agentEmail: "kais.hamdi@novaestate.tn",
        desc: "Studio entièrement meublé, excellente opportunité pour un investissement.",
        surface: "60 m²",
        pieces: "1 Pièce principale, 1 Salle de bain",
        etage: "2ème étage",
        annee: "2018",
        localisation: "Avenue de la République, Ariana, Tunis - Quartier étudiant, idéalement situé près du campus universitaire.",
        images: ["image/image10.jpg", "image/image11.jpg", "image/image12.jpg"],
        equipements: ["Meublé", "Cuisine Equipée", "Wi-Fi", "Machine à laver"],
        etat: "Vendu"
    }
];

const params = new URLSearchParams(window.location.search);
const idDemande = parseInt(params.get("id")) || 1;

let bienActuel = biens.find(b => b.id === idDemande);

if (!bienActuel) {
    bienActuel = biens[0];
}

function changerImage(nouvelleSource) {
    document.getElementById("main-img").src = nouvelleSource;
}

function chargerDetailsBien() {
    document.getElementById("bread-title").textContent = bienActuel.title;
    document.getElementById("prop-title").textContent = bienActuel.title;
    document.getElementById("prop-transaction").textContent = bienActuel.typeTransaction;
    document.getElementById("prop-price").textContent = "Prix : " + bienActuel.price;
    document.getElementById("prop-desc").textContent = bienActuel.desc;
    
    document.getElementById("seller-name").textContent = bienActuel.agentName;
    document.getElementById("seller-phone").textContent = bienActuel.agentPhone;
    document.getElementById("seller-email").textContent = bienActuel.agentEmail;
    
    document.getElementById("prop-surface").textContent = bienActuel.surface;
    document.getElementById("prop-pieces").textContent = bienActuel.pieces;
    document.getElementById("prop-etage").textContent = bienActuel.etage;
    document.getElementById("prop-annee").textContent = bienActuel.annee;
    
    document.getElementById("prop-localisation").textContent = bienActuel.localisation;
    
    document.getElementById("main-img").src = bienActuel.images[0];
    document.getElementById("thumb1").src = bienActuel.images[0];
    document.getElementById("thumb2").src = bienActuel.images[1];
    document.getElementById("thumb3").src = bienActuel.images[2];

    const etatDiv = document.getElementById("prop-etat");
    etatDiv.textContent = bienActuel.etat;
    if (bienActuel.etat === "Vendu") {
        etatDiv.className = "etat-vendu";
    } else {
        etatDiv.className = "etat-dispo";
    }

    const equipementsList = document.getElementById("prop-equipements");
    equipementsList.innerHTML = "";
    for (let i = 0; i < bienActuel.equipements.length; i++) {
        const li = document.createElement("li");
        li.textContent = bienActuel.equipements[i];
        equipementsList.appendChild(li);
    }

    chargerBiensSimilaires();
}

function chargerBiensSimilaires() {
    const container = document.getElementById("similaires-container");
    container.innerHTML = "";
    
    const autresBiens = biens.filter(b => b.id !== bienActuel.id).slice(0, 3);
    
    for (let i = 0; i < autresBiens.length; i++) {
        const b = autresBiens[i];
        const carte = document.createElement("div");
        carte.className = "carte-bien";
        carte.innerHTML = `
            <img src="${b.images[0]}" alt="${b.title}">
            <div class="carte-infos">
                <span class="badge-transaction" style="width: fit-content; margin-bottom: 10px;">${b.typeTransaction}</span>
                <h4>${b.title}</h4>
                <p class="prix">${b.price}</p>
                <a href="bienIM.html?id=${b.id}" class="btn-voir">Voir détails</a>
            </div>
        `;
        container.appendChild(carte);
    }
}

function contacterAgent() {
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const email = document.getElementById("email").value;
    const telephone = document.getElementById("telephone").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    if (!nom || !prenom || !email || !telephone || !service || !message) {
        alert("Veuillez remplir tous les champs du formulaire.");
        return;
    }

    if (bienActuel.etat === "Vendu") {
        alert("Erreur : Ce bien a déjà été vendu. Vous ne pouvez pas envoyer de demande pour ce bien.");
    } else {
        alert(`Merci ${prenom} ${nom} ! Votre message pour le service '${service}' a bien été envoyé à ${bienActuel.agentName}.`);
        document.getElementById("contact-form").reset();
    }
}

chargerDetailsBien();
