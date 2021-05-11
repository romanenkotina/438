// ******** Пример рекурсии
// let factRecourse = function innerFact(num) {
//    if (num <= 1) {
//       return 1;
//    }
//    return num * innerFact(num - 1);
// }

// console.log(factRecourse(5));



// function multiplyEach() { 
//    // Remove the last value of the stack 
//    // and assign it to the variable int 
//    int = stack.pop(); 
//    x = stack.length; 
//    // Base case 
//    if (x===0) { 
//       console.log(int); 
//    }
//    // Recursive case 
//    else if(x!=0){ 
//       stack[x - 1] = int * stack[x - 1]; 
//       multiplyEach(); 
//    }

// function multiplyEach() { 
//    // Remove the last value of the stack 
//    // and assign it to the variable int 
//    int = stack.pop(); 
//    x = stack.length; 
//    // Base case 
//    if (x === 0) { 
//       return int; 
//    } 
//    // Recursive case 
//    else { 
//       stack[x - 1] = int * stack[x - 1]; 
//       return multiplyEach(); 
//    } 
// }

// let num1 = 100;
// let num2 = 200;

// //Function Expression
// let multiple = function(num1, num2) {
//    return num1 * num2;
// }

// //() => {}
// let getNumber = () => {
//    return [num1, num2];
// }

//Function Declaration
// function calcSum(num1, num2) {
//    return num1 + num2;
// }



// /*** МИНИ-КАЛЬКУЛЯТОР (начало) ***/
// // сложение 2-х чисел
// // разность 2-х чисел
// // произведение 2-х чисел
// // частное 2-х чисел
// // возведение числа в n-степень
// // корень n-й степени

// let cancel = true; //пока true - пользователю выводится меню
// let menu = `Ваш выбор (0-6):
// 1. Сложение 2-х чисел
// 2. Разность 2-х чисел
// 3. Произведение 2-х чисел
// 4. Деление 2-х чисел
// 5. Возведение числа в n-ю степень
// 6. Вычисление корня n-й степени
// 0. Отмена`;

// let result;
// let params = [];

// do {
//    result = undefined;
//    let operation = prompt(menu, "0"); //выбор пользователя (пункт меню)

//    switch(operation) {
//       case "1": params = getParametrs(operation);
//                result = getResult(params, "+");            
//                break;

//       case "2": params = getParametrs(operation);
//                result = getResult(params, "-");
//                break;

//       case "3": params = getParametrs(operation);
//                result = getResult(params, "*");
//                break;

//       case "4": params = getParametrs(operation);
//                result = getResult(params, "/");
//                break;

//       case "5": params = getParametrs(operation);
//                result = getResult(params, "^");
//                break;

//       case "6": params = getParametrs(operation);
//                result = getResult(params, "n");
//                break;

//       //отмена (закрытие меню)
//       case "0": 
//       case null: cancel = false;
//                break;
//       default:  result = "Ошибка! Неверный выбор!!!";
//                break;
//    }
//    if(result){ 
//       alert(result);
//    }
// } while(cancel);


// //Задаёт параметры (вводимые значения)
// function getParametrs(oper) {
//    let str1, str2;

//    if(oper >= 1 && oper <= 4) {
//       str1 = "Первое число:";
//       str2 = "Второе число:";
//    }
//    else if(oper == 5) {
//       str1 = "Число:";
//       str2 = "Степень:";
//    }
//    else {
//       str1 = "Число:";
//       str2 = "Степень корня:";
//    }
//    return checkParametrs(str1, str2); 
// }

// //Проверяет параметры
// function checkParametrs(str1, str2) {
//    let p1, p2; //параметры (вводимые пользователем значения)

//    let cancel; //флаг для анализа выхода из цикла
//                //когда значение false - выходим из цикла

//    let exit = true; //флаг для выхода из внутреннего цикла
//                     //когда значение false - выходим из цикла

//    start:
//    if(exit) {
//       do {
//          p1 = prompt(str1);
//          cancel = checkP(p1); //проверка параметра на null,
//                               //пустую строку или не число

//          if(cancel == "undefined") {
//             break;
//          }
//          //если первый параметр введён корректно (т.е. является числом)
//          //т.е. cancel --> false
//          if(!cancel) {
//             do {
//                p2 = prompt(str2);
//                cancel = checkP(p2);

//                if(cancel == "undefined") {
//                   exit = false;
//                   break start;
//                }
//             } while(cancel);
//          }
//       } while(cancel);
//    }

//    return [p1, p2];
// }

// //Проверяет параметр.
// //Возвращает "undefined" или true (введена пустая строка или не число!)
// //или false (введено число)
// function checkP(param) {
//    if(!param && typeof param == "object") {
//       param = "undefined";
//       return param;
//    }
//    if(param == "" || isNaN(+param)) {
//       alert("Пустая строка или не число!");
//       return true;
//    }
//    return false;
// }

// //Вычисляет результат и возвращает строку с ним
// function getResult(params, oper) {
//    let result;
//    let p1 = params[0], p2 = params[1];

//    if(!p1 && typeof p1 == "object" ||
//       !p2 && typeof p2 == "object") {
//       result = "Вы отменили ввод!";
//    }
//    else {
//       p1 = +p1;
//       p2 = +p2;

//       switch(oper) {
//          case "+": result = `Сумма чисел = ${p1 + p2}`;
//                   break;

//          case "-": result = `Разность чисел = ${p1 - p2}`;
//                   break;

//          case "*": result = `Произведение чисел = ${p1 * p2}`;
//                   break;

//          case "/": if(p2 != 0) {
//                      if(Number.isInteger(p1 / p2)) {
//                         result = `Частное 2-х чисел = ${(p1 / p2)}`;
//                      }
//                      else {
//                         result = `Частное 2-х чисел = ${(p1 / p2).toFixed(4)}`;
//                      }
//                   }
//                   else {
//                      result = "Делить на 0 нельзя!";
//                   }
//                   break;

//          case "^": if(p2 < 0) {
//                      result = `Число ${p1} в степени ${p2} = ${(p1**p2).toFixed(4)}`;  
//                   }
//                   else {
//                      result = `Число ${p1} в степени ${p2} = ${p1**p2}`;
//                   }
//                   break;

//          case "n": if(Number.isInteger(p1**(1 / p2))) {
//                      result = `Корень степени ${p2} из числа ${p1} = ${p1**(1 / p2)}`;
//                    }
//                    else {
//                      result = `Корень степени ${p2} из числа ${p1} = ${(p1**(1 / p2)).toFixed(4)}`;
//                    }  
//                   break;
//       }
//    }
//    return result;
// }
// /*** МИНИ-КАЛЬКУЛЯТОР (конец) ***/



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

// // Финальный вариант кнопки

// let button = {
//   id: "generateBtn",
//   text: "Купить",
//   class: "btn animate__animated",
//   isBorder: false
// };

// //select - селектор тега (типа)
// //.select - селектор класса
// //select option - контекстный селектор (селектор потомков)
// //.menu .item-menu - контекстный селектор (селектор потомков)
// //select > option - дочерний селектор
// //[type] - селектор по атрибуту
// //[type="checkbox"] - селектор по атрибуту
// //select + p - соседний селектор (найди p, который сразу за select)
// //select ~ p - соседи

// let select = document.getElementById("variantsButton");
// let div = document.querySelector(".buttons");
// let btn;

// select.addEventListener("input", () => {
//   if(document.getElementById(button.id)) {
//      btn.className = `${button.class} ${select.value}`;
//      btn.classList.add("animate__bounceIn");

//      setTimeout(()=>{
//         btn.classList.remove("animate__bounceIn");
//      }, 1000);
//   }
//   else {
//      btn = document.createElement("button");
//      btn.id = button.id;
//      btn.textContent = button.text;
//      btn.className = `${button.class} ${select.value}`;

//      btn.classList.add("animate__backInDown");

//      setTimeout(() => {
//         btn.classList.remove("animate__backInDown");
//      }, 2000);

//      div.insertAdjacentElement("afterend", btn);
//   }
// });

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