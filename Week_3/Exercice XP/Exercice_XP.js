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

//Exercice 3 : Changer la barre de navigation
//Ajout du code donné au fichier html
var Changement6=document.getElementsByTagName("div");
Changement6.setAttribute("id", "socialNetworkNavigation");
console.log(Changement6);

//Ajout d'un nouveau <li> au <ul>
//Creation d'une nouvelle balise, d'un nouveau noeud,ajout du noeud de texte et du noeud de liste
liste = document.createElement('li');
console.log(liste);
noeud = document.createTextNode("Déconnexion");
console.log(noeud);
liste.appendChild(noeud);
console.log(liste);
ajout=document.body.firstElementChild.firstElementChild;
console.log(ajout);
ajout.appendChild(liste);

//Exercice 3 terminé

//Exercice 4 : Ma liste de livres
//Création d'un div vide dans le corps de html
//Création d'un tableau dans le fichier java script appelé allbooks
divit = document.createElement('div');
divit.setAttribute("class", "listBooks");
console.log(divit);
document.body.appendChild(divit)

		var book= new Object();
			
			book.title=" ";
			book.author=" "
			book.image=" ";
			book.alreadyRead=0;
			
		
		var allBooks=[];
		console.log(book);
		console.log(allBooks);
		var books=[];
		for(var i=0;i<2;i++){
			books[i]=new Object;
			books[i].title=prompt("svp entrer le titre du livre "+(i+1)+"");
			console.log(books[i].title);
			books[i].author=prompt("svp, entrer l'auteur du livre "+(i+1)+"");
			console.log(books[i].author);
			books[i].image=prompt("svp, entrer l'image du livre "+(i+1)+"");
			console.log(books[i].title);
			do{
			books[i].alreadyRead=prompt("svp, vous êtes prêts à lire un livre "+(i+1)+" ?\nType: 1-Yes\t\t 2-No");
			books[i].alreadyRead=parseInt(books[i].alreadyRead);
			console.log(typeof(books[i].alreadyRead)+books[i].alreadyRead);
			console.log(books[i].alreadyRead);
			}while(!books[i].alreadyRead ||(books[i].alreadyRead!==2 && books[i].alreadyRead!==1));
			allBooks[i]=books[i];
			console.log(allBooks);

		}

		newp=[];
		newimg=[];
		newTextNode=[];
		for (var j=0;j<2;j++){
			newp[j] = document.createElement('p');
			console.log(newp[j]);
			newimg[j] = document.createElement('img');
			newimg[j].setAttribute("src",allBooks[j].image);
			newimg[j].setAttribute("width","100px");
			console.log(newimg[j]);
			newTextNode[j] = document.createTextNode(" "+allBooks[j].title+" écrit par "+allBooks[j].author+" ");
			console.log(newTextNode[j]);
			newp[j].appendChild(newimg[j]);
			console.log(newp[j]);
			newp[j].appendChild(newTextNode[j]);
			console.log(newp[j]);
			document.body.firstElementChild.nextElementSibling.appendChild(newp[j])
			if(allBooks[j].alreadyRead===1){
				newp[j].style.color="red";
			}
			
		}
//Exercice 4 terminé	


