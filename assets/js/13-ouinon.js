console.log("hello");

let reponse; 
let tour = 0;

while( (reponse != "oui") && (reponse != "non") && (reponse != "OUI") && (reponse != "NON") && (reponse != "Oui") && (reponse != "Non")) {
    reponse = prompt("On joue à ni oui ni non?");
    tour++ 
}

document.write(`<p>Tu as perdu au bout de ${tour} </p>`);
document.write("<p>Tu as perdu au bout de " + tour + "</p>")