const biens = [
    {
        id: 1,
        title: "Villa de Luxe",
        typeTransaction: "À louer",
        price: "1,550,000 TND",
        agentName: "Mohamed Ben Ali",
        agentPhone: "+216 22 123 456",
        agentEmail: "mohamed.benali@novaestate.tn",
        desc: "Une belle villa luxueuse idéale pour les familles, située dans un quartier calme et sécurisé.",
        surface: "450 m²",
        pieces: "4 Chambres, 3 Salles de bain",
        etage: "RDC + 1",
        annee: "2020",
        localisation: "Avenue Habib Bourguiba, Carthage, Tunis - Quartier résidentiel nord, à 5 minutes des écoles internationales.",
        images: ["NOVA-ESTATE-IMAGES/PROPRIETES/villa/image 1.jpg", "NOVA-ESTATE-IMAGES/PROPRIETES/villa/image 2.jpg", "NOVA-ESTATE-IMAGES/PROPRIETES/villa/image 3.jpg"],
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
        desc: "Appartement chic au centre-ville avec une architecture moderne et des finitions soignées.",
        surface: "120 m²",
        pieces: "2 Chambres, 1 Salle de bain",
        etage: "4ème étage (avec ascenseur)",
        annee: "2022",
        localisation: "Rue de Marseille, Centre-ville, Tunis - Hypercentre, à proximité immédiate de la station de métro.",
        images: ["NOVA-ESTATE-IMAGES/PROPRIETES/appartement/image 1.jpg", "NOVA-ESTATE-IMAGES/PROPRIETES/appartement/image 2.jpg", "NOVA-ESTATE-IMAGES/PROPRIETES/appartement/image 3.jpg"],
        equipements: ["Climatisation", "Cuisine Equipée", "Ascenseur", "Sécurité", "Balcon"],
        etat: "Vendu"
    },
    {
        id: 3,
        title: "Maison Traditionnelle",
        typeTransaction: "À louer",
        price: "890,000 TND",
        agentName: "Sarah Tunisi",
        agentPhone: "+216 98 456 789",
        agentEmail: "sarah.tunisi@novaestate.tn",
        desc: "Maison spacieuse et chaleureuse, proche de toutes commodités avec jardin privé.",
        surface: "250 m²",
        pieces: "3 Chambres, 2 Salles de bain",
        etage: "Plain-pied",
        annee: "2015",
        localisation: "Route de la Corniche, La Marsa, Tunis - Quartier paisible et accessible.",
        images: ["NOVA-ESTATE-IMAGES/PROPRIETES/maison/image 1.jpg", "NOVA-ESTATE-IMAGES/PROPRIETES/maison/image 2.jpg", "NOVA-ESTATE-IMAGES/PROPRIETES/maison/image 3.jpg"],
        equipements: ["Jardin", "Garage", "Chauffage Central", "Terrasse"],
        etat: "Disponible"
    },
    {
        id: 4,
        title: "Loft Contemporain",
        typeTransaction: "À vendre",
        price: "350,000 TND",
        agentName: "Kais Hamdi",
        agentPhone: "+216 21 333 444",
        agentEmail: "kais.hamdi@novaestate.tn",
        desc: "Loft au style industriel modernisé, grands volumes baignés de lumière naturelle.",
        surface: "140 m²",
        pieces: "2 Open Spaces, 1 Suite parentale",
        etage: "3ème étage",
        annee: "2021",
        localisation: "Les Berges du Lac 1, Tunis - Zone dynamique proche des bureaux et commerces.",
        images: ["NOVA-ESTATE-IMAGES/PROPRIETES/loft/image 1.jpg", "NOVA-ESTATE-IMAGES/PROPRIETES/loft/image 2.jpg", "NOVA-ESTATE-IMAGES/PROPRIETES/loft/image 3.jpg"],
        equipements: ["Baies Vitrées", "Cuisine Américaine", "Parking Sous-sol", "Domotique"],
        etat: "Disponible"
    },
    {
        id: 5,
        title: "Townhouse Élégante",
        typeTransaction: "À vendre",
        price: "680,000 TND",
        agentName: "Sonia Trabelsi",
        agentPhone: "+216 24 555 666",
        agentEmail: "sonia.trabelsi@novaestate.tn",
        desc: "Superbe townhouse avec petit jardin, alliant sérénité urbaine et confort haut de gamme.",
        surface: "210 m²",
        pieces: "3 Chambres, 3 Salles de bain",
        etage: "R+2",
        annee: "2019",
        localisation: "Jardins de Carthage, Tunis - Résidence sécurisée et calme.",
        images: ["NOVA-ESTATE-IMAGES/PROPRIETES/townhouse/image 1.jpg", "NOVA-ESTATE-IMAGES/PROPRIETES/townhouse/image 2.jpg", "NOVA-ESTATE-IMAGES/PROPRIETES/townhouse/image 3.jpg"],
        equipements: ["Jardin Privatif", "Garage Fermé", "Climatisation Centralisée", "Dressing"],
        etat: "Disponible"
    },
    {
        id: 6,
        title: "Villa Côtière Panoramique",
        typeTransaction: "À louer",
        price: "2,200,000 TND",
        agentName: "Youssef Gharbi",
        agentPhone: "+216 29 111 222",
        agentEmail: "youssef.gharbi@novaestate.tn",
        desc: "Villa d'exception pieds dans l'eau offrant une vue imprenable sur la mer Méditerranée.",
        surface: "550 m²",
        pieces: "5 Suites, 6 Salles de bain",
        etage: "RDC + 2",
        annee: "2023",
        localisation: "Sidi Bou Saïd, Tunis - Emplacement prestigieux avec accès direct à la mer.",
        images: ["NOVA-ESTATE-IMAGES/PROPRIETES/villa-cotiere/image 1.jpg", "NOVA-ESTATE-IMAGES/PROPRIETES/villa-cotiere/image 2.jpg", "NOVA-ESTATE-IMAGES/PROPRIETES/villa-cotiere/image 3.jpg"],
        equipements: ["Piscine Débordement", "Vue Mer", "Accès Plage", "Ascenseur Privé", "Jacuzzi"],
        etat: "Disponible"
    },
    {
        id: 7,
        title: "Villa d'Investissement",
        typeTransaction: "À vendre",
        price: "1,100,000 TND",
        agentName: "Nadia Bouzid",
        agentPhone: "+216 50 444 888",
        agentEmail: "nadia.bouzid@novaestate.tn",
        desc: "Grande propriété idéale pour rendement locatif ou projet d'affaires / maison d'hôtes.",
        surface: "480 m²",
        pieces: "6 Appartements dépendants",
        etage: "RDC + 2",
        annee: "2017",
        localisation: "La Soukra, Tunis - Proche de l'aéroport et des grands axes routiers.",
        images: ["NOVA-ESTATE-IMAGES/PROPRIETES/villa-investissement/image 1.jpg", "NOVA-ESTATE-IMAGES/PROPRIETES/villa-investissement/image 2.jpg", "NOVA-ESTATE-IMAGES/PROPRIETES/villa-investissement/image 3.jpg"],
        equipements: ["Plusieurs Accès", "Grand Parking", "Jardin", "Systeme de Surveillance"],
        etat: "Disponible"
    },
    {
        id: 8,
        title: "Bureau Professionnel Centre-Ville",
        typeTransaction: "À louer",
        price: "150,000 TND",
        agentName: "Hassen Ayari",
        agentPhone: "+216 97 222 333",
        agentEmail: "hassen.ayari@novaestate.tn",
        desc: "Espace de bureau moderne et fonctionnel, idéal pour cabinet ou siège de société.",
        surface: "160 m²",
        pieces: "4 Bureaux, 1 Salle de réunion, 2 WC",
        etage: "2ème étage",
        annee: "2018",
        localisation: "Avenue Mohamed V, Tunis - En plein cœur du quartier d'affaires.",
        images: ["NOVA-ESTATE-IMAGES/PROPRIETES/bureau/image 1.jpg", "NOVA-ESTATE-IMAGES/PROPRIETES/bureau/image 2.jpg", "NOVA-ESTATE-IMAGES/PROPRIETES/bureau/image 3.jpg"],
        equipements: ["Fibre Optique", "Accueil", "Climatisation VRV", "Sécurité 24/7"],
        etat: "Disponible"
    },
    {
        id: 9,
        title: "Espace Coworking Design",
        typeTransaction: "À louer",
        price: "95,000 TND",
        agentName: "Leila Slama",
        agentPhone: "+216 58 999 000",
        agentEmail: "leila.slama@novaestate.tn",
        desc: "Espace collaboratif moderne et équipé pour startups, freelancers et équipes agiles.",
        surface: "300 m²",
        pieces: "Open Space, 3 Salles de réunion, Kitchenette",
        etage: "1er étage",
        annee: "2022",
        localisation: "Les Berges du Lac 2, Tunis - Environnement d'innovation et de networking.",
        images: ["NOVA-ESTATE-IMAGES/PROPRIETES/coworking/image 1.jpg", "NOVA-ESTATE-IMAGES/PROPRIETES/coworking/image 2.jpg", "NOVA-ESTATE-IMAGES/PROPRIETES/coworking/image 3.jpg"],
        equipements: ["Haut Débit", "Espace Détente", "Cuisine Équipée", "Accès Badge 24/7"],
        etat: "Disponible"
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
    
    const mapIframe = document.getElementById("map-iframe");
    if (mapIframe) {
        const encodedLoc = encodeURIComponent(bienActuel.localisation);
        mapIframe.src = `https://maps.google.com/maps?q=${encodedLoc}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
    }
    
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
    
    // Filtrer pour exclure le bien actuel (celui affiché dans la page principale)
    const autresBiens = biens.filter(b => b.id !== bienActuel.id);
    
    // Mélanger aléatoirement la liste des autres biens (Fisher-Yates shuffle)
    const biensMelanges = [...autresBiens].sort(() => Math.random() - 0.5);
    
    // Sélectionner 3 biens aléatoires
    const biensRecommandes = biensMelanges.slice(0, 3);
    
    for (let i = 0; i < biensRecommandes.length; i++) {
        const b = biensRecommandes[i];
        const carte = document.createElement("div");
        carte.className = "carte-bien";
        carte.innerHTML = `
            <img src="${b.images[0]}" alt="${b.title}">
            <div class="carte-infos">
                <span class="badge-transaction" style="width: fit-content; margin-bottom: 8px;">${b.typeTransaction}</span>
                <h4>${b.title}</h4>
                <p class="prix">${b.price}</p>
                <div class="carte-specs">
                    <span><img src="NOVA-ESTATE-IMAGES/ÉLÉMENTS-STATIQUES/icons/icon-area.svg" class="icon-card" alt=""> ${b.surface}</span>
                </div>
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