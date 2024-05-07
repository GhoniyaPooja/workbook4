"use strict";

let lunch = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];
let subtotal = 0;
for (let i = 0; i < lunch.length; i++) {
  subtotal += lunch[i].price;
}

let taxRate = 0.08;
let tax = subtotal * taxRate;
let tipRate = 0.18;
let tip = subtotal * tipRate;
let totalDue = subtotal + tax + tip;

console.log("The subtotal of lunch: " + subtotal);
console.log("Adding 8% tax: " + tax);
console.log("Adding 18% tip: " + tip);
console.log("The total due is: " + totalDue);
