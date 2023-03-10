// 1. Створити новий масив на 10 елементів з довільними числами.

let arr = [
  "robot",
  undefined,
  45,
  2,
  9,
  3,
  "Laba",
  2,
  23,
  false,
  46,
  79,
  " ",
  null,
  15,
];

// 2. Написати скрипт для пошуку суми елементів масиву
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    sum += arr[i];
  }
}
console.log("Сума елементів масиву:", sum);

// 3. Написати скрипт, який буде шукати мінімальне та максимальне значення елементів масиву.
let min = Infinity;
let max = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
}
console.log("Максимальне значення масиву:", max);
console.log("Мінімальне значення масиву:", min);

// 4. В пунктах 2 та 3 потрібно робити перевірку на тип елементу масиву і не брати до уваги елементи які не є числами

// 5. Написати скрипт який виведе наступне:

let tree = "";
for (let i = 0; i < 5; i++) {
  tree += "#";
  console.log(tree);
}
// #

// ##

// ###

// ####

// #####
