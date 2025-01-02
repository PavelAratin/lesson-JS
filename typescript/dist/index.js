"use strict";
// //number
// let x = 10;
// // let y = 1234n; //bigInt
// let z = NaN; //тоже можно использовать
// //x = 'dfg';//будет ошибка
// //string
// let str = "str"; //не явное определение типа
// let str1: string = "str"; //явное опред типа.
// //boolean
// let o = true;
// o = false;
// //o = 1 //будет ошибка,переопределить нельзя
// // массив booleans
// let c: boolean[] = [true, false]
// let d: string[] = ['false', 'false']
// let e: number[] = [1, 2]
// // если не хададим в ручнуютип, то тс это сделает сам
// // let f = [1, 'sd']
// // let f: (string | number)[] = [1, 'sdfds'] // для разнородного массива
// //nothing
// let und: undefined = undefined;
// let nl: null = null;
// //literal
// const num = 1;
// const str2 = "sd";
// //num = 2//будет ошибка
// // универсальные типы
// // any
// let num1:any = 1;
// num1 = 'de';//ошибки нет тип эни позволяет менять тип на любой
// num1 = [];
// //num1.map...
// // unknown - тип будет известен позднее
// let xx:unknown = 10;
// //xx.toUpperCase() // ошибка в отличии от эни
// if(typeof xx === 'string') xx.toUpperCase()// при уточнении ошибки не будет
// типизация функций
// // базовая типизация функции
// function sum(a: number, b: number): number {
//   return a * b;
// }
// //sum(1,'2') нельзя вызвать с неправилоьными параметрами
// // функция не возварщ результат
// function getHello(a: string): void {
//   console.log("Hello" + a);
// }
// // функция с never
// function getNever(): never {
//   throw new Error("функция никода не заончит выполнение");
// }
// function e(): never {
//   while (true) {
//     doSomething();
//   }
// }
// //опциональность параметров (не будет ошибок при вызове,при отсутсвии параметров)
// function getOptional(firstName: string, secondName?: string): void {
//   console.log("Hello" + firstName + secondName || "Нет фамилии");
// }
// //string | undefined о этой конструкции поговорим позже
// // когда не знаем сколько параметров (типизация спреад/рест оператора)
// function getAnyParametr(...nums: number[]): number {
//   const newNumber = nums.reduce((current, total) => current + total, 0);
//   return newNumber / nums.length;
// }
// //практика
// //типы для входных параметров (последний опционально)
// function getNewText(text, start, end) {
//   //типизация внутренних переменных
//   let newText = "";
//   let lastIndex;
//   if (end) {
//     lastIndex = end > text.length ? text.length : end;
//   } else {
//     lastIndex = text.length;
//   }
//   for (let i = start; i < lastIndex; i++) {
//     newText += text[i];
//   }
//   return newText;
// }
//типизация обьектов
//базовая
// interface Car {
//   wheel: number;
//   brand: string;
//   type: string;
//   isNew: boolean;
//   //в интерфесах допустимы опциональные параметры
//   // опц парам идут после обяз параметров (удобнее для чтения)
//   //warranty?: true;
//   //import?: true;
//   //динамическое свойство
//   [key: string]: unknown;
// }
// //итерефейс должен соответствовать обьету
// // const car: Car = {
// //   wheel: 4,
// //   brand: "lada",
// //   type: "sedan",
// // };
// const car: Car = {
//   wheel: 4,
//   brand: "lada",
//   type: "sedan",
//   isNew: true,
// };
// // car. - будут доступны значения
// //car.name - при обращении к несущ. свойству или методу будет ошибка
// // но есть исключ при динамических свойствах [key:string]: unknown
// car.name = true //ошибки нет - обращаемся к динамич неопред свойству
// car['name'] = true // по согалашению динамич неопред свойства указываются в такой записи
// типизация обьекта в функции
// function getFullName(person: {
//   firstName: string;
//   secondName: string;
// }): void {
//   console.log(`${person.firstName} ${person.secondName}`);
// }
// const person = {
//     firstName:'Jon',
//     secondName:'Doe',
// }
// getFullName(person) //нет ошибок - обьект соответствует тизации параметров в функции
// const person2 = {
//     //неправильный тип
//     //firstName: 1, // будет ошибка
//     firstName: 'Jon', //ошибки нет
//     secondName:'Doe',
//     employee: true, // при работе с функциями важен обязательный набор, который определен в параметрах функции
// }
// getFullName(person2) //ошибка - структура обьекта не правильная
//необязаьтельный паремтр функции
// function getFullName(person: {
//     firstName: string;
//     //при необяз параметре столкнемся с проблемой в теле функции
//     //что бы ее избежать нужно сделать проверку
//     secondName?: string;
//   }): void {
//     //пример проверки
//     // if(person.secondName){
//     //     console.log(`${person.firstName} ${person.secondName.toUpperCase}`);
//     // }
//     console.log(`${person.firstName} ${person.secondName.toUpperCase}`);
//   }
let x = {
    a() {
        return this;
    },
};
let a = x.a;
console.log(a());
