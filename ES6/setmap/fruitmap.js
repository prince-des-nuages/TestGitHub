const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  console.log(fruits);
  console.log("apples: "+fruits.get("apples"));
  fruits.set("apples", 600);
  console.log("apples: "+fruits.get("apples"));