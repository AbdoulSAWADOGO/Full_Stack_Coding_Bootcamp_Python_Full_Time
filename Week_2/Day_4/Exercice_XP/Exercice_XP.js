//Exercice 1 : Informations
//Partie I: Fonctions sans paramètres
//Création de la fonction infoAboutMe()

function infoAboutMe()
{
	console.log("Mon nom est SAWADOGO et j'ai 23 ans. Mon loisir est le sport ");
}
//Appel de la fonction
infoAboutMe();
//Fin
//Partie II : Fonctions à trois paramètres
//Création d'une fonction qui prnds 3 paramètres
function infoAboutPerson(nom_personne,age_personne,bleu_personne) 
{
	console.log("Vous vous appelez " + nom_personne + " .Vous avez " + age_personne + " ans et votre couleur preferée est " + bleu_personne);
}
//test de la fonction par appel avec mes exemples
infoAboutPerson("SAWADOGO",23,"bleu");
infoAboutPerson("SANKARA",22,"jaune");
//test de la fonction par appel avec les exemples donnés dans le cours
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");
//Fonction à trois paramètres terminée avec succès