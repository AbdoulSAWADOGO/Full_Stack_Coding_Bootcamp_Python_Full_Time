//Exercice 1 : Vérification de l'IMC
//Création de deux objets et des détails
let personne = [
{
	Nom : "SAWADOGO",
	Prenom : "Abdoul",
	Masse : 73,
	Hauteur : 175,
	IMC : function () {
		 let IMC = (this.Hauteur/(this.Masse*this.Masse));
				return IMC;
			}
},
{
	Nom : "SANKARA",
	Prenom : "Steve",
	Masse : 83,
	Hauteur : 198,
	IMC : function () {
		 let IMC = (this.Hauteur/(this.Masse*this.Masse));
				return IMC;
			}
}
];
//Ajout d'une clé qui est l'indice de masse corporelle de chaque personne

//Ecriture d'une fonction de comparaison des deux IMC et affichage du nom de celui qui a le plus grand IMC

function comparaison(){
		if (personne[0].IMC() > personne[1].IMC())
			console.log("Celui qui a le plius grand IMC est " ,personne[0].Nom, personne[0].Prenom);
		else
			console.log("C'est " ,personne[1].Nom , personne[1].Prenom  , "qui a le plus grand IMC");
	}

	comparaison();

	//Exercice 1 terminé avec succès


	//Exercice 2 :
	//Moyenne Scolaire

//Création de la fonction appelée findAvg(gradesList)qui prend un argument appelé gradesList.
	function findAvg(gradeslist) {
		Moyenne = 0;
		for(let i of gradeslist)
		{
			Moyenne = Moyenne + i ;
		}
		//calcul et affichage de la Moyenne
		Moyenne = (Moyenne/gradeslist.length);
		if (Moyenne > 65)
			console.log("Vous avez réussi!!!");
		else 
			console.log("Vous avez échoué, vous devez répéter le cours");		
	}
	findAvg([12,16,19,12,13,15,78,95]);

	//Exercice XP Ninja terminé avec succès
