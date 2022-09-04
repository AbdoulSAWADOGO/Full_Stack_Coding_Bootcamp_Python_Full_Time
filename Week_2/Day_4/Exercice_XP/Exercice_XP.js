//Exercice 1 : Informations
//Partie I: Fonctions sans paramètres
//Création de la fonction infoAboutMe()

function infoAboutMe()
{
	console.log("Mon nom est SAWADOGO et j'ai 23 ans. Mon loisir est le sport ");
}
//Appel de la fonction
infoAboutMe();
//Fin
//Partie II : Fonctions à trois paramètres
//Création d'une fonction qui prnds 3 paramètres
function infoAboutPerson(nom_personne,age_personne,bleu_personne) 
{
	console.log("Vous vous appelez " + nom_personne + " .Vous avez " + age_personne + " ans et votre couleur preferée est " + bleu_personne);
}
//test de la fonction par appel avec mes exemples
infoAboutPerson("SAWADOGO",23,"bleu");
infoAboutPerson("SANKARA",22,"jaune");
//test de la fonction par appel avec les exemples donnés dans le cours
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");
//Fonction à trois paramètres terminée avec succès

//Exercice 2 : 
//Création de la fonction CalculateTip()
function calculateTip(){
	montant = Number(prompt ("quel est le montant de votre favture svp"));
	if (montant < 50){
		console.log("Laisser un pourboire de 20%");
		montant_pourboire= (montant*20)/100;
	}
	else if (montant > 50 && montant < 200){
		console.log("pourboire de 15%");
		montant_pourboire= (montant*15)/100;
	}
	else{
		console.log("Laisser un pouboire de 10%");
		montant_pourboire= (montant*10)/100;
	}
	console.log("pourboire==> ", montant_pourboire, "$ et la facture total==> ",montant+montant_pourboire, "$");

}
//Appel de la fonction
calculateTip();
//Exercice 2 terminé

//Exercice 3 : Trouver les nombres divisibles par 23
//Création de la fonction isDivisible() sans parameters
function isDivisible()
{
	console.log("Outcome : ")
	let somme = 0;
	for (let i = 0; i <= 500; i++)
		{
			if ( i % 23 == 0) 
			{
				console.log(i + " ");
				somme += i;
			}
		}
		console.log("Sum : ",somme);
	}
isDivisible();
//Exercice 3 terminé avec succès

//Bonus
function isDivisible(divisor)
{
	console.log("Les nombres divisibles par : ", divisor)
	let somme = 0;
	for (let i = 0; i <= 500; i++)
		{
			if ( i % divisor == 0) 
			{
				console.log(i + " ");
				somme += i;
			}
		}
		console.log("Sum : ",somme);
	}
isDivisible(prompt("Entrer le diviseur svp==>"));

//Exercice 4 : Liste des courses
//Copie des objets donnés par l'exercice
let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

//Création d'un tableau appelé shoppingList avec des éléments banane,orange et pomme
let shoppingList =
[
	"banana",
	"orange",
	"apple"
];
//Créatio de la fonction myBill()
function myBill()
{
let prix = 0;
for(let i of shoppingList)
	{
			if (stock[i] > 0) //Si l'article est en stock
			{
				//Dimunition du stock de 1 le bonus
				stock[i]=stock[i] - 1;
				console.log("le prix est ", prices[i]);
			} 
			else 
			{
				console.log("L'article ", i ,"n'est pas en stock");
			}
	}
}
myBill();

//Exercice 5 : Ce qu'il y'a dans mon portefeuille

function changeEnough(itemPrice, amountOfChange) 
{
	//Calcul du montant de la monnaie disponible dans ma poche
	let monnaie = 0;
	monnaie += amountOfChange[0]*0.25;
	monnaie += amountOfChange[1]*0.10;
	monnaie += amountOfChange[2]*0.05;
	monnaie += amountOfChange[3]*0.01;
	//Comparaison de la monnaie et du prix de la marchandise
		if(monnaie >= itemPrice) 
		{
			console.log("True");
		} 
		else 
		{
			console.log("false");
		}
}
changeEnough(4.25, [25, 20, 5, 0]);
changeEnough(14.11, [2,100,0,0]);

//Exercice 5 terminé avec succès

//Exercice 6 : Frais de vacances
//Création de fonctions qui calculent les coûts de vacances
//Fonction hôtel
function hotelCost() 
{	
	while(1) 
	{
		let nombreNuit = Number(prompt("Combien de nuits vous voulez passer ici svp"));
			if (!nombreNuit) {
				console.log("Redonner nous le nombre de nuits que vous souhaitez passer ici svp");
			} 
			else 
			{
				console.log("l'hôtel coûte 140$ par nuit")
			}
	}
}
hotelCost();
//Fonction destination
function planeRideCost() 
{
	while(1) 
	{
		let destination = string(prompt("Svp quelle est votre destination"));
			if (!destination) 
			{
				console.log("Entrer à nouveau votre destination svp");
			} 
			else 
			{
				if (destination=="Londres") 
					{
						console.log("ça vous coutera 183$");
					}
				else if (destination=="Paris")
					{
						console.log("ça vous coutera 220$");
					}
				else
					{
						console.log("ça vous coutera 300$");
					}
				
			}
	}
}
planeRideCost();

//Fonction de location de voiture
function rentalCarcost() 
{
	while(1) 
	{
		let voiture = Number(prompt("Combien de jours souhaitez vous louer la voiture"));
			if (!voiture)
			{
				console.log("Svp veuiller redonner le nombre de voiture que vous voulez louer"); 				
			} 
			else 
			{
				console.log("le prix de location d'une voiture par jour fait 40$")
				if (voiture > 10)
					{
						reduc =((40*voiture)*5)/100;
						prix = (40*voiture)-reduc;
					}
				else 
					{
						prix= 40*voiture;
					}
						console.log("le prix total de location des voitures par jour fait==>", prix);

			}
	}
}
rentalCarcost();

//Fonction vocation totale
function totalVacationCost() 
{
	console.log("L'hôtel coûte : ", hotelCost());
	console.log("Les billets d'avions coûtent : ", planeRideCost());
	console.log("La voiture coûte : ", rentalCarcost());
}
totalVacationCost();

//Exercice XP terminé avec succès