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
	

