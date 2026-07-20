<?php
    $host = "localhost";
    $user = "root";
    $password = "";
    $dbname = "nova_estate";
    $conn = new mysqli($host, $user, $password, $dbname);
    if ($conn->connect_error) {
        die("Erreur connexion : " . $conn->connect_error);
    }
    $conn->set_charset("utf8");
?>