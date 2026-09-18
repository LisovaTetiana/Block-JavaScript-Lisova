//--1--
//1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
//бал і кількість пропущених занять
//2) написати метод який буде виводити цю інформацію
//3) написати три варіанти студентів
//4) прикріпити знначення за допомогою call apply bind

/*const infoStudent = {
  name: "Ivan Sula",
  specialty: "Agro engineering",
  averageGrade: 75,
  missedLessons: 2,

  showInfoStudent: function () {
    console.log("Name:" + this.name +
      " Specialty: " + this.specialty +
      " Average Grade: " + this.averageGrade +
      " Missed Lessons: " + this.missedLessons);
  },
};
infoStudent.showInfoStudent();

const student1 = {
  name: "Lesia  Ukrainka",
  specialty: "Medicine",
  averageGrade: 55,
  missedLessons: 57
};
 
const student2 = {
  name: "Vasyl  Stus",
  specialty: "Technology",
  averageGrade: 95,
  missedLessons: 1
};
//infoStudent.showInfoStudent.bind(student1)();
//infoStudent.showInfoStudent.call(student2);
infoStudent.showInfoStudent.apply(student1);
*/


//--2--
//Написати дві кнопки і закріпити на них функції
//при натисканні на кнопку html - має видати коротке визначення що це таке
//при натисканні на кнопку css - має видати коротке визначення що це таке

/*const definition = {
  showDefinition() {
    console.log("Визначення:", this.Definition[0]);
  },
};
const HTML = {
  Definition: ["HTML - це стандартна мова розмітки вебсторінок в інтернеті"],
  };
const CSS = {
  Definition: ["CSS - це спеціальна мова, яка використовується для оформлення та стилізації вебсторінок"],
};
document.querySelector("#htmlButton").addEventListener("click", definition.showDefinition.bind(HTML));
document.querySelector("#cssButton").addEventListener("click", definition.showDefinition.bind(CSS));
*/


// --3--
//Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
//функція має повертати назву товару і вартість
//перевірити на варіантах:
//1) banana 30, 4,5
//2) cherry 58, 1,3
//3) orange 89. 3,4

const shop = function (productName, pricePerKg, quantity) {
  console.log(`${productName}, ${pricePerKg},  ${quantity}`);
};
const banana = shop.bind(null, "banana", 30, 4.5);
const cherry = shop.bind(null, "cherry", 58, 1.3);
const orange = shop.bind(null, "orange", 89, 3.4);

//shop.call(null, "banana", 30, 4.5);
//shop.call(null, "cherry", 58, 1.3);
//shop.call(null, "orange", 89, 3.4);
 
//shop.apply(null, ["banana", 30, 4.5]);
//shop.apply(null, ["cherry", 58, 1.3]);
//shop.apply(null, ["orange", 89, 3.4]);

shop.bind(null, "banana", 30, 4.5)();
shop.bind(null, "cherry", 58, 1.3)();
shop.bind(null, "orange", 89, 3.4)();
