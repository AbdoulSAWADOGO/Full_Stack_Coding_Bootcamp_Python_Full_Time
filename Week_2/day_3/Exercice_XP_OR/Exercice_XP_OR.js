//Exercice 1 : Divisible par trois
//Tableau donné
let numbers = [123, 8409, 100053, 333333333, 7];
//Parcours du tableau pour déterminer si le nombre est divisible par trois ou non
for (let i in numbers)
{
	if (numbers[i]%3 == 0)
	{
		console.log("le nombre " + numbers[i] + " est divible par 3.", "true");
	}
	else
	{
		console.log("le nombre " + numbers[i] + " n'est pas divible par 3.", "false");

	}
}
//Exercice 1 terminé avec succès


//Exercice 2 : Présence
//Copie de l'objet donné
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}

//Demande du nom de l'élève
let nom_eleve = prompt("Entrer votre nom svp");
	if (nom_eleve in guestList)
	{
		console.log("salut! je suis " + nom_eleve + " ,et je viens de " + guestList[nom_eleve])
	}
	else
	{
		console.log("salut! je suis présent");
	}
	//Exercice 2 terminé avec succès