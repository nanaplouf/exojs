console.log("hello");


for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair");
    }else {
        console.log(i + " est impair");
    }
}

let nombre =  prompt("donne moi un nombre","18");

nombre = parseInt(nombre);

let nombreMax = nombre + 10;

while(nombre <= nombreMax){
    if (nombre % 2 === 0){
        document.write("<p>" + nombre + " c'est un nombre pair </p>")
    
    }else{
        document.write("<p>" + nombre + " c'est un nombre impair </p>")   
    }
    nombre++
    
}