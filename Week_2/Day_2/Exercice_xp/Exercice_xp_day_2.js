//Exercice 1:
//création de deux variables et affectation de valeurs différentes
let toto=45;
let titi=12;

if (toto>titi){
	console.log(toto + " est plus grand que " + titi);
}
else {
	console.log(toto + " est plus petit que " + titi);
}

//Exercice 2:
//Chihuahua
let newDog = "Chihuahua";
//affichage du nombre de lettres de newDog
let nombre_lettres = newDog.length;
console.log(nombre_lettres);
//affichage de la du contenu de la variable newDog en majuscule
newDog.toLocaleUpperCase();
//affichage de la variable newDog en minuscule
newDog.toLocaleLowerCase();

newDog = newDog.indexOf("Chihuahua");
if ( newDog != -1) {
	console.log("J'adore les chihuahuas, c'est ma race de chien préférée");
} else {
    console.log("Je m'en fous, je préfère les chats");  
}
//Exercice 2 terminé avec succès. Je n'ai pas rencontré de difficultés particulières

//Exercice 3
//récupération du nombre par l'utilisateur
let nombre = prompt("Svp entrer un nombre!!!");
//vérification de la parité du nombre
if (nombre % 2 ==0)
{
	console.log(nombre, "est un nombre pair");
}
else
{
	console.log(nombre, "est un nombre impair");
}
//Pas de difficultés rencontrées et achevé avec succès!

//Exercice 4
//Discussion de groupe
//Tableau contenant les utilisateurs
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000", "toto123"];
//Detection du nombre d'utilisateurs connecté et affichage à l'aide de console.log
//Affichage de la position de Nemo
//Affichage de la réponse de si on a trouvé Nemo ou pas
if (users.length == 0)
{
	console.log("Aucun utilisateur n'est connecté");
}
else if (users.length == 1)
{
	console.log(users[0]," est en ligne");
}
else if (users.length == 2)
{
	console.log(users[0], " et ", users[1], "sont en ligne");
}
else
{
	console.log(users[0], " ", users[1] , "et", users.length-2, " autres utilisateurs de plus sont en ligne");}
//c'est un peu compliqué cet exercice là car je m'étais plongé dans la programmation des sockets avec des fonctions sockets bizarres
//j'avais pensé au protocole de communication client serveur





