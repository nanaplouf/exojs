console.log("hello");

function maSomme( nb1 , nb2){

    let resultat = nb1 + nb2;

    return resultat;

}

let nombreUtilisateur1=parseFloat(prompt("Entrez un nombre","15")); 

let nombreUtilisateur2=parseFloat(prompt("Entrez un nombre","15")); 


let resultat = maSomme(nombreUtilisateur1,nombreUtilisateur2);
console.log(resultat);

document.write(`<p>${nombreUtilisateur1} + ${nombreUtilisateur2} est égale à ${resultat} <p/>`);

