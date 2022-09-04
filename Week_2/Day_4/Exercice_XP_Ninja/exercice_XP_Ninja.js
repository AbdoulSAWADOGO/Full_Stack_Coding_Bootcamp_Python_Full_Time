//Exercice 1 : Nombre Aléatoire
//un nombre aléatoire entre 1 et 100 puis affichage des nombres pairs
//fonction de retour d'un nombre aléatoire entre 1 et 100
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let nombre = getRandomInt(100);
//affichage des nombres pairs
for ( let i = 1 ; i <= nombre; i++)
{ 
	if (i%2 == 0 )
	{ 
	    console.log(i);
	}
}
//Exercice 1 terminé avec succès