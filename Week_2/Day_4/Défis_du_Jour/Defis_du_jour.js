//Demande de mots à l'utilisateur
let chaine = prompt("Svp entrer plusieurs mots et séparez-les par des virgules");
//Rangements de ces mots dans un tableau
chaine = chaine.split(",");
//Affichage des mots dans un cadre rectangulaire

let affich = 0;
let etoile = "*";
for (let i of chaine)
{
	if (affich < i.length)
	{
		affich = i.length;
	}
}

for (let i = 0; i < affich; i++)
{ 
	etoile = etoile + "*";
	console.log(etoile);
 	for (let i of chaine) 
 	{
 		let new_chaine = "* " + i;
 		for (i=new_chaine.length; i <affich ; i++)
 			new_chaine = new_chaine + " " + "*";
	 		console.log(new_chaine + "*");

 	}
 	// console.log(affich);
}
 console.log(affich);
