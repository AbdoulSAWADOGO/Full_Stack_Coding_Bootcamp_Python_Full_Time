//Defis du jour
//Exercice 1:
//1-suppression de Banana
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(0,1);
console.log(fruits);
//2-Trie du tableau par ordre alphabétique
fruits.sort();
console.log(fruits);
//3-Ajout de Kiwi à la fin du tableau
fruits.push("Kiwi");
console.log(fruits);
//4-Supprimer Apples du tableau
fruits.shift();
//5-Trier par ordre decroissant
fruits.reverse();
//exercice 1 achevé avec succès.


//Exercice 2:
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
moreFruits[1][1];
//Cette commande affiche les oranges
