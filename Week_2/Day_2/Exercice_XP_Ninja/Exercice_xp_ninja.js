//Exercice 1
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


