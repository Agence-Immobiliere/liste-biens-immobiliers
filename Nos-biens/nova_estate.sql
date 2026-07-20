CREATE DATABASE nova_estate;
USE nova_estate;
CREATE TABLE biens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(255),
    type VARCHAR(100),
    statut VARCHAR(100),
    prix INT,
    localisation VARCHAR(255),
    surface INT,
    pieces INT,
    chambres INT,
    image VARCHAR(255),
    description TEXT,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);