"use strict";

let lap = 1; //1. code that executes before the loop begins

//2. lap<=500 is the condition that must be true in order for the loop to keep executing
while (lap <= 500) {
  console.log("Car is on lap: " + lap);
  lap = lap + 1; //lap++ | 3. code that runs at the bottom of each iteration
}

for (let lap = 1; lap <= 500; lap = lap + 1) {
  console.log("Car is on lap: " + lap);
}