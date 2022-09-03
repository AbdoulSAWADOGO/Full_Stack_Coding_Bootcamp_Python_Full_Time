//Exercice défis du jour gold
//copie du tableau de constantes donné
const numbers = [5,0,9,1,7,4,2,6,3,8];
//Avec .toString()méthode, convertissons le tableau en chaîne.
let numbers_convertis = numbers.toString();
//Avec .join()méthode, convertissons le tableau en chaîne. Essayez de transmettre différentes valeurs dans la jointure.
numbers_convertis = numbers_convertis.split(",");
numbers_convertis = numbers_convertis.join("+");
console.log(numbers_convertis);
numbers_convertis = numbers_convertis.join(" ");
console.log(numbers_convertis);
numbers_convertis = numbers_convertis.join("");
console.log(numbers_convertis);
//Exercice terminé avec succès

//Bonus

let numbers_tri = numbers.slice();
	for( let i = 0; i < numbers_tri.length+15; i++) {	
		let toto;
		for(let j = 0; j < numbers_tri.length; j++) {
			if(numbers_tri[j] < numbers_tri[j+1]) {
				toto = numbers_tri[j];
				numbers_tri[j]=numbers_tri[j+1];
				numbers_tri[j+1]=toto;
			}
		}
	}
	console.log(numbers_tri);
	//Bonus terminé également