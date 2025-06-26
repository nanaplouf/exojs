let prixHorsTaxe;

prixHorsTaxe = prompt("Donne moi un prix HT :", "exemple 50");
// C'est une string 
console.log( typeof prixHorsTaxe, prixHorsTaxe);
// On change en valeur float
prixHorsTaxe = parseFloat(prixHorsTaxe);
console.log( typeof prixHorsTaxe, prixHorsTaxe);

let tva, prixTTC, totalTVA;

tva = 0.20;

totalTVA = prixHorsTaxe * tva;

prixTTC = prixHorsTaxe + totalTVA;

console.log(prixTTC)

document.write("<p>Résultat :<br />Le prix TTC est de " + prixTTC + "€.</p>");