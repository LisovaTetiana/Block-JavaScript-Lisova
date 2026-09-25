//Створити телефонну книгу
//*створити початковий клас Abonent, де зберігатимуться ім*я і номер
//*створити set який прийматиме телефон і номер
//*створити get який виводитиме данні про абонента
//*створити три різних юзери
//*вивести данні




class Abonent {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }

    setPhone(phone) {
        this.phone = phone;
    }

    getInfo() {
        return `Name: ${this.name}, Phone: ${this.phone}`;
    }
}
const user1 = new Abonent("Petric Piatochkin", "123-456-7890");
const user2 = new Abonent("Slonenja Vasil", "987-654-3210");
const user3 = new Abonent("Slonenja Mydruk", "555-555-5555");

console.log(user1.getInfo());
console.log(user2.getInfo());
console.log(user3.getInfo());