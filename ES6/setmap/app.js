// Create a Set
const letters = new Set(["a","b","c"]);
// Display set.size
console.log("letters.size: "+letters.size);
for (const letter of letters) {
    console.log("letter: "+letter);
}
console.log("forEach");
let text = "";
letters.forEach (function(value) {
  console.log("value: "+value);    
  text += value;
})
console.log("forEach arrow");
letters.forEach (value => {
  console.log("value: "+value);    
  text += value;
})
console.log("text: "+text);
const numbers = new Set();
numbers.add(1);
console.log("numbers.size: "+numbers.size);
