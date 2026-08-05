//--1--
//Є масив обєктів fruits, і в кожному з них є name
//Написати код, який перевертає їх в масив імен

/*const fruts = [
  {id: 0, name: "Apple"},
  {id: 1, name: "Tomat"},
  {id: 2, name: "Cherry"},
  {id: 3, name: "Orange"},
];
let result = fruts.map((item) => item.name);
console.log(result); 
 */

//--2--
//Вивести парні числа від 2 до 10 ,використавши цикл for

/*for (let i = 2; i < 12; i++){
  if (i % 2 === 0) {
    console.log(i);
  }
}
*/

//--3--
// Замінити цикл "for" на "while"
/*let i = 0;
while (i < 5 ) {
  console.log(`Number ${i}!`);
   i++;
}
*/


//--4--
//Написати цикл, який пропнує prompt ввести число більше за 100.
// Якщо відвідувач введе менше число - попросити ввести ще раз, і так далі.
//Цикл повинен запитуати число доти, доки відвідувач не введе число,
//більше за 100, або не скасує ввід/введе порожній рядок.

/*let number = 100;
while (true) {
  number = prompt("Введіть число більше за 100");
  if (number > 100 || number === null || number === "") {
    break;
  }
}
if (number > 100) {
  console.log(`Ви ввели число: ${number}`);
} else {
  console.log("Введення скасовано");
}
*/

//--5--
//Вирахувати середній вік

const girls = [
  {age: 23, name: "Оля"},
  {age: 29, name: "Аня"},
  {age: 10, name: "Юля" },
  {age: 20, name: "Катя" }
];
let averageAge = girls.reduce((sum, girl) => sum + girl.age, 0) / girls.length;
console.log(`Середній вік: ${averageAge}`);