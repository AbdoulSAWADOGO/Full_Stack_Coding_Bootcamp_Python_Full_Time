//Exercice 1
5 >= 1
//prédiction:true
//actual:true
0 === 1
//prédiction:false
//actual:false
4 <= 1
//prédiction:false
//actual:false
1 != 1
//prédiction:false
//actual:false
"A" > "B"
//prédiction:false
//actual:false // La comparaison se fait suivant les valeurs en ASCII 
"B" < "C"
//prédiction:true  
//actual:true
"a" > "A" // a vaut 97  et A vaut 65 donc les minuscules sont supérieurs aux majuscules 
//prédiction:false
//actual:true // a vaut 97  et A vaut 65 donc les minuscules sont supérieurs aux majuscules 
"b" < "A"
//prédiction:false
//actual:false
true === false
//prédiction:false
//actual:false
true != true
//prédiction:false
//actual:false

//Exercice 2
//Demande d'une chaine de chiffres separée par des virgules
let chiffre = prompt("Svp taper les nombres que vous voulez et séparés les par des virgules!!!");
chiffre = chiffre.split(",");
console.log("La somme de" , chiffre[1] , " et de" , chiffre[2] , " est de ====>" , Number(chiffre[1]) + Number(chiffre[2]) );

//Exercice 3
//Recherche de Nemo

//Demande de saisie d'une phrase contenant le mot Nemo
let Trouver = prompt("Svp entrer une phrase avec le mot Nemo contenu dans la prase");
//Recherche de la position de Nemo
Nemo = Trouver.indexOf("Nemo");
//Affichage de la position de Nemo
//Affichage de la réponse de si on a trouvé Nemo ou pas
if ( Nemo != -1) {
	console.log("Nemo a été trouvée à la position n°" , Nemo);
} else {
    console.log("Nemo n'a pas été trouvée dans votre phrase");  
}

//Après vérification, je me rend compte que la casse est sensible avec mon bout de code 


//Exercice 4


    let number = prompt(" Svp entrez un numéro");
    number = Number(number);
    var renvoie = "Boum";
    if (number < 2) {
		console.log("le nombre est inférieur à 2 ====>", renvoie );
        }