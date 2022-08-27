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




