//Exercice 1 : Utilisateurs
//Récupération du div et affichage
var contenu_div = document.getElementById("container").innerHTML;
console.log(contenu_div);
//Changement du nom Pete en Richard
var Changement_Nom=document.body.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling
Changement_Nom.textContent="Richard";
console.log(Changement_Nom);
console.log(Changement_Nom.textContent);
//Remplacement de chaque prénom des deux <ul> par notre nom
var Changement_Nom1=document.getElementsByTagName("ul");
console.log(Changement_Nom1);
for (const element of Changement_Nom1) 
{
		Changement=element.firstElementChild;
		console.log(Changement);
		Changement=element.firstElementChild.textContent="Abdoul"
		console.log(Changement);
}

//Suppression du <li> qui contient le noeud de texte "Sarah"
var Changement_Nom2=document.getElementsByTagName("li");
console.log(Changement_Nom2);
for (const elements of Changement_Nom2)
{
	Changement1=elements.textContent
	if(Changement1==="Sarah"){
		console.log(Changement1 + " sera supprimé");
		Changement_Nom3=elements;
		Changement_Nom3=Changement_Nom3.outerHTML="";
		console.log(Changement_Nom3);
				
	}
}
//Exercice 1 terminé

//Exercice 2 : Utilisateurs et Style
//Ajout du code au fichier html
//Code ajouté
//Ajout d'une couleur d'arrière plan "bleu clair" et un peu de rembourrage au fichier <div>
var Changement2=document.body.firstElementChild;
	console.log(Changement2);
	Changement2.style.background="lightblue";
	Changement2.style.padding= "4%";
//Suppression du <li> contenant le noeud de texte "John"
// var Changement3=document.getElementsByTagName("ul");
// 	console.log(Changement3);
for (const elements of Changement_Nom2)
{
	Changement3=elements.textContent
	if(Changement3==="John"){
		console.log(Changement3 + " sera supprimé");
		Changement_Nom4=elements;
		Changement_Nom4=Changement_Nom4.outerHTML="";
		console.log(Changement_Nom4);
	}
}
//Ajout d'une bordure contenant le noeud de texte "Pete"
var Changement4=document.getElementsByTagName("li");
console.log(Changement4);
for (const element of Changement4) {
	if(element.innerText==="Pete"){
		element.style.border="solid red 3px"	
	}
}

//Modification de la taille de police de tout le corps
var Changement5=document.body;
Changement5.style.fontSize="50px";
//Exercice 2 terminé

