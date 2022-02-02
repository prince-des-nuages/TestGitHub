var a = 10;
if (a == 10) {
    var a = 20;
    console.log("var in if: "+a); // 20:  reference  at the begining of the script
}
console.log("var in script: "+a); // 20: reference at the begining of the script

if (a == 20) {
    let a = 30;
    console.log("let in if: "+a); // 20:  reference x inside the block
}
console.log("var in script: "+a); // 10: reference at the begining of the script

