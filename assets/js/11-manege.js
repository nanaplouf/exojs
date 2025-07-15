console.log('hello');

for (let i = 1; i <= 10; i++){
    document.write("<p style='color:red'> C'est le tour de manège n°:"+ i + "</p>");
}

let tourUser = parseInt(prompt("Entrez un nombre de tour","17"));
let tour = 1;

while(tour <= tourUser){
    document.write(`<p>C'est le tour de manège n° ${tour}</p>`)
    tour++
}

