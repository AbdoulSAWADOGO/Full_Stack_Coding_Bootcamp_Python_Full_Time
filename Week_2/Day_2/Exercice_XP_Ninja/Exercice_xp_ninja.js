//Exercice 1 : Différrence d'âge
//Nous avons des années de naissance de deux personnes, trouvons la date à laquelle la plus jeune a exactement la moitié de l'âge de la plus âgée
//Récuperation des deux années de naissances
let annee_1 = prompt("Entrez la première année de naissance exemple:1998");
let annee_2 = prompt("Entrez la deuxième année de naissance exemple:1998");
if (annee_1>annee_2) {
	let annee = ((2*annee_1)-annee_2);
	console.log(annee);
}
else {
	let annee = ((2*annee_2)-annee_1);
	console.log(annee);
}
//Exercice terminé avec succès. Aucune difficulté rencontrée car nous avons refléchi à l'algorithme et discuté ensemble en classe donc l'écriture du code en quelques minutes
//Exercice 2 : Codes Postaux
//Récupération de code postal
let code_postal = prompt("entrer un code svp"); 
//Conversion en nombre
let code_postal_numb = Number(code_postal); 
//Vérification du respect des quatre conditons données dans l'exercice
if (code_postal.length == 5 && code_postal_numb)
	{ 
		console.log("Success");
	} 
else 
	{ 
		console.log("Error");
	}
//Exercice 2 sans expressions régulières

//Exercice 3 : Mot Secret
	//Récupération du mot de l'utilisateur
var mot_secret = prompt("Svp entrer un mot");
//Suppression de toutes les voyelles du mot en utilisant les expressions régulières puis affichage
mot_secret = mot_secret.replace(/[a,u,o,e,i]+/g,"");
console.log(mot_secret);
//Cette partie s'achève ici.
let mot_secret = prompt("Svp entrer un mot");
//Remplacement des voyelles par un autre caractère
// mot_secret = mot_secret.replace(/a/g,"1");
 // var str = 'welcom_to_waytolearnx.com';
mot_secret = mot_secret.replace(/a/g, "1");
mot_secret = mot_secret.replace(/e/g, "2");
mot_secret = mot_secret.replace(/i/g, "3");
mot_secret = mot_secret.replace(/o/g, "4");
mot_secret = mot_secret.replace(/u/g, "5");
console.log(mot_secret);
//Exercice Bonus terminé avec succès



