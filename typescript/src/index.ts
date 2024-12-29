//number
let x = 10;
// let y = 1234n; //bigInt
let z = NaN; //тоже можно использовать
//x = 'dfg';//будет ошибка
//string
let str = "str"; //не явное определение типа
let str1: string = "str"; //явное опред типа.

//boolean
let o = true;
o = false;
//o = 1 //будет ошибка,переопределить нельзя

// массив booleans
let c: boolean[] = [true, false]
let d: string[] = ['false', 'false']
let e: number[] = [1, 2]
// если не хададим в ручнуютип, то тс это сделает сам
// let f = [1, 'sd']
// let f: (string | number)[] = [1, 'sdfds'] // для разнородного массива

//nothing
let und: undefined = undefined;
let nl: null = null;


//literal
const num = 1;
const str2 = "sd";
//num = 2//будет ошибка

// универсальные типы
// any
let num1:any = 1;
num1 = 'de';//ошибки нет тип эни позволяет менять тип на любой
num1 = [];
//num1.map...

// unknown - тип будет известен позднее

let xx:unknown = 10;
//xx.toUpperCase() // ошибка в отличии от эни
if(typeof xx === 'string') xx.toUpperCase()// при уточнении ошибки не будет

