//Exercise 1 :
//Programme vérifiant si une chaîne est vide ou non
function verif_chaine(chaine) 
{
	if (chaine == "")
	{
		console.log("True");
	} 
	else 
	{
		console.log("False");
	}
}
verif_chaine("");
verif_chaine("abc");
//Exercice 1 terminé avec succès

//Exercice 2: Abréviation de nom
function abbrevName(chaine) 
{
	chaine = chaine.split(" ");
	chaine_abbrev = chaine[0] + " ";
	for (let i = 1; i < chaine.length; i++)
	{
		Lettre_abbrev = chaine[i][0].toUpperCase() + ".";
		chaine_abbrev = chaine_abbrev + Lettre_abbrev;
        console.log( "Votre nom en abrégé est ==> ", chaine_abbrev);
    }
}
console.log(abbrevName("Robin Singh"));
//Exercice 2 terminé

//Exercice 3: SwapCase
//Fonction changeant la casse d'une chaine
function Casse(chaine) 
{
	let chaine_finale="chaine ==> ";
	for (let i = 0 ; i < chaine.length ; i++)
			if (chaine[i] == chaine[i].toUpperCase())
			{
				chaine[i]= chaine[i].toLowerCase();	
				chaine_finale  += chaine[i].toLowerCase();			
			} 
			else
			{
				chaine[i]= chaine[i].toUpperCase();
				chaine_finale += chaine[i].toUpperCase();							
			}
		console.log(chaine_finale);
}
Casse('The Quick Brown Fox');
//Exercice 4
//Valeur Omniprésente
//Fonction vérifiant si un argument est omniprésent pour un tableau donné
function Omnipresence(tableau, valeur_cherchée) 
{
	for (let i of tableau)
	{
		for(let x of i)
		{
			if (valeur_cherchée == x)
			{
				console.log("True");
			}
			else
			{
				console.log("False");
			}
		}
	}
}

Omnipresence([[1, 1], [1, 3], [5, 1], [6, 1]], 1);
Omnipresence([[1, 1], [1, 3], [5, 1], [6, 1]], 6);
//Exercice 4 terminé mais pas en bonne forme