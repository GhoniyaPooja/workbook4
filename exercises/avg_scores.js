"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];
let sum = 0;
function getAverage(myScores) {
  for (let i = 0; i < myScores.length; i++) {
    sum += myScores[i];
  }
  return sum / myScores.length;
}
let myAverage = getAverage(myScores);
console.log("My average score is: " + myAverage);
