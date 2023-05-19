let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  // TODO: fill the array with 10 candies of various
  // price ranges
];
// Which candies costs less than $4.00?
const candiesThatAreCheap = products.filter((p) => p.price < 4);
console.log(candiesThatAreCheap);
console.log("=================");
// Which candies has "M&M" in its name?
const candiesWithMAndM = products.filter(c => c.product.includes('M&Ms'));
console.log(candiesWithMAndM);
console.log("=================");
// Do we carry "Swedish Fish"?
console.log("=========Do we carry 'Swedish Fish'?==========");
let swedishFish = products.find((p) => p.product == "Swedish Fish");
const answer = swedishFish ? "Yes" : "No";
console.log(answer);