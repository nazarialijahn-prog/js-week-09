// Movie_tickets = 400;
// Food = 300;
// Drink = 160;
// tip = 10%;
// Friends = 4;

let movie_tickets = 400;
let Food = 300;
let Drink = 160;
let tip = 10;

let MFD = (movie_tickets + Food + Drink);
let tipPrice = MFD * tip / 100;
let totalAmount = MFD + tipPrice ;
let eachPerson = totalAmount / 4 ;
let receipt = "    Hotel Receipt    ";
receipt = receipt.trim();
receipt =receipt.slice();

console.log("Movie_ticket: $" + movie_tickets.toFixed(2));
console.log("Food: $" + Food.toFixed(2));
console.log("Drink: $" + Drink.toFixed(2));

console.log("Tip: $" + tipPrice.toFixed(2));
console.log("Total: $" + totalAmount.toFixed(2));
console.log("Each Person: $" + eachPerson.toFixed(2));
console.log(receipt.toUpperCase());
