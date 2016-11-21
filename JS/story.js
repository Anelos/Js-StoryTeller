var nom = "*****";
var animal = "*****";
var nomAnimal = "*****";
var nomMaman = "*****";
var dessert = "*****";
var nomElement = document.getElementsByClassName("nom");
var animalElement = document.getElementsByClassName("animal");
var nomAnimalElement = document.getElementsByClassName("nomAnimal");
var nomMamanElement = document.getElementsByClassName("nomMaman");

function elementHolder(storyElement, texte) {
    for (var i = 0; i < storyElement.length; i++) {
        storyElement[i].innerHTML = texte;
    }

}

document.getElementById("bouton").onclick = function () {
    document.getElementById("intro").style.visibility = "hidden";
    nom = prompt("Quel est votre nom?");
    animal = prompt("Quel est votre animal de ferme (masculin, sans article) préféré?");
    var animalQuestion = confirm("Avez vous un animal de compagnie?");

    if (animalQuestion) {
        nomAnimal = prompt("Quel est son nom?");
    } else {
        nomAnimal = prompt("si vous en aviez un, comment l'apelleriez vous?");
    }
    nomMaman = prompt("quel est le prénom de votre maman?");
    dessert = prompt("quel est votre dessert préféré?");

    elementHolder(nomElement, nom);
    elementHolder(animalElement, animal);
    elementHolder(nomAnimalElement, nomAnimal);
    elementHolder(nomMamanElement, nomMaman);
    document.getElementById("dessert").innerHTML = dessert;
    document.getElementById("histoire").style.visibility = "visible";









};
