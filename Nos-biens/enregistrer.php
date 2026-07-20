<?php
    include "config.php";
    $titre = $_POST['titre'];
    $type = $_POST['type'];
    $statut = $_POST['statut'];
    $prix = $_POST['prix'];
    $localisation = $_POST['localisation'];
    $surface = $_POST['surface'];
    $pieces = $_POST['pieces'];
    $chambres = $_POST['chambres'];
    $description = $_POST['description'];
    $image = "";
    if(isset($_FILES['image']) && $_FILES['image']['name'] != ""){
        $dossier = "images/";
        if(!is_dir($dossier)){
            mkdir($dossier);
        }
        $nom_image = time() . "_" . $_FILES['image']['name'];
        $chemin = $dossier . $nom_image;
        move_uploaded_file(
            $_FILES['image']['tmp_name'],
            $chemin
        );
        $image = $nom_image;
    }
    $sql = "INSERT INTO biens
    (titre,type,statut,prix,localisation,surface,pieces,chambres,image,description)
    VALUES
    ('$titre',
    '$type',
    '$statut',
    '$prix',
    '$localisation',
    '$surface',
    '$pieces',
    '$chambres',
    '$image',
    '$description')";
    if($conn->query($sql)){
        echo "
        <script>
        alert('Bien ajouté avec succès');
        window.location='liste-biens.php';
        </script>
        ";
    }else{
        echo "Erreur : " . $conn->error;
    }
    $conn->close();
?>