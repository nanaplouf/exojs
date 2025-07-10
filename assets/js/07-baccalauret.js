console.log("heyou");

let moyenne;

moyenne = parseFloat(prompt("Entre ta moyenne","14.7"));

if (moyenne < 10){
    document.write ("<p>Recalé</p>")
} else if ((moyenne >= 10) && (moyenne < 12)){
    document.write ("<p>Reçu</p>")
} else if ((moyenne >= 12) && (moyenne <= 20)){
    document.write ("<p>Mention<p/>")
}else{
    document.write("<p>Moyenne non valide<p/>")
}
