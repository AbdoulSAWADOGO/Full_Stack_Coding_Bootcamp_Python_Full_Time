//Partie I :
//Exercice 1 : Examen des tableaux
//Tableau de travail
let people = ["Greg", "Mary", "Devon", "James"];
//Suppression de Greg du tableau
people.shift();
//Remplacement de James par jason
//Il faut d'abord joindre les éléments du tableau
people = people.join(" ");
//Ensuite le remplacement
people = people.replace("James","Jason");
//Après remplacement, il faut remettre le tableau à l'initial
people = people.split(" ");
//Ajout de mon nom à la fin du tableau
people.push("Abdoul");
//Code qui console.log l'index de Mary
let index=people.indexOf("Mary");
console.log("L'index de Mary est", index);
//Code pour la copie du tableau
let toto=people.slice();
//La copie ne doit pas contenir mon nom ou celui de Mary
let copie = people.slice(1);
//Le code qui renvoit l'index de Foo
let index_Foo = people.indexOf("Foo");
console.log(index_Foo);
//Le résultat renvoyé est -1 parce que Foo n'existe pas dans le tableau
//Une variable last contenant le dernier élément du tableau
let last = people[people.length-1];
//Nous pensons que la relation est que la taille du tableau commence à l'index 1 tandis que les éléments du tableau commencent à l'index 0 donc y'aura une différrence de 1 entre le dernier élément du tableau et la taille du tableau.
//Partie I terminée avec succès.



//Partie II : Boucles
//Parcours du tableau à l'aide d'une boucle
for ( let i = 0 ; i < people.length ; i ++){
	console.log(people[i]);
}

//Parcours du tableau et quitter à la découverte de Jason
for ( let i in people){
	console.log(people[i]);
	if (people[i]=="Jason")
	{
		break;
	}
}

//Exercice 2 : Couleurs préférées
//Création d'un tableau colors avec mes cinq couleurs preférées
let colors = ["Blue","yellow","green","white","black"];
//Bouclons en affichant du texte
for (let i in colors){
	let n=Number(i)+1;
	console.log("Mon choix n°", n, "est", colors[i]);
}

//Bonus : Utilisons maintenant les suffixes
//Tableau de suffixes
let suffixes = ["er","ième","ième","ième","ième"];
for (let i in colors){
	let n=Number(i)+1;
	console.log("Mon " + n+suffixes[i] + " choix est " + colors[i]);
}
//Bonus terminé avec succès