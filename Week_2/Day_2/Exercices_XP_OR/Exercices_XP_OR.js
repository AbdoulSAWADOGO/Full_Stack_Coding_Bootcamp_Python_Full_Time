//Exercice 1: Traducteur du monde
//La langue parlée par l'utilisateur
let langue = prompt("Svp quelle langue parlez-vous?");
//Conversion de la langue de l'utilisateur en minuscules
langue =langue.toLocaleLowerCase();
//création de quelques conditions avec switch case
switch (langue) {
  case 'français':
    console.log("Bonjour");
    break;
  case 'anglais':
    console.log("Hello");
    break;

  case 'hébreu':
    console.log("Shalom");
    break;
  default:
    console.log("01110011 01101111 01110010 01110010 01111001");
}
