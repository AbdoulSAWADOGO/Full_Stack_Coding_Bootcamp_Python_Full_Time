//Demande de mots à l'utilisateur
let chaine = prompt("Svp entrer plusieurs mots et séparez-les par des virgules");
//Rangements de ces mots dans un tableau
chaine = chaine.split(",");
//Affichage des mots dans un cadre rectangulaire
let affich=0;
let etoile="*";
for(let mot of chaine){
    if(affich<mot.length)
    {
        affich=mot.length;
    }
}

for(let i=0;i<chaine.length;i++)
{
    
    if(i==0) 
    {
        console.log("*".padStart((max+4),"*"));
    }
        console.log("* " +phrase[i].concat("".padStart(((max+4)-2)-(2+phrase[i].length)), " ") +"*");
    if(i==phrase.length-1)
    {
        console.log("*".padStart((max+4),"*"));
    }
}