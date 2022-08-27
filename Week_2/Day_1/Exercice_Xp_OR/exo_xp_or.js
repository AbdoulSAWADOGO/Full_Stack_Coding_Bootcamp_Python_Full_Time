//Exercice 1: Couleur préférée
let sentence = ["my","favorite","color","is","blue"];
color=sentence.toString();
console.log(color);
//Ici j'ai découvert que également on peut utiliser la fonction join();
//En faisant sentence.join();

//Exercice 2:Mixup
//création de deux variables de chaines
let nom = "OUEDRAOGO";
let prenom = "Abdoul";
//Découpage des deux premiers caractères des deux chaines
let change =nom.slice(0,2)+prenom.slice(2);
nom=prenom.slice(0,2)+nom.slice(2);
prenom=change.slice(0,2)+change.slice(2);
console.log(nom, " ",prenom);
//création d'une variable dont la valeur est la concaténation des deux
let nom_prenom = nom + prenom;
//Affichage de la nouvelle chaîne concatenée
console.log(nom_prenom);


//Exercice 3:Calculatrice
//récupération des valeurs de l'utilisateur
let num1 = prompt('Entrer un premier nombre svp!');
let num2 = prompt('Entrer un second nombre svp!');
//Conversion en nombre
num1 = Number(num1);
num2 = Number(num2);
//J'avais vu la solution comme ça mais je me suis vite rendu compte en restant que cà c'est la concaténation
let result = num1+num2;
//Cette solution ne marche absolument pas.
alert(`La somme de vos deux nombres dont ${num1} et de ${num2} est ${num1+num2}`);
