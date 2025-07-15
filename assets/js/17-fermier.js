console.log("heyouuuuuu !");

function nombrePattes(nbVache, nbPoulet, nbPoney){
    let calcul;
    calcul = (nbVache * 4) + (nbPoulet * 2) + (nbPoney * 4);
    return calcul;
}

let vacheFermier = parseInt(prompt("Tu as combien de vache ?"));
let pouletFermier = parseInt(prompt("Tu as combien de poulet ?"));
let poneyFermier = parseInt(prompt("Tu as combien de poney ?"));

let resultat = nombrePattes(vacheFermier, pouletFermier, poneyFermier);
document.write(`<p>Le nombre total de patte est de : ${resultat}</p>`);

