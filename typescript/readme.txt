Приведение типов (проблематика перед основами TS)

Последний тип — это и есть тип null.
В выводе можно наблюдать, что typeof null
возвращает значение object, в то время как на самом деле null является примитивом, а не объектом.
Это ошибка, которая существует в JavaScript давно, исправлять не будут.

Мы можем сами изменять тип переменной и иногда джс делает это сам.

let nr1 = 2;
let nr2 = "2";
console.log(nr1 * nr2);

Тут джс без проблем перемножает число на строку и не выдает ошибку.

let nr1 = 2;
let nr2 = "2";
console.log(nr1 + nr2);

Знак плюс используется для обьединения (конкатенации строк).
По этому джс приводит чисило к строке.

Что бы не полагаться на движок джс, при приведении типов, в нем есть встроенные методы для определения типа.

Рассмотрим три метода преобразования:
1.String() - преобразует перем в строку.
    Он, в общем-то, принимает любое значение,
    включая undefined и null, и заключает его в кавычки.
2.Number() - преобразует перем в число.
    Если это невозможно сделать логически,
    значением переменной станет NaN (not a number — «не число»).
3.Boolean() - преобразует перем к булеву знач (тру/фалс).
    Данный метод будет работать для всего, кроме null, undefined, 0 (число), пустой строки и NaN.

Перейти к примеру (в нем все нормально), а в след прим интересный момент
Другой пример (обьяснение примера)
    Пустая строка и null дают 0. Это сделали разработчики
    джс, это нужно знать (может пригодится для понимания происходящего в коде).

Практически любая строка возвращает значение true,
когда преобразуется в тип Boolean, даже строка со значением false!
Только пустая строка, null и undefined отправят логическое значение false.

//операторы

Приведение типов в джс зависит не только от самого типа,
но и от операции над ним (+ - \ *) - смотря какой оператор стоит
 + - для сложения и конкатенации строк
 - - для вычитания чисел (конкатенации не будет)
     при вычитании строки из строки будет NaN
     джс не выдаст ошибку и это может быть трудноуловимой проблемой
 * и \ - работают аналогично с вычитанием - математические операции





//////////////////
1 устанавливаем TS 
npm init -y
npm i -D typescript
./node_modules/.bin/tsc --init
outdir - dist
include - src
создать команду скрипт старт в package.json

Что изучим :
Базовая типизация
Продвинутая типизация
Дженерики
Комбинирование типов
<---->
Классы в TS

Примитивные типы
Тип - набор значений и набор действий с ней.
Мы не можем с числом выполнять строковые операции.
Тип объявляется после ':' - явное определение, можно и не явно
определять тип.

литерал
при использвании конст будет литерал - 
тип всегда конкретное значение,оно не может быть изменено

Тип эни позволяет менять тип на любой,что сводит применение ТС к нулю,
тип эни не рекомендуются использовать, толькол в крайних случаях.

Unknown  в отлии от эни не даст использвоть числовые методы к строковые

Тип boolean представляет набор всех логических значений (их два:
true и false) и операций, применимых к ним (||, && и !).
Тип number представляет набор всех чисел и допустимых для них операций (вроде +, -, *, /, %, ||, && и ?), включая методы, которые можно
для них вызывать, такие как .toFixed, .toPrecision, .toString.
Тип string представляет набор всех строк и производимых с ними
операций (вроде +, || и &&), включая методы.

//типизация функций

В функции типизируются входные параметры и возвращаемое значение.
Если функ ничего не возвращает, то исп спец значение :void

never — это тип функции, которая никогда
ничего не возвращает (выбрасывает исключение или выполняется бесконечно)

//типизация обьектов
 при создании обьекта, при наведении на его название будет выведено
 его аннотация - интерфейс

!!практика -  интерфейсы оььекты и функции !!
// создать два интерфейса пользователь и админ (будут отличаться одним параметром)
// два обьекта пользователь и админ и их аннотирвать их интерфесами
// функцию приним обьект и типизируем входные параметры (необязательный параметр нужно проверять на существование)

// interface User {
//   login: string;
//   mail: string;
//   password: string;
//   isOnline: boolean;
//   isVisited: Date;
// }

// interface Admin {
//   login: string;
//   mail: string;
//   password: string;
//   isOnline: boolean;
//   isVisited: Date;
//   role: string;
// }

// const user1: User = {
//   login: "Jon",
//   mail: "jon@mail.ru",
//   password: "ddfgfdg",
//   isOnline: true,
//   isVisited: new Date(2024, 11, 5),
// };

// const admin: Admin = {
//   login: "Jon",
//   mail: "jon@mail.ru",
//   password: "ddfgfdg",
//   isOnline: true,
//   isVisited: new Date(2024, 11, 5),
//   role: "admin",
// };

// function login(user: { login: string; password: string; role?: string }) {
//   if (user.login.length > 0 && user.password.length) {
//     console.log("Hello", user.login);
//   }
//   if (user.role) {
//     console.log("Hello", user.role);
//   }
// }

// login(user1);
// login(admin);

 ПРАКТИКА UNION

 // type Level = "junior" | "middle" | "senior";

// interface Developer {
//   name: string;
//   level: Level;
//   skills: string[];
// }

// const developer: Developer = {
//   name: "jon",
//   level: "junior",
//   skills: ["html", "css", "js"],
// };

// function gradeDeveloper() {
// }

// function gradeDeveloper(developer, newLevel) { //реализация без типов
//   developer.level = newLevel;
// }
// function gradeDeveloper(developer:{level:Level}, newLevel:Level) {
//   //реализация с типами
//   developer.level = newLevel;
// }

// gradeDeveloper(developer, "middle");


//ПРАКТИКА ENUM
// interface Developer {
//   name: string;
//   level: Grades;
//   skills: string[];
// }

// const developer: Developer = {
//   name: "jon",
//   level: Grades.Junior,
//   skills: ["html", "css", "js"],
// };

// function gradeDeveloper(developer: { level: Grades }) {
//   if (developer.level === Grades.Junior) {
//     developer.level = Grades.Middle;
//   }
//   if (developer.level === Grades.Middle) {
//     developer.level = Grades.Senior;
//   }
// }

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

практика на защиту типов
Опишите функции type guards и выведите их типы.

interface Order {
  address: string;
}
interface TelephoneOrder extends Order {
  callerNumber: string;
}
interface InternetOrder extends Order {
  email: string;
}

type PossibleOrders = TelephoneOrder | InternetOrder | undefined;

функция предикат (используется для защиты типа)
function isAnInternetOrder(order: PossibleOrders) {
}
мы должны доказать что :order is InternetOrder - это интернет заказ
function isAnInternetOrder(order: PossibleOrders):order is InternetOrder {
    return order && "email" in order - нам нужно булево значение
    return !!order && "email" in order - так правильно
}

// оператор in проверяет , есть ли указанное свойство в обьекте или в цепочке его прототипов

function isATelephoneOrder(order: PossibleOrders):order is InternetOrder {
     return order && "callerNumber" in order - нам нужно булево значение
    return !!order && "callerNumber" in order - так правильно
}

function makeOrder(order: PossibleOrders) {
  if (isAnInternetOrder(order)) {
    console.log(order.email);
  } else if (isATelephoneOrder(order)) {
    console.log(order.callerNumber);
  }
}