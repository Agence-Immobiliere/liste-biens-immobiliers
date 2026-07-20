<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ajouter un bien | Nova Estate</title>
        <link rel="stylesheet" href="style.css">
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-100">
        <header class="bg-blue-900 shadow-lg">
            <div class="container mx-auto flex justify-between items-center p-5">
                <div class="flex items-center gap-3">
                    <img src="LOGO/image.png" alt="Logo" class="w-14">
                    <h1 class="text-white text-3xl font-bold">Nova Estate</h1>
                </div>
                <nav>
                    <ul class="flex gap-8 text-white font-semibold">
                        <li><a href="index.html">Accueil</a></li>
                        <li><a href="apropos.html">À propos</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="biens.html">Nos biens</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <section class="max-w-5xl mx-auto bg-white mt-10 rounded-xl shadow-lg p-10">
            <h2 class="text-4xl text-center font-bold text-blue-900 mb-10">Ajouter un bien immobilier</h2>
            <form action="enregistrer.php" method="POST" enctype="multipart/form-data">
                <div class="grid grid-cols-2 gap-6">
                    <div>
                        <label class="font-bold">Titre du bien</label>
                        <input type="text" name="titre" class="w-full border rounded-lg p-3 mt-2" placeholder="Villa Moderne" required>
                    </div>
                    <div>
                        <label class="font-bold">Type</label>
                        <select name="type" class="w-full border rounded-lg p-3 mt-2">
                            <option>Maison</option>
                            <option>Appartement</option>
                            <option>Terrain</option>
                            <option>Commercial</option>
                        </select>
                    </div>
                    <div>
                        <label class="font-bold">Statut</label>
                        <select name="statut" class="w-full border rounded-lg p-3 mt-2">
                            <option>À vendre</option>
                            <option>À louer</option>
                        </select>
                    </div>
                    <div>
                        <label class="font-bold">Prix</label>
                        <input type="number" name="prix" class="w-full border rounded-lg p-3 mt-2" placeholder="500000" required>
                    </div>
                    <div>
                        <label class="font-bold">Localisation</label>
                        <input type="text" name="localisation" class="w-full border rounded-lg p-3 mt-2" placeholder="Tunis" required>
                    </div>
                    <div>
                        <label class="font-bold">Surface (m²)</label>
                        <input type="number" name="surface" class="w-full border rounded-lg p-3 mt-2" placeholder="180" required>
                    </div>
                    <div>
                        <label class="font-bold">Nombre de pièces</label>
                        <input type="number" name="pieces" class="w-full border rounded-lg p-3 mt-2" placeholder="5" required>
                    </div>
                    <div>
                        <label class="font-bold">Chambres</label>
                        <input type="number" name="chambres" class="w-full border rounded-lg p-3 mt-2" placeholder="3" required>
                    </div>
                </div>
                <div class="mt-6">
                    <label class="font-bold">Image du bien</label>
                    <input type="file" name="image" class="w-full border rounded-lg p-3 mt-2" accept="image/*">
                </div>
                <div class="mt-6">
                    <label class="font-bold">Description</label>
                    <textarea name="description" rows="6" class="w-full border rounded-lg p-3 mt-2" placeholder="Décrivez votre bien..."></textarea>
                </div>
                <div class="flex justify-center gap-5 mt-8">
                    <button type="submit" class="bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-8 py-3 rounded-lg">
                        Enregistrer
                    </button>
                    <button type="reset" class="bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-lg">
                        Annuler
                    </button>
                </div>
            </form>
        </section>
        <footer class="bg-blue-900 text-white text-center py-5 mt-10">
            <p>&copy; 2026 Nova Estate - Tous droits réservés.</p>
        </footer>
    </body>
</html>