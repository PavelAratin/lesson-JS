//пример обьекта
let dog = {
    dogName: "JavaScript",
    weight: 2.4,
    color: "brown",
    breed: "chihuahua"
};
console.log(dog);

//пример класса
class Primer {
    constructor(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
}
let obj = new Primer("arg1", "arg2");
console.log(obj);

//создание обьекта через функуию конструктор
function Dog1(dogName, weight, color, breed) {
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
}
let dog1 = new Dog1("Jacky", 30, "brown", "labrador");
console.log(dog1);

//переписали функцию конструктор на класс
class Dog2 {
    constructor(dogName, weight, color, breed) {
        this.dogName = dogName;
        this.weight = weight;
        this.color = color;
        this.breed = breed;
    }
}
let dog2 = new Dog2("JavaScript", 2.4, "brown", "chihuahua");

console.log(dog2.dogName, "is a", dog2.breed, "and weighs", dog2.weight, "kg.");

//обьяснение КОСТРУКТОРА и NEW
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

let p = new Person("Maaike", "van Putten");
console.log("Hi", p.firstname);

//!!интересный момент
let p1 = new Person("Maaike");
console.log("Hi", p1.firstname, p1.lastname);

//параметр по умолчанию

class Person1 {
    constructor(firstname, lastname = 'pasha') {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

let p2 = new Person1("Maaike");
console.log(p2);

//Практическое заняте
class Men {
    constructor(firstname, lastname, male) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.male = male;
    }
}
let Mike = new Men("Mike", "Doe", 'men');
let Sara = new Men("Sara", "Snow", 'women');
console.log("hello " + Mike.firstname);
console.log("hello " + Sara.firstname);
console.log("male " + Mike.male);
console.log("male " + Sara.male);

//МЕТОДЫ

class Men1 {
    constructor(firstname, lastname, male) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.male = male;
    }
    //простой пример метода
    // greet() {
    //     console.log("hello", this.firstname);
    // }
    //простой пример методы могут возвращать и принимать результат
    // position(position, grade) {
    //     return position + ", " + grade;
    // }
}
let Mike1 = new Men1("Mike", "Doe", 'men');
// let position = Mike1.position("frondend", "junior");
// let Trump = new Men1("Trump", "Doe", 'men');
// Mike1.greet()
// Trump.greet()
// console.log(position);

//Приватные свойства
class Private {
    #firstname;
    #lastname;
    // constructor(firstname, lastname) {
    //     this.#firstname = firstname;
    //     this.#lastname = lastname;
    // }
    //простой пример проверки внутри коструктора
    //доступа не будет, нужно использовать геттеры и сеттеры
    constructor(firstname, lastname) {
        if (firstname.includes('M')) {
            this.#firstname = firstname;
        } else {
            this.#firstname = 'M' + firstname;

        }
        this.#lastname = lastname;
    }
}
//В данный момент к свойствам firstname и lastname доступа извне нет.Если попробуем ввести:
let private = new Private("Maria", "Saga");
console.log(private.firstname);//получим udefined


//геттеры и сеттеры пример
class PersonAccessor {
    // к приватным свойствам нет доступа вне класса
    // нужно исп. геттер или сеттер
    #firstname;
    #lastname;
    constructor(firstname, lastname) {
        this.#firstname = firstname;
        this.#lastname = lastname;
    }
    // геттер
    // получает свойства
    // не принимает параметры
    // только возвращает результат
    get firstname() {
        return this.#firstname;
    }
    // сеттер
    // принимает параметры,
    // внутри может использоваться логика,
    // изменяет значения,
    // ничего не возвращает,
    set firstname(firstname) {
        this.#firstname = firstname;
        //пример логики и использования геттера и сеттера
        // if (firstname.includes("M")) {
        //     this.#firstname = firstname;
        // } else {
        //     this.#firstname = "M" + firstname;
        //     // this.#firstname = 'не правильное имя'
        // }
    }
    get firstname() {
        return this.#firstname;
    }
    get lastname() {
        return this.#lastname;
    }
    set lastname(lastname) {
        this.#lastname = lastname;
    }
}

let personAccessor = new PersonAccessor("Maria", "Doe");
//задаем новое значение через сеттер
personAccessor.firstname = "Adnane";
//получем значение через геттер
console.log(personAccessor.firstname);

//НАСЛЕДОВАНИЕ 
class Vehicle {
    constructor(color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }
    move() {
        console.log("скорость сейчас", this.currentSpeed);
    }
    accelerate(amount) {
        this.currentSpeed += amount;
    }
}


//cost создан через прототип,в дочерний класс добавлять только на теме прототип
class Motorcycle extends Vehicle {
    constructor(color, currentSpeed, maxSpeed, typeMoving) {
        super(color, currentSpeed, maxSpeed);
        this.typeMoving = typeMoving;
    }
    showWheel() {
        console.log("Руль мотоциклетный");
    }
}

let vehicle = new Vehicle("Цвет", 10, 200)
console.log(vehicle);


let motorcycle = new Motorcycle("Black", 0, 250, "два колеса");
console.log(motorcycle.color);
motorcycle.accelerate(50);
motorcycle.move();
motorcycle.accelerate(50);
console.log(motorcycle.currentSpeed);

//Прототипы
//добавление метода
Vehicle.prototype.presentation = function () {
    console.log("метод добавленный в класс через прототип", this.color);
};
//добаавление свойства
Vehicle.prototype.cost = "100$";

// проверка доступности свйоства род.класса созданного через прототип в доч.классе
// vehicle.presentation()
// console.log(vehicle.cost);
// console.log(motorcycle.cost);

// рассказ о прототипах!!

// Практика
// Приложение для контроля сотрудников
class Employee {
    constructor(first, last, years) {
        this.first = first;
        this.last = last;
        this.years = years;
    }
}
const person1 = new Employee("Laurence", "Svekis", 10);
const person2 = new Employee("Jane", "Doe", 5);
const workers = [person1, person2];

Employee.prototype.details = function(){
    return this.first + " " + this.last + " has worked here " + this.years + " years";
}

workers.forEach((person) => {
    console.log(person.details());
});


//Расчет стоимости заказов

class Menu {
    #offer1 = 10;
    #offer2 = 20;
    constructor(val1, val2) {
        this.val1 = val1;
        this.val2 = val2;
    }
    calTotal(){
        return (this.val1 * this.#offer1) + (this.val2 * this.#offer2);
    }
    get total(){
        return this.calTotal();
    }
}
 
const val1 = new Menu(2,0);
const val2 = new Menu(1,3);
const val3 = new Menu(3,2);
console.log(val1.total);
console.log(val2.total);
console.log(val3.total);












