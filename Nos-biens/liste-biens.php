<?php
    include "config.php";
    $result = $conn->query("SELECT * FROM biens ORDER BY id DESC");
?>
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nos biens | Nova Estate</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-100">
        <header class="bg-blue-900 text-white">
            <div class="container mx-auto flex justify-between items-center p-5">
                <div class="flex items-center gap-3">
                    <img src="LOGO/image.png" class="w-14">
                    <h1 class="text-3xl font-bold">Nova Estate</h1>
                </div>
                <nav>
                    <ul class="flex gap-8 font-semibold">
                        <li><a href="index.html">Accueil</a></li>
                        <li><a href="ajouter-bien.php">Ajouter un bien</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <section class="container mx-auto mt-10">
            <h2 class="text-4xl text-center font-bold text-blue-900 mb-10">Nos biens immobiliers</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <?php while($bien = $result->fetch_assoc()){ ?>
                <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                    <?php if($bien['image']!=""){ ?>
                    <img src="images/<?php echo $bien['image']; ?>" class="w-full h-56 object-cover">
                    <?php }else{ ?>
                    <img src="https://via.placeholder.com/400" class="w-full h-56">
                    <?php } ?>
                    <div class="p-5">
                        <span class="bg-yellow-500 text-white px-3 py-1 rounded">
                            <?php echo $bien['statut']; ?>
                        </span>
                        <h3 class="text-2xl font-bold text-blue-900 mt-3"><?php echo $bien['titre']; ?></h3>
                        <p class="text-gray-600 mt-2"><?php echo $bien['localisation']; ?></p>
                        <p class="text-xl font-bold mt-3 text-yellow-600"><?php echo $bien['prix']; ?> DT</p>
                        <div class="mt-4 text-gray-700">
                            <p>Surface :<?php echo $bien['surface']; ?> m²</p>
                            <p>Pièces :<?php echo $bien['pieces']; ?></p>
                            <p>Chambres :<?php echo $bien['chambres']; ?></p>
                        </div>
                        <p class="mt-4"><?php echo $bien['description']; ?></p>
                        <a href="#" class="inline-block mt-5 bg-blue-900 text-white px-5 py-2 rounded">Voir détails</a>
                    </div>
                </div>
                <?php } ?>
            </div>
        </section>
        <footer class="bg-blue-900 text-white text-center py-5 mt-10">© 2026 Nova Estate - Tous droits réservés.</footer>
    </body>
</html>