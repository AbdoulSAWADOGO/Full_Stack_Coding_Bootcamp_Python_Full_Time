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

//Exercice 3
//Repeter la question
//Demande d'un numero à l'utilisateur et affichage
let numero = prompt("Svp entrer un numéro");
console.log("votre numero est" ,numero);
//récupération du type de la valeur
let type= typeof(numero);
//Conversion en nombre
numero=Number(numero);

//Utilisation de la boucle while et affichage

while(1){

let numero = prompt("Svp entrer un numéro");
console.log("votre numero est" ,numero);
numero=Number(numero);
	if (numero< 10){
        console.log("Svp entrer un numéro supérieur à 10");}
	else{

		break;
	}
}
//Nous pensons que la boucle do while est la mieux adaptée pour cette situation elle va récuperer la valeur avant de vérifier la condition et si y'a lieu de redemander une saisie elle le fera.



//Exercice 4 : Gestion du Bâtiment
//copie de l'objet

let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}

//Affichage du nombre d'étage
console.log("Le nombre d'étages est "+ building.numberOfFloors);
//le nombre d'appartements aux étages 1 et 3
console.log("Le nombre d'appartements au premier est "+ building.numberOfAptByFloor.firstFloor + " et au deuxième c'est " + building.numberOfAptByFloor.thirdFloor);
//Le nom du deuxième locataire et le nombre de pièces qu'il possède
console.log("Le nom du second locataire est "+ building.nameOfTenants[1] + " et il possède " + building.numberOfRoomsAndRent.dan[0] + " pièces");
//Vérification de loyer et augmentation si y'a lieu.

if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1])
{
	building.numberOfRoomsAndRent.dan[1] = 1200;
	console.log("Le loyer de " + building.nameOfTenants[1] + " devient " + 	building.numberOfRoomsAndRent.dan[1]);

}


//Exercice 4 terminé avec succès.
