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
// //sum(1) нельзя вызвать с недостающими

// // функция не возварщ результат
// function getHello(a: string): void {
//   console.log("Hello" + a);
// }

// // функция с never
// function getNever(): never {
//   throw new Error("функция никода не закончит выполнение");
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
// //string | undefined о этой конструкции поговорим позже (union - обьедингение типов)

// // когда не знаем сколько параметров (типизация спреад/рест оператора)
// function getAnyParametr(...nums: number[]): number {
//   const newNumber = nums.reduce((current, total) => current + total, 0);
//   return newNumber / nums.length;
// }

//getAnyParametr(1,2,3)

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

// аннотирование типов функции

// сигнатура функции
// type Log = (message: string, userId?: string) => void
// //не типизированная функция
// let log:Log = (message, userId = "Not signed in") => {
//   let time = new Date().toISOString();
//   console.log(time, message, userId);
// };
// подробнее о сигнатурах функции

//Сигнатура функции в TypeScript — это определение того, как функция может быть вызвана.
//Она включает в себя список параметров (их имена и типы) и возвращаемый тип функции.
//Сигнатура функции позволяет компилятору TypeScript проверять типы при вызовах функции,
//что помогает предотвратить ошибки во время выполнения.
//примеры сигнутур фунции
// function add(a, b) { //функция без сигнатур
//   return a + b;
// }

// console.log(add(5, 3)); // 8
// console.log(add("5", "3")); // 53 - тут происходит не сложение а конкатенация
// function add(a: number, b: number): number { // сигнатура,которая уточняет типы
//   return a + b;
// }

// console.log(add(5, 3)); // 8
// console.log(add("5", "3")); // Ошибка: аргумент типа 'string' не может быть присвоен параметру типа 'number'.

// interface AddFunction { // сигнатура при помощи интерфейсов
//   (a: number, b: number): number;
// }

// Для более элегентного решения таких задач в тайп скрипт есть перегрузка функий.
// Перегрузка функций позволяет объявить несколько сигнатур для одной и той же функции,
// что дает возможность вызывать ее с различными наборами параметров.
// Сигнатуры функий будут рассмотеры дальше по курсу - после них будет понятно что такое дженерики

//практика -  интерфейсы обьекты и функции
// создать два интерфейса пользователь и админ (будут отличаться одним параметром)
// два обьекта пользователь и админ и их аннотирвать их интерфесами
// функцию приним обьект и типизируем входные параметры (необязательный параметр нужно проверять на существование)

// типизация массивов
// const numbers = [1, 2, 3, 4, 5]; // не яные типы
// const str = []; // тип any
// const str2: string[] = []; // явно опред типы
// const str3: Array<string> = []; // явно опред типы (такая запись часто встречается)

// interface Car {
//   wheel: number;
//   brand: string;
// }

// const cars: Car[] = [];// аннотация массива
// cars.push({wheel:4,brand:'lada'}) //ошибок нет
// // cars.push({fuel:'benz',brand:'lada'}) //ошибка - таких значений в интерфейсе нет

// const arrInArr:string [][] = [];// массив внутри массива
// arrInArr.push(['']) // нет оишбок
// arrInArr.push([1]) // ошибка - можно только массив строк

// кортежи tuples (списки) - могут содержать различные типы

//Кортежи являются подтипами array. Они позволяют типизировать
//массивы фиксированной длины, в которых значения каждого индекса
//имеют конкретные известные типы. В отличие от большинства других
//типов, кортежи в момент их объявления должны типизироваться явно.

// const arr = [1, 2, true, "string"]; // не явно определили типы
// const arr1: [number, number, boolean, string] = [1, 2, true, "string"]; // явно определили типы
// const arr2: [number, boolean, string?] = [1, true, "sdg"]; //необяз парам задан
// const arr3: [number, boolean, string?] = [1, true]; //необяз парам не задан
// const arr4: [number, boolean, string?] = [1, true, undefined]; //необяз парам задан undef
// const arr5: [number[], boolean[], string[]?] = [[1], [true]]; //вложенные массивы с необязательным параметром

//алиасы (псевдонимы типов)
// Типизировать массивы можно при помощи алиасов
// алиас обьявляется при помощи ключевого слова type

// type Age = number; //алиас для переменной
// type Person = { // алиас для обьекта
//   name: string;
//   age: Age; //алиас переменной
// };

// let age: Age = 55 //переменная аннотированная алиасом
// let driver: Person = {
//  name: 'James May',
//  age: age
// }

// type ArrayTuple = [string, number[]?, boolean[]?]; //алиас для массивов

// let example1: ArrayTuple = ["Example", [1, 2, 3], [true, false]];
// let example2: ArrayTuple = ["Test"];

// "алисы" (или алиасы типов) и интерфейсы служат для определения структур данных,
// но имеют некоторые ключевые отличия.
// Алиасы типов могут представлять примитивные типы, объединения, пересечения и другие,
// в то время как интерфейсы в основном используются для описания объектов и их структуры.
// Интерфейсы могут быть расширены с помощью наследования,
// тогда как алиасы типов не поддерживают наследование,
// но могут комбинироваться с помощью операторов объединения (&) и пересечения (|).
// Кроме того, интерфейсы подвержены декларативному объединению, позволяя определять один и тот же интерфейс несколько раз,
// тогда как алиасы типов не могут быть объявлены несколько раз.

//union типы

// type Status = "ok" | "loading" | "eror"; // обьявление
// const data: Status = "ok"; // использование (сужение типа) до конкретного

// function getId(id: number | string) {
//   if (typeof id === "string") {
//     console.log(id.toUpperCase()); //нет ошибки
//   }
//   if (typeof id === "number") {
//     console.log(id.toFixed()); //нет ошибки
//   }
//   // console.log(id.toUpperCase()); //нужно сделать проерку
// }
// //еще пример
// function welcome(person: [string, string] | string): void {
//   if (Array.isArray(person)) {
//     console.log("Hello", person);
//   }
// }
// // пример union возвращаемого типа
// function welcome2(person: [string, string] | string): string | number {
//   if (Array.isArray(person)) {
//     console.log("Hello", person);
//     return "1";
//   } else {
//     console.log("Hello", person);
//     return 1;
//   }
// }

//практика union
//Дан union-тип Level с уровнями позиция для разработчиков.
// Он же назначен для интерфейса Developer.
//Необходимо создать функцию gradeDeveloper,
//которая будет принимать объект пользователя с ключом level и новый уровень.
// В теле функции для полученного объекта должен назначаться следующий уровень.

// Enum
//пример enum
// enum Grades {
//   Junior = "Junior",
//   Middle = "Middle",
//   Senior = "Senior",
// }

// interface Developer {
//   name: string;
//   level: Grades;
//   skills: string[];
// }

// const developerJunior: Developer = {
//   name: "jon",
//   level: Grades.Junior,
//   skills: ["html", "css", "js"],
// };
// //function gradeDeveloper(developerJunior: { level: Grades })
// function gradeDeveloper(developerJunior: Developer) {
//   if (developerJunior.level === Grades.Junior) {
//     developerJunior.level = Grades.Middle;
//   }
//   if (developerJunior.level === Grades.Middle) {
//     developerJunior.level = Grades.Senior;
//   }
// }
// gradeDeveloper(developerJunior)

//пример без тайп скрипта

// const developer = {
//   name: "jon",
//   level: "Junior",
//   skills: ["html", "css", "js"],
// };
// function gradeDeveloper(developer) {
//   if (developer.level === "junior") {
//     developer.level = "middle";
//   }
//   if (developer.level === "middle") {
//     developer.level = "senior";
//   }
// }

//ПРОДВИНУИТЫЕ ТИПЫ

//слияние типов (types merge)
// type Union1 = "a" | "b" | "c" | "d";
// type Union2 = "a" | "e" | "c" | "i";
// type Union3 = Union1 | Union2; // обьдинили два типа
// type Union4 = Union1 & Union2; // осталивь уникальные типы (пересечение типов) (ведет себя по разному с различными типами данных)

// // в обьектах поведенеие немного отличается - будет обьдинение типов
// type Union5 = { a: string; b: string; c: number } & {
//   a: string;
//   t: boolean;
//   z: null;
// };

// const obj: Union5 = {
//     //при & будут доступны все поля обьявленные в type Union5
//     //произошло сляние (должны быть одинаковые поля и типы)
//     //при | будут доступны все поля обьявленные в type Union5
//     //произошло сляние (будут доступна вариативность)
// }

//наследование алиасов
// type User = {
//   readonly email: string;
//   readonly login: string;
//   password: string;
// };
// //readonly поле тольео для чтения, относится только к тому обьету в котороми оно определено
// // его нельзя изменять
// type Person = {
//   readonly firstName: string;
//   lastName: string;
//   phone?: string;
//   yearOfBirth?: number;
// };

// type Employee = {
//   contractStart: Date;
// } & User & Person; // расширили типы обьекта Employee

// type Developer = {
//   skills: string[];
//   phone: string;
//   level?: "junior" | "middle" | "senior";
//   say(): void;
//   code?: (arg: string) => void;
// } & Employee;

// // const user1: Developer = {}; //будут доступны все поля

//сужение типов
// function example1(x?: number | string) {
//   if (typeof x === "string") {
//     x.toLowerCase();
//   } else if (typeof x === "number") {
//     x.toFixed();
//   } else if (x === undefined) {
//     console.log("no value");
//   } else {
//     x; //сюда код никогда не дойтет, т.к мы уже все возможные варианты перебреали
//   }
// }

// function example2(strs: string | string[] | null) {
//   //интересный момент с null
//   // if (typeof strs === "object") {}// null тоже обьект, нужно делать другую проверку
//   // if (Array.isArray(strs)) { //допустимая проверка
//   if (strs && typeof strs === "object") {
//     //проверяем на существаование и на тип - тогда ошибки не будет
//     strs.concat([]);
//   } else if (typeof strs === "string") {
//     strs.toLowerCase();
//   }
// }

// function example3(num: number[] | Date) {
//   if (num instanceof Date) { //допустимая проверка (такой метод есть в джс)
//     num.getMonth();
//   } else {
//     num.concat([]);
//   }
// }

// type Fish = { swim: () => void };
// type Bird = { fly: () => void };

// function move(animal: Fish | Bird) {
//   if ("swim" in animal) { //проверка на существание метода или свойства(ключа)
//     return animal.swim();
//   }

//   return animal.fly();
// }

//защита типа - все что было выше (сужение) это тоже защитники типов
// но есть особые
// function isFish(pet: Fish | Bird): pet is Fish { //пример функции предикат - проверяет что-то и возвращает boolean (используется в джс)
//   return (pet as Fish).swim !== undefined;
// }

// export function move(animal: Fish | Bird) {
//   if (isFish(animal)) {
//     return animal.swim();
//   }

//   return animal.fly();
// }

// практика защиты типов

// interface Order {
//   address: string;
// }
// interface TelephoneOrder extends Order {
//   callerNumber: string;
// }
// interface InternetOrder extends Order {
//   email: string;
// }

// type PossibleOrders = TelephoneOrder | InternetOrder | undefined;

// function isAnInternetOrder(order: PossibleOrders) {
// }

// function isATelephoneOrder(order: PossibleOrders) {
// }

// function makeOrder(order: PossibleOrders) {
//   if (isAnInternetOrder(order)) {
//     console.log(order.email);
//   } else if (isATelephoneOrder(order)) {
//     console.log(order.callerNumber);
//   }
// }

//ПЕРЕГРУЗКА ФУНКЦИЙ

//простой пример перегрузки функций

// function add(a: string | number, b: string | number): string | number {
//   return a + b; //проблема - строку с числом складывать нельзя - нужно писать еще одну функцию
// }

//перегрузка функций может помочь решить эту проблему
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: any, b: any): any {
//   // в таких случаях можно импользовать any
//   return a + b;
// }
// add(1, 2);

// type AsyncCb = (res: number) => number; //алиас функции (сигнатура)

// let asyncCb1F: AsyncCb = (res) => res; //сама функции колллюбэк

// function asyncSum(a: number, b: number): Promise<number>; //перегрузка - возвращаем промис
// function asyncSum(a: number, b: number, cb: AsyncCb): number; //перегрузка
// function asyncSum(a: number, b: number, cb?: AsyncCb): any {
//   const result = a + b;
//   if (cb) {
//     //проверка на сущ коллбэка
//     return cb(result);
//   }

//   return Promise.resolve(result);
// }
// asyncSum(1, 2, asyncCb1F); //колбэк необяз парам - если не передать то лшибки не будет

//Практика на перегрузку функций

//Дана функция head, которая возвращает либо первый символ переданной строки, либо первый элемент переданного массива.
//Приведенные типы функции заведомо избыточны. Необходимо переписать их, используя подход перегрузки.

// function head(value: string | number[] | boolean[]): string | number | boolean {
//   return value[0];
// }

// let x = head([1])
// x + 1// будет ошибка , что бы не передали в функцию - поможет перегрузка

// function head(value: string): string;
// function head(value: number[]): number;
// function head(value: boolean[]): boolean;
// function head(value: any): any {
//   return value[0];
// }
// let x = head('df');
// x + 1; //при массиве булеан будет ошибка - нужна другая операция

// символ !

// let word: string | null = null;
// const num = 10

// if (num > 5) {
//   word = 'abc'
// }

// // console.log(word.toLowerCase()) // ошибка значение может быть и null
// console.log(word!.toLowerCase()) // ! - подтверждает что это именно строка, а не null

// function printName(name?: string) {
// //   const fullName: string = name; // ошибка - может быть null или undefained
//   const fullName: string = name!;
// }

// interface Person {
//   name: string
//   age: number
//   sex: 'female' | 'male'
// }

// function printName2(person?: Person) {
// //   console.log(person.name) // может быть undefained
//   console.log(person!.name)
// }

// const people: Person[] = [
//   {
//     name: 'Gran',
//     age: 70,
//     sex: 'female'
//   },
//   {
//     name: 'Papa',
//     age: 72,
//     sex: 'male'
//   },
//   {
//     name: 'Mom',
//     age: 35,
//     sex: 'female'
//   },
//   {
//     name: 'Dad',
//     age: 38,
//     sex: 'male'
//   }
// ]

// // const femalePeople = people.find(person => person.sex === 'female') // возможно undefined
// const femalePeople = people.find(person => person.sex === 'female')! // точно undefined не будет

//Унгиверсальные типы ДЖЕНЕРИКИ
// проблематика перегрузок - избыточность кода
// function head(value: string): string;
// function head(value: number[]): number;
// function head(value: string[]): string;
// function head(value: boolean[]): boolean;
// function head(value: Date[]): Date;
// function head(value: any): any {
//   return value[0];
// }

// //проблема - обьект приходящий ответом с сервера может выдавать одинкаковые ключи но разные значения
// interface ModelData {
//   title: string,
//   value: string, // number или [] или boolean - при дальнейшей работе будет проблемой и нужно выполнять проверку типа
// }

// дженерики (обобщения) - специальные !переменные!, помогающие объявить сложный тип.

// Array<string> - альтернативная запись массива - дженерик
// string[]
// Promise<number>

// дженерик обьявляется в <> скобках после названия функции перед круглыми скобками (если говорим про функции)
// <T> - T динамическая переменная - она может иметь любое название (но принято Т)

// function head <T>(value: T): T {
//   return value;
// }
// head(["12q", "asas"]);
// head(1);
// head('sdf');

// const head1 = <T>(value: T[]): T => value[0]; //пример стрелочной функции

// function toArray<T>(...arg: T[]): T[] {
//   return arg;
// }
// toArray<number>(1, 2, 3);
// toArray("ad", "asd");

// interface ModelData<T> { //дженерик для интерфейса
//   title: string;
//   value: T; // number [] boolean
// }

// const obj1: ModelData<number> = { //применения дженерика и интерфеса для обьекта
//   title: "asd",
//   value: 12,
// };
// // obj1.value = true //ошибка - value определено как число

// const obj2: ModelData<Array<number>> = { // в качастве дженерика передан массив чисел
//   title: "12sad",
//   value: [1234],
// };

//Практика ДЖЕНЕРИКИ
//Затипизируйте данную функцию:

// function append(el, list) {
//   return list.concat(el);
// }

// append(1, [1, 2, 3]); //нет ошибки
// append('sdf', [1, 2, 3]); //нет ошибки

//типизация
// function append<T>(el: T, list: T[]) {
//   return list.concat(el);
// }

// append(1, [1, 2, 3]); //нет ошибки
// append('sdf', [1, 2, 3]); //ошибка
