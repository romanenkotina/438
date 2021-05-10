// /*** ОБЪЕКТЫ (начало) ***/
// // Литеральный способ создания объекта {}
// let button = {
//   text: "Купить",

//   position: "absolute",
//   top: "50%", 
//   left: "50%",

//   width: "350px",
//   height: "70px",
//   marginLeft: "-175px",
//   marginTop: "-35px",
//   padding: "10px 30px",

//   fontSize: "18px",
//   color: "#ffffff",
//   backgroundColor: "darkred",
//   boxShadow: "0 0 5px #ff0000",
//   borderRadius: "10px",

//   isBorder: false
// };

// let btn = document.createElement("button");

// for(let property in button)
// {
//   if(property == "text") {
//      btn.textContent = button[property];
//   }
//   else {
//      if(property == "isBorder") {
//         if(button[property]) {
//            btn.style.border = "2px solid darkred";
//         }
//         else {
//            btn.style.border = "none";
//         }
//      }
//      else {
//         btn.style[property] = button[property];
//      }
//   }
// }

// document.body.prepend(btn);

// // console.dir(btn.style.boxShadow);

// //string, number, boolean, Array, Object, Function

// /*** ОБЪЕКТЫ (конец) ***/



// Примитивные
//string "123"
//number 12; 14.6
//boolean true/false
//null
//undefined
//symbol

//Сложные
//object ==> массивы, объекты, функции




/*** МЕТОДЫ МАССИВА
1) push / unshift - добавление эл-та(ов) в конец/начало массива
2) pop / shift - удаление последнего/первого элемента в массиве
3) slice() - без параметров создаёт полную копию массива
   slice(0, 3) - выбирает элементы с 0-го до 3-го (не включая)
   slice(0, -2) - выбирает элементы с 0-го до конца массива, кроме последних 2-х
4) splice(0, 3) - удаляет 3 элемента с начала
   splice(-3, 3) - удаляет 3 элемента с конца
   splice(0, 3, 1000, 2000) - удаляет 3 элемента с начала и вставляет 2 новых (1000 и 2000)
***/

// let assocMas = new Map([
//   ["number", 1000],
//   ["city", "Москва"],
//   ["flag", true]
// ]);

// assocMas.set("date", "28.04.2021"); //создать элемент с ключом "date"
// console.log(assocMas.get("date")); //вернуть значение по ключу "date"
// console.log(assocMas.size); //длина массива

// assocMas.delete("number"); //удаление элемента с ключом "number"
// console.log(assocMas);



/*** Пример задачи с Двумерным массивом
***/
// let matrix = [];

// let countElements = +prompt("Кол-во элементов в массиве:");

// for(let i = 0; i < countElements; i++) {
//   let isArray = confirm(`${i + 1}-й элемент, массив?`); //true или false

//   if(isArray) {
//     let innerCount = +prompt("Кол-во элементов в массиве?");
    
//     matrix[i] = []; //элемент массива - сам является массивом

//     for(let j = 0, elem = ""; j < innerCount; j++) {
//       elem = prompt(`${j + 1}-й эл-т:`);

//       if( (+elem).toString() == "NaN"
//           && elem != "true" && elem != "false") {
//         matrix[i][j] = elem;
//       }
//       else if( isNaN(+elem) ) {
//         elem == "true" ? matrix[i][j] = true : matrix[i][j] = false;
//       }
//       else {
//         matrix[i][j] = +elem;
//       }
//     }
//   }
//   else {
//     matrix[i] = +prompt(`Введите число:`);
//   }
// }

// // вывод элементов массива в консоль
// for(let i in matrix) {
//   if(Array.isArray(matrix[i])) {
//     for(let j = 0; j < matrix[i].length; j++) {
//       console.log(matrix[i][j]);
//     }
//   }
//   else {
//     console.log(matrix[i]);
//   }
// }

// console.log(JSON.stringify(matrix));



// for(let i in matrix) {
//   if(i == 1) {
//     // 1-й способ
//     for(let j in matrix[1]) {
//       console.log(`${+j + 1}. ${matrix[1][j]}`);
//     }

//     // 2-й способ
//     for(let j = 0; j < matrix[1].length; j++) {
//       console.log(`${+j + 1}. ${matrix[1][j]}`);
//     }
//   }
// }



// //**** Мини-калькулятор ****
// // сложение 2-х чисел
// // разность 2-х чисел
// // произведение 2-х чисел
// // частное 2-х чисел
// // возведение числа в n-степень
// // корень n-й степени

// let cancel = true;
// let menu = `Ваш выбор (0-6):
// 1. Сложение 2-х чисел
// 2. Разность 2-х чисел
// 3. Произведение 2-х чисел
// 4. Деление 2-х чисел
// 5. Возведение числа в n-ю степень
// 6. Вычисление корня n-й степени
// 0. Отмена`;

// let num1, num2;
// let result; //сумма, разность, произведение...

// do {
//   let operation = prompt(menu, "0");

//   switch(operation) {
//     case "1": num1 = +prompt("Первое число:");
//               num2 = +prompt("Второе число:");

//               result = num1 + num2;
//               alert(`Сумма чисел = ${result}`);
//               break;
//     case "2": num1 = prompt("Первое число:");
//               num2 = prompt("Второе число:");

//               result = num1 - num2;
//               alert(`Разность чисел = ${result}`);
//               break;
//     case "3": num1 = prompt("Первое число:");
//               num2 = prompt("Второе число:");

//               result = num1 * num2;
//               alert(`Произведение чисел = ${result}`);
//               break;
//     case "4": num1 = prompt("Первое число:");
//               num2 = prompt("Второе число:");

//               if(num2 != 0) {
//                 result = num1 / num2;
//                 alert(`Частное 2-х чисел = ${result.toFixed(2)}`);
//               }
//               else {
//                 alert(`Делить на 0 нельзя!`);
//               }
//               break;
//     case "5": num1 = prompt("Число:");
//               num2 = prompt("Степень:");

//               if(num2 < 0) {
//                 result = Math.pow(num1, num2).toFixed(4);  
//               }
//               else {
//                 // result = num1**num2;
//                 result = Math.pow(num1, num2);
//               }

//               alert(`Число ${num1} в степени ${num2} = ${result}`);
//               break;
//     case "6": num1 = prompt("Число:");
//               num2 = prompt("Степень корня:");

//               result = Math.pow(num1, 1 / num2);
//               alert(`Корень степени ${num2} из числа ${num1} = ${result}`);

//               break;
    
//     //отмена (закрытие меню)
//     case "0": 
//     case null: cancel = false;
//               break;
//     default:  alert("Ошибка! Неверный выбор!!!");
//               break;
//   }
// } while(cancel);



// ******** 4 задача



// ******** инкремент
// i = i + 1;
// i++; //постфиксная запись
// ++i; //префиксная запись

// декремент
// i = i - 1;
// i--; //постфиксная запись
// --i; //префиксная запись

// let x = 10;
// let y, z;
// console.log(x);

// y = x++; //y = 10, x = 11
// z = ++x; //z = 12, x = 12
// console.log(y);
// console.log(z);
// console.log(x);



// ******** Записи с первого дня
// let userName = "tina";
// let str = "Forum 'My lil ponies'"

// let num = 100;
// let numFloat = 10.25;

// let bool = true;

// let x = undefined;
// let y = null;

// let obj = {};
// let mas = [];
// let func = () => { console.log("Function") };


// console.log(typeof bool);

// 0b двоичная 
// 0x 16 hex
// 0o 8

// starts with a ${userName[userName.length - 1]};
// userName[0].toUpperCase() + userName.substring(1).toLowerCase();

// prompt("Type number: ", "100");

