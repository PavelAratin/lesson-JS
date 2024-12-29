//приведение типов
//всего 8 типов данных
  //примитивные типы 7 шт - их нельзя изменить,только перезаписать
// let str = "Hello";
// let nr = 7;
// let bigNr = 12345678901234n;
// let bool = true;
// let sym = Symbol("unique");
// let undef = undefined;
// let nullEl = null;
// сложный тип данных - обьект Object (набор примитивных данных)
// let obj = {};

// console.log("str", typeof str);
// console.log("nr", typeof nr);
// console.log("bigNr", typeof bigNr);
// console.log("bool", typeof bool);
// console.log("sym", typeof sym);
// console.log("undef", typeof undef);
// console.log("nullEl", typeof nullEl);
// console.log("obj", typeof obj);

////
// let nr1 = 2;
// let nr2 = "2";
// console.log(nr1 * nr2);

// let nr1 = 2;
// let nr2 = "2";
// console.log(nr1 + nr2);

//пример
// let num = 6;
// num = String(num);
// console.log(num, typeof num);
// let str = "12";
// str = Number(str);
// console.log(str, typeof str);
// let strToBool = "строка в булево значение";
// strToBool = Boolean(strToBool);
// console.log(strToBool, typeof strToBool);

//другой пример
// let nullEl = null;
// nullEl = Number(nullEl);
// console.log("null", nullEl, typeof nullEl);
// let str = "";
// str = Number(str);
// console.log("пустая строка", str, typeof str);
//     //перейти к обьяснению

// let str = "hello";
// str = Number(str);
// console.log(str, typeof str);
//Следовательно, все, что нельзя интерпретировать как число, просто удалив кавычки, будет оцениваться как NaN (не число).

// let str = "false";
// str = Boolean(str);
// console.log(str, typeof str);
// let str2 = "";
// str2 = Boolean(str2);
// console.log(str2, typeof str2);
//обьяснение 

//пример с операторами
// let num1 = 20;
// let num2 = 4;
// let str1 = "Hi";
// let num3 = 3;
// let result1 = num1 - num2;
// let result2 = str1 - num3;
// console.log(result1, result2);

//еще примеры
// console.log(3 + []);
// console.log(3 + [1]);
// console.log(3 + [1,2]);
// console.log(3 + ['1']);
// console.log(3 + ['hello']);
// console.log(3 + ['hello','fsdf']);
// console.log(3 + ['hello','fsdf',3]);
// ошибок не будет
// let obj = {}
// console.log(obj.foo);
 // ошибки не будет, будет undefined
// function a(b) {
//  return b/2
// }
// console.log(a("z") );
// //NaN - деление математич оператор и работает только с числами
//       // джс приведет число к строке, но если убрать кавычки, то оно не станет числом.  

