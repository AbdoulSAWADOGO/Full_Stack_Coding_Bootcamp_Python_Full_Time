//Exercice
//Un programme qui recrée un modèle donné
//En utilisant une boucle


	// console.log("*");
	// console.log("**");
	// console.log("***");
	// console.log("****");
	// console.log("*****");
	// console.log("******");

let x="* ";
for (let i =1; i< 6; i++)
{
	console.log(x);
	x+="* ";
}

//En utilisant deux boucles for imbriquées
let x="*";
for (let i =0; i< 3; i++)

{ 
	for (let j =3; j< 5; j++){


	console.log(x);
	x += "*";
}
}