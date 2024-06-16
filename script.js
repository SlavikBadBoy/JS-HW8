"use strict";
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";
console.log(friends.join(", "));
for (let friend of friends) {
  string = string + friend;

  if (friend !== "Ajax") {
    string += ", ";
  }
}
console.log(string);

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
const cardToRemove = "Карточка-3";
const indexToRemove = cards.indexOf(cardToRemove);
cards.splice(indexToRemove, 1);
console.log(cards);

const cardToInsert = "Карточка-6";
cards.push(cardToInsert);
console.log(cards);

const cardToUpdate = "Карточка-4";
const indexToUpdate = cards.indexOf("Карточка-4");
console.log(cards);
