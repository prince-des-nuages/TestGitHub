let text = `He's often called "Johnny"`;
console.log(text);
text =
`The quick
brown fox
jumps over
the lazy dog`;
console.log(text);

let firstName = "John";
let lastName = "Doe";
text = `Welcome ${firstName}, ${lastName}!`;
console.log(text);

let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);

let escaped = `3 > 4; true&false;      <br/>`;
console.log(escaped);