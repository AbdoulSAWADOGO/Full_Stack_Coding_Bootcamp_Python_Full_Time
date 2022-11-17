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