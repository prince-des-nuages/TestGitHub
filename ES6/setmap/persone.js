var persone = new Set();
var p1 = {nome: "Tizio"};
var p2 = {nome: "Caio"};
var p3 = {nome: "Sempronio"};
persone.add(p1);
persone.add(p2);
persone.add(p3);

for (let persona of persone) {
    console.log("nome: "+persona.nome);
}