// Exercice 1: Mon plat préféré
let nourriture ="ragoût";
let repas ="déjeûner";
var result ="I eat " + nourriture + " at every " + repas;
console.log(result);

// Exercice 2:
//Partie 1
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];//tableau de serie
let myWatchedSeriesLength =myWatchedSeries.length;//nombre de series sur mon disque
console.log(myWatchedSeriesLength);//affichage du nombre de serie qui est 3 ici

let myWatchedSeriesSentence= myWatchedSeries[2];//afficer la serie que j'ai regardé
var affichage= "I watched " + myWatchedSeriesLength + " series : " + myWatchedSeries.toString
//Partie 2
//1-remplacer la serie big bang theory par friends en utilisant l'index
myWatchedSeries[2]="friends";
//2-Ajoutez, à la fin du tableau, le nom d'une autre série que vous avez regardée.
myWatchedSeries.push("3 femmes, 1 village");
//3-Ajoutez, au début du tableau, le nom de votre série préférée.
myWatchedSeries.unshift("Viking");
//4-Supprimer la série « miroir noir ».
myWatchedSeries.splice(1);
//5-afficher la troisième lettre de money heist
myWatchedSeries[2][3];

//Exercice 3:Convertisseur de temperature
var temperature = 37;
var affich= "Temperature en °C :" + temperature;
console.log(affich);
//Conversion de la temperature en Fahrenheit 
var temperature1 = ((temperature/5)*9)+32;
voir affich1="Voici la temperature en Fahrenheit " + temperature1;
console.log(affich1);
console.log(temperature);

//Exercice 4:
/*
1-Dans la première reponse, nous pensons que le resultat sera 55 car 34+21 fait 55
2-Le second resultat sera 23 car 2+21 fait 23
3-c n'a pas de valeur
4-Nous pensons que ça ne va rien afficher car le 5 sera considéré comme une chaine de caratères et donc la concaténation ne sera pas faite
*/
//J'ai raté. La reponse fait 75.
//Je viens de comprendre pourquoi. En réalité il a fait 3+4=7 et a affiché le 5 comme un caractère

//Exercice 5:
typeof(15)
// Prediction:number
// Actual:number

typeof(5.5)
// Prediction:number
// Actual:number

typeof(NaN)
// Prediction:number
// Actual:number

typeof("hello")
// Prediction:String
// Actual:String

typeof(true)
// Prediction:
// Actual:

typeof(1 != 2)
// Prediction:booleen
// Actual:boolean

"hamburger" + "s"
// Prediction:hamburgers
// Actual:hamburgers

"hamburgers" - "s"
// Prediction:hamberger
// Actual:NaN je n'ai pas compris à revoir

"1" + "3"
// Prediction:13
// Actual:13

"1" - "3"
// Prediction:-2
// Actual:-2

"johnny" + 5
// Prediction:johnny5
// Actual:johnny5

"johnny" - 5
// Prediction:je en sais pas
// Actual:NaN

99 * "hello"
// Prediction:Pas possible
// Actual:NaN

1 != 1
// Prediction:false
// Actual:false

1 == "1"
// Prediction:true
// Actual:true

1 === "1"
// Prediction:false
// Actual:false

//Exercice 6:


5 + "34"
// Prediction:39
// Actual:534 oups j'avais fait une addition pourtant 34 est une chaine

5 - "4"
// Prediction:1
// Actual:1

10 % 5
// Prediction:0
// Actual:0

5 % 10
// Prediction:0
// Actual:5

"Java" + "Script"
// Prediction:javascript
// Actual:JavaScript

" " + " "
// Prediction: deux fois espaces
// Actual:'  '

" " + 0
// Prediction:' 0'
// Actual:' 0'

true + true
// Prediction:true
// Actual:2

true + false
// Prediction:1
// Actual:1

false + true
// Prediction:-1
// Actual:1

false - true
// Prediction:-1
// Actual:-1

!true
// Prediction:false
// Actual:false

3 - 4
// Prediction:-1
// Actual:-1

"Bob" - "bill"
// Prediction:Pas possible
// Actual:NaN