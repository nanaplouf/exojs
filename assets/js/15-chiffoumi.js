console.log("hello");

// Récupération du choix du joueur.
let player = prompt("Que choisissez-vous : pierre, feuille ou ciseau ?"); 
let computer;

let choixordi = Math.random(); 

if (choixordi <= 0.33) { 
    computer = "pierre"; 
}else if (choixordi <= 0.66){
    computer = "feuille"
}else{
    computer= "ciseaux"
}

document.write(`<p>Vous avez choisi ${player} l'ordinateur à choisi ${computer} <p>`);


if (computer == player){
    document.write('<p>Vous avez choisi la même chose : égalité !</p>');
}else{
    switch(computer)
    {
        case 'ciseau':
            if(player == 'pierre'){
                document.write('<p>La pierre écrase le ciseau : vous gagnez !</p>');
            }
            else // player == 'feuille'
            {
                document.write('<p>La feuille est découpée par le ciseau : vous perdez !</p>');
            }
        break;

        case 'feuille':
            if(player == 'pierre'){
                document.write('<p>La pierre est enveloppée par la feuille : vous perdez !</p>');
            }else // player == 'ciseau'
            {
                document.write('<p>Le ciseau découpe la feuille : vous gagnez !</p>');
            }
        break;

        case 'pierre':
            if(player == 'feuille'){
                document.write('<p>La feuille enveloppe la pierre : vous gagnez !</p>');
            }else // player == 'ciseau'
            {
                document.write('<p>Le ciseau est écrasé par la pierre : vous perdez !</p>');
            }
        break;
    }
}