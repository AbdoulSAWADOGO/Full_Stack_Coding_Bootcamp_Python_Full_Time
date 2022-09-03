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