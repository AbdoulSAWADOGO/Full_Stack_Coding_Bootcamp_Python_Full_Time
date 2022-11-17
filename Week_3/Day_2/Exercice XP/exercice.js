//Exercice 1 : Modification d'articles
//Récupération de h1 et console.log
console.log(document.body.firstElementChild.firstElementChild.textContent);
//Suppression du dernier paragraphe
document.body.firstElementChild.lastElementChild.outerHTML=" ";
console.log(document.body.firstElementChild.lastElementChild);
//Ajout d'un écouteur d'évènement qui changera la couleur d'arrière plan du h2 en rouge
console.log(document.body.firstElementChild.firstElementChild.nextElementSibling);
document.body.firstElementChild.firstElementChild.nextElementSibling.setAttribute("onclick","color()");	
function color(){
	document.body.firstElementChild.firstElementChild.nextElementSibling.style.backgroundColor="red"
	}
//Ajout d'un écouteur d'évènement qui masquera le h3 lorsqu'il est cliqué
console.log(document.body.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling);
document.body.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.setAttribute("onclick","hider()");
function hider(){
	document.body.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.style.display="none"
		}
//Ajout d'un bouton au fichier html qui lorsqu'on clique dessus met tous les paragraphes en gras
newbutton=document.createElement("button");
console.log(newbutton);
newbutton.textContent='cliquez ici pour mettre les paragraphes en gras'
newbutton.setAttribute("onclick","bolder()");
function bolder(){
	document.body.style.fontWeight="bold"
	}
document.body.appendChild(newbutton);
//BONUS : Lorsque vous survolez le h1, définissez la taille de la police sur une taille de pixel aléatoire comprise entre 0 et 100		
//console.log(document.body.firstElementChild.firstElementChild);
//document.body.firstElementChild.firstElementChild.setAttribute("onmouseover","hooverr()")
//function hooverr(){
//	var selected=Math.floor(Math.random() * 100);
//	console.log(selected);
//	document.body.firstElementChild.firstElementChild.style.fontSize=selected+"px";
//	}
//document.body.appendChild(newbutton);


//Exercice 2

//Récupération du formulaire et console.log
console.log(document.body.children[0]);
//récupération des entrées par leur identifiant et console.log
console.log(document.getElementById("fname"));
console.log(document.getElementById("lname"));
//Récupération des entrées par leur nom d'attribut
console.log( document.querySelectorAll('[name]'));
//Lorsque l'utilisateur soumet le formulaire
document.getElementById("submit").addEventListener("click",function(event){
event.preventDefault()
	});
var changer=document.body.children[0].children[9];
changer.setAttribute("onclick","addi()")
console.log(changer);
function addi(){
	var change1=document.getElementById("fname").value;
	var change2=document.getElementById("lname").value;
	console.log(change1+" and "+change2);
	if(change1!=="" && change2!==""){
		console.log("valid input");
		newli1=document.createElement("li");
		newTextNode1= document.createTextNode(change1);
		console.log(newTextNode1);
		newli1.appendChild(newTextNode1);
		console.log(newli1);
		newli2=document.createElement("li");
		newTextNode2= document.createTextNode(change2);
		console.log(newTextNode2);
		newli2.appendChild(newTextNode2);
		console.log(newli2);
		change4=changer=document.body.children[1];
		change4.appendChild(newli1);
		change4.appendChild(newli2);
		console.log(change4);
	}else{
		console.log(" one of values is invalid try again");
		alert(" one or both  values are invalid try again");			
	}
}

//Exercice 3

//Déclaration d'une variable globale
		var allBoldItems=[]
//Créez une fonction appelée getBold_items()qui ne prend aucun paramètre. Cette fonction doit collecter tous les éléments en gras à l'intérieur du paragraphe et les affecter à la allBoldItemsvariable.
		function getBold_items(){
			var select=document.getElementsByTagName("strong");
			console.log(select);
			i=-1;
			for (const element of select) {
				i=i+1;
				allBoldItems[i]=element;
			}
			console.log(allBoldItems);
		}
		getBold_items()
//Créez une fonction appelée highlight()qui change la couleur de tout le texte en gras en bleu
		function highlight(){
			for (const elements of allBoldItems) {
			 	 elements.style.color="blue";
			}
		}
//Créez une fonction appelée return_normal()qui change la couleur de tout le texte en gras en noir.
		function return_normal(){
			for (const elements of allBoldItems) {
			 	 elements.style.color="black";
			}
		}
//Appelez la fonction highlight()sur mouseover (c'est-à-dire lorsque le pointeur de la souris est déplacé sur le paragraphe) et la fonction return_normal()sur mouseout (c'est-à-dire lorsque le pointeur de la souris est déplacé hors du paragraphe).
		var changer=document.body.children[0]
		changer.setAttribute("onmouseover","highlight()");
		changer.setAttribute("onmouseout","return_normal()");
		console.log(changer);

//Exercice 4

var change1=document.body.children[1].children[3];
console.log(change1)
var change2=document.getElementById("radius")

change2.setAttribute("oninput","val()")
function val(){
        change2v=document.getElementById("radius").value;
	console.log(change2v)
	change2.textContent=change2v;
	console.log(change2)
	return change2v;
}
console.log(change2.value);
var changer=document.body.children[1].children[4];
function calc(){
      var value =eval(change2.value*change2.value*change2.value);
	value=(value*4*(3.14))/3
	change1.value=value;
}	
var changer=document.body.children[1].children[4];
document.getElementById("submit").addEventListener("click",function(event){
	event.preventDefault()
});
changer.setAttribute("onclick","calc()")



//Exercice 5


//Ajoutez de nombreux écouteurs d'événements à un élément de votre page Web. Utilisez les événements click, mouseoveret .mouseoutdblclick
//Chaque auditeur doit faire une chose différente, par exemple - changer la position x, changer la position y, changer la couleur, changer la taille de la police… et plus encore
document.body.children[0].addEventListener("click",function(){
		Default()
});
function Default(){
	document.body.children[0].style.fontSize="12px";
	document.body.children[0].style.backgroundColor="black";
	document.body.style.backgroundColor="gray";
	document.body.children[0].style.color="white"
}
	document.body.children[0].setAttribute('ondblclick','change1()')
	document.body.children[0].setAttribute("mouseover","nochange()")
	document.body.children[0].setAttribute("mouseout","change2()")

	function change1(){
		document.body.children[0].style.fontSize="100px";
		document.body.children[0].style.backgroundColor="red";
		document.body.style.backgroundColor="orange";
		document.body.children[0].style.color="white"
	}
function change2(){
		document.body.children[0].style.border="solid black 3px";
		document.body.children[0].style.backgroundColor="blue";
		document.body.style.backgroundColor="yellow";
		document.body.children[0].style.color="white"
	}
function nochange(){
		document.body.children[0].style.fontSize="70px";
		document.body.children[0].style.backgroundColor="red";
		document.body.style.backgroundColor="orange";
		document.body.children[0].style.color="white"
	}
















