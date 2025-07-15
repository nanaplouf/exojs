console.log("coucou");
for(let nombre = 1; nombre <= 100 ; nombre++){
    
    if((nombre % 3 === 0) && (nombre % 5 === 0)){
        document.write(`<p style='color:#cf27c1' >FizzBuzz </p>`);
    }else if(nombre % 3 === 0){
        document.write(`<p style='color:#334df1' >Fizz </p>`);
    }else if(nombre % 5 === 0){
        document.write(`<p style='color:#2c0d49' > Buzz </p>`);
    }else{
        document.write(`<p> ${nombre} </p>`)
    }
}