"use strict";

function printContact(myInfo) {
    console.log(myInfo.name);
    console.log(myInfo.address);
    console.log(myInfo.city);
    console.log(myInfo.state);
    console.log(myInfo.zip);
}

let myInfo = {
    name: "Pooja",
    address: "123 pl",
    city: "Bloomfield",
    state: "New jersey",
    zip: 123456,
};

printContact(myInfo);