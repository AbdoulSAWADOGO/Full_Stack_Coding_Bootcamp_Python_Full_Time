//Récupération de la chaîne que doit entrer l'utilisateur et affichage
let sentence = prompt("Exemple://The movie is not that bad, I like it// Alors entrer une phrase contenant les mots not et bad ====>");
console.log(sentence);
//Variable de récupération de la première apparition de la sous chaîne not
let wordNot = sentence.indexOf("not");
// console.log(wordNot);
//Variable de récupération de la première apparition de la sous chaine bad
let wordBad = sentence.indexOf("bad");
// console.log(wordBad);

//utilisation des conditions et remplacement de certains mots
if (wordNot < wordBad)
{
	// reg = /not|bad/ig;
	sentence = sentence.replace(sentence.substring(wordNot,wordBad+3), "good");	//sentence = sentence.replace(/bad/ig, "");
	console.log(sentence);
}
else {
	console.log(sentence);
}

//La solution ne gère pas correctement ce qu'on a demandé
//En demandant de l'aide à un collègue, je viens de trouver la solution qui m'a permi de perfectionner ma solution
