"use strict";
// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
// let string = "";
// for (let friend of friends) {
//   if (string) string += ", ";
//   string += friend;
// }
// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
// const string = friends.join(", ");
// console.log(string);

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
// const cardToUpdate = "Карточка-4";

// const index = cards.indexOf(cardToUpdate);
// console.log(index);
const cardToRemove = "Карточка-3";
const indexToRemove = cards.indexOf(cardToRemove);
cards.splice(indexToRemove, 1);
const cardToInsert = "Карточка-6";
const indexToInsert = 2;
cards.splice(indexToInsert, 0, cardToInsert);
const cardToUpdate = "Карточка-4";
const indexToUpdate = 3;
cards.splice(indexToUpdate, 1, "Карточка-4");
console.log(cards);
