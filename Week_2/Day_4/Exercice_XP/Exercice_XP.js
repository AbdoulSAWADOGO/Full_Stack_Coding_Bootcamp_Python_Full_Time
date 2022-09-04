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

//Exercice 2 : 
//Création de la fonction CalculateTip()
function calculateTip(){
	montant = Number(prompt ("quel est le montant de votre favture svp"));
	if (montant < 50){
		console.log("Laisser un pourboire de 20%");
		montant_pourboire= (montant*20)/100;
	}
	else if (montant > 50 && montant < 200){
		console.log("pourboire de 15%");
		montant_pourboire= (montant*15)/100;
	}
	else{
		console.log("Laisser un pouboire de 10%");
		montant_pourboire= (montant*10)/100;
	}
	console.log("pourboire==> ", montant_pourboire, "$ et la facture total==> ",montant+montant_pourboire, "$");

}
//Appel de la fonction
calculateTip();
//Exercice 2 terminé

//Exercice 3 : Trouver les nombres divisibles par 23
//Création de la fonction isDivisible() sans parameters
function isDivisible()
{
	console.log("Outcome : ")
	let somme = 0;
	for (let i = 0; i <= 500; i++)
		{
			if ( i % 23 == 0) 
			{
				console.log(i + " ");
				somme += i;
			}
		}
		console.log("Sum : ",somme);
	}
isDivisible();
//Exercice 3 terminé avec succès