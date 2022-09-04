//Exercice 1 : Nombre Aléatoire
//un nombre aléatoire entre 1 et 100 puis affichage des nombres pairs
//fonction de retour d'un nombre aléatoire entre 1 et 100
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let nombre = getRandomInt(100);
//affichage des nombres pairs
for ( let i = 1 ; i <= nombre; i++)
{ 
	if (i%2 == 0 )
	{ 
	    console.log(i);
	}
}
//Exercice 1 terminé avec succès

//Exercice 2 : Lettre Majuscules
//Création d'une fonction qui prend une chaîne comme argument
function Majuscule(chaine) 
{
let chaine_paire = "";
let chaine_impaire = "";
for ( let i = 0; i < chaine.length; i++)
{
	if (i%2 == 0)
	{
		chaine_paire += chaine[i].toUpperCase();
	}
	else
	{
		chaine_paire += chaine[i];
	}
}
for ( let i = 0; i < chaine.length; i++)
{
	if (i%2 != 0)
	{
		chaine_impaire += chaine[i].toUpperCase();
	}
	else
	{
		chaine_impaire += chaine[i];
	}
}
		console.log(chaine_paire,chaine_impaire);
}
Majuscule("abcdef");


