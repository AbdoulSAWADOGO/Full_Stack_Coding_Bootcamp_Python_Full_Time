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

//Exercice 3 : Est ce un Palindrome
//Fonction qui vérifie si c'est un palindrome ou pas


//Exercice 4 : Plus grand nombre
function biggestNumberInArray(nombre
	) {
	let plus_grand = 0;
		for (i of nombre)
		{
			if (i > plus_grand)
				plus_grand = i;
		}
		console.log(plus_grand);
			}
biggestNumberInArray([-1,0,3,100, 99, 2, 99]);
biggestNumberInArray(['a', 3, 4, 2]);
biggestNumberInArray([]);
//Exercice 4 terminé avec succès

//Exercice 5 : Elements uniques
//Fonction renvoyant uniquement les éléments uniques

function elements_uniques(list) 
{
	let nouvelle_liste = [];
	for (i of list)
	{
		let num = 0;
		for (x of nouvelle_liste)
		{
			if (nouvelle_liste == [])
			{
				nouvelle_liste[0]=i;
			}
			else if (x == i)
			{
				num = 1;
			}
		if (num==0)
		{
			nouvelle_liste[nouvelle_liste.length]=i;
		}
		}
	}
	console.log(nouvelle_liste);
}
elements_uniques([1,2,2,2,2,,3,3,3,3,4,4,5]);

//Exercice 5 terminé avec succès