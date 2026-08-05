//--1--
//Є масив обєктів fruits, і в кожному з них є name
//Написати код, який перевертає їх в масив імен

const fruts = [
  {id: 0, name: "Apple"},
  {id: 1, name: "Tomat"},
  {id: 2, name: "Cherry"},
  {id: 3, name: "Orange"},
];
let result = fruts.map((item) => item.name);
console.log(result); 
 


//Якщо змінна ="test"-вініміть true,
//Перевірте це на варіантах "test", "qwerty", true.

/*const text = "test";

  if (text === "test") {
    console.log(true);
  } else {
    console.log(false);
  }
*/

//Якщо змінна більше 10 - відніміть5,
// меньша - додайте 5, результат виведіль в консоль
//Перевірте це на варіантах 1,10,13.

/*const number = 13;
  if (number > 10) {
    console.log(number - 5);
  } else if (number < 10) {
    console.log(number + 5);
  }
*/

//Зробить сервіс який отримує число від 1 до 12
//виведіть місяць який дорівнює числу

/*switch (7) {
  case 1:
    console.log("Січень");
    break;
  case 2:
    console.log("Лютий");
    break;
  case 3:
    console.log("Березень");
    break;
  case 4:
    console.log("Квітень");
    break;
  case 5:
    console.log("Травень");
    break;
  case 6:
    console.log("Червень");
    break;
  case 7:
    console.log("Липень");
    break;
  case 8:
    console.log("Серпень");
    break;
  case 9:
    console.log("Вересень");
    break;
  case 10:
    console.log("Жовтень");
    break;
  case 11:
    console.log("Листопад");
    break;
  case 12:
    console.log("Грудень");
    break;
}
*/

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу суму цих чисел.

/*function getSumOfDigits(number) {
  const numString = String(number);
  let sum = 0;

  for (let digit of numString) {
      sum += Number(digit);
      
  }
 return sum;
}
const userInput = prompt("Введіть число (не більше 3 знаків):");

if (userInput.length > 3) {
   alert("Помилка! Ви ввели занадто довге число (більше 3 знаків).");
} else {
    const totalSum = getSumOfDigits(userInput);
    alert(`Сума цифр введеного числа дорівнює: ${totalSum}`);
}
*/