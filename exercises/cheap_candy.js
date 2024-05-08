"use strict";

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
   ];

   // Which candies costs less than $4.00?
   let candiesLessThanFourDollars = []
   for (let i = 0; i < products.length; i++) {
    if (products[i].price < 4) {
        candiesLessThanFourDollars.push(products[i].product);
    }
    
   }
   console.log(candiesLessThanFourDollars);

   // Which candies has "M&M" its name?
   let candiesWithMAndM = []
   for (let i = 0; i < products.length; i++) {
    if (products[i].product.includes("M&M")) {
        candiesWithMAndM.push(products[i].product)
    }
    
   }
   console.log(candiesWithMAndM);

   // Do we carry "Swedish Fish"?
   let carrySwedishFish = false;
   for (let i = 0; i < products.length; i++) {
    if (products[i].product == "Swedish Fish") {
        carrySwedishFish = true;
        break;
    }
    
   }
   if (carrySwedishFish) {
    console.log("Yes, it carry Swedish Fish.");
   }else{
    console.log("No");
   }