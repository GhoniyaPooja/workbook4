"use strict";

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];
   
   // Who is the Academy Member whose ID is 187?
   let targetID = 187;
let targetMember = null;

for (let i = 0; i < academyMembers.length; i++) {
  if (academyMembers[i].memID == targetID) {
    targetMember = academyMembers[i];
    break;
  }
}
console.log(targetMember.name);

   // Who has have been in at least 3 films?
for (let i = 0; i < academyMembers.length; i++) {
  if (academyMembers[i].films.length >= 3) {
    console.log(academyMembers[i].name);
  }
}

// Who has a name that starts with "Bob"?
for (let i = 0; i < academyMembers.length; i++) {
  if (academyMembers[i].name.startsWith("Bob")) {
    console.log(academyMembers[i].name);
  }
}
//Which Academy Members have been in a film that starts with "A"
for (let i = 0; i < academyMembers.length; i++) {
    if (academyMembers[i].films.startsWith("A")) {
        console.log(academyMembers[i].name);
    }
    
}