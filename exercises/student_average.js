"use strict";

let students = [
  { name: "Zephaniah", scores: [100, 96, 99, 92] },
  { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
  { name: "Siddalee", scores: [86, 72, 92] },
  { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
  { name: "Elisha", scores: [89, 100] },
  { name: "Ezra", scores: [100, 99, 100, 87] },
];

for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
  let totalScores = 0;
  for (let j = 0; j < students[i].scores.length; j++) {
    console.log(students[i].scores[j]);
    totalScores += students[i].scores[j];
  }

  let avg = totalScores / students[i].scores.length;
  console.log(students[i].name);
  console.log("Avarage score is: " + avg);
}
