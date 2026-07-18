const form = document.querySelector("form");
form.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Le bien a été ajouté avec succès !");
    form.reset();
});