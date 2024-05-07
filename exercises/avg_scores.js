"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];
let sum = 0;
function getAverage(scores) {
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}
let myAverage = getAverage(yourScores);
console.log("My average score is: " + myAverage);
