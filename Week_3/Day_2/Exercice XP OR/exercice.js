//Exercice 1
//Affichage de la valeur de l'option sélectionnée.
console.log(document.querySelectorAll('[selected]'));
var select1=document.querySelectorAll('[selected]')[0].value
console.log(select1)
alert(select1)
//Ajout d'une option supplémentaire au selecttag :
newoption=document.createElement("option");
newoption.setAttribute("value","classic");
newText= document.createTextNode("classic");
newoption.appendChild(newText);
console.log(newoption);
document.getElementById("genres").appendChild(newoption)


//L'option nouvellement ajoutée doit être sélectionnée par défaut.
document.getElementById("genres").children[2].selected=true;
console.log(document.getElementById("genres").children[2]);

//Exercice 2

//Ajoutez un clickécouteur d'événement au <input type="button">. Lorsque vous cliquez dessus, il doit appeler une fonction nommée : removecolor()qui supprime la couleur sélectionnée de la liste déroulante
console.log(document.getElementById("colorSelect").nextElementSibling);
var select1=document.getElementById("colorSelect").nextElementSibling;
select1.setAttribute("onclick","removecolor()")
function removecolor(){
	select2=document.getElementById("colorSelect").value;
	console.log(select2);
	var Aray=document.getElementsByTagName("option");
	for (const elements of Aray ) {
		if(elements.textContent===select2){
			elements.outerHTML="";	
		}
		
	}
}

//Exercice 3

//Créons un tableau vide. Par exemple : let shoppingList=[] .
let shoppingList=[]

//Créez un formulaire contenant : un champ de saisie de texte et un bouton « AddItem ». Ajoutez ce formulaire au DOM
newform=document.createElement("form");
newinput=document.createElement("input");
newinput.setAttribute("placeholder","your artile")
newinput.setAttribute("id","val");
newbutton=document.createElement("button");
newText= document.createTextNode("AddItem");
newbutton.setAttribute("onclick","addItem()");
newbutton.appendChild(newText);
newbutton.addEventListener("click",function(event){
event.preventDefault()
});
newform.appendChild(newinput);
newform.appendChild(newbutton);
document.getElementById("root").appendChild(newform);
//Tapez ce que vous devez acheter dans le champ de saisie de texte, puis ajoutez le nouvel article au tableau dès que vous cliquez sur le bouton "AddItem" ( Astuce : créez une fonction nommée addItem()).
function addItem(){
	var select=document.getElementById("val").value;
	console.log(select);
	shoppingList[shoppingList.length]=select;
	console.log("votre liste de courses")
	for (const element of shoppingList){
		console.log(element);
		alert(element)
	}

}	
//Ajoutez un bouton "ClearAll" au DOM, qui, une fois cliqué, devrait appeler la clearAll()fonction (voir ci-dessous).
newbutton2=document.createElement("button");
newText2 = document.createTextNode("clearAll");
newbutton2.setAttribute("onclick","clearAll()");
newbutton2.appendChild(newText2);
newbutton2.addEventListener("click",function(event){
event.preventDefault()
});

//Créez une fonction nommée clearAll()qui doit effacer tous les éléments de la liste de courses.
document.getElementById("root").appendChild(newbutton2);
		function clearAll(){
			console.log(shoppingList)
			shoppingList.length=0;
			console.log("votre liste de courses est vide");
			alert("votre liste de courses est vide");
		}





















		