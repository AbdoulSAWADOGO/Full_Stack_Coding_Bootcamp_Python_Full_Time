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


//Exercice 2
//L'assignateur de notes
//Demande de la note de l'utilisateur
let note = prompt("Svp quelle est votre note?");
note =Number(note);
  if (note > 90){
  	    console.log("A");
  }
else if (note >=80 && note <=90)
{
    console.log("B");
}
else if (note >=70 && note <=80)
{
    console.log("C");
}
else if (note <70)
{
    console.log("D");
}

//Exercice 2 terminé avec succès

//Exercice 3:
//récupération du verbe de l'utilisateur
let verbe = prompt("Svp veillez entrer un verbe");
if (verbe.length >= 3 && verbe.substr(-3) != "ing")
{
    console.log(verbe + 'ing');
}
else if (verbe.length >= 3 && verbe.substr(-3) == "ing")
{
    console.log(verbe + 'ly');
}
else if (verbe.length < 3 )
{
	console.log(verbe);
}
//Exercice terminé sans difficulté particulière
