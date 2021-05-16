const formUsers = document.forms.formUsers;
const fldCountUsers = formUsers.elements.countUsers;
const fldUserName = formUsers.elements.userName;
const fldLogin = formUsers.elements.login;
const fldStatus = formUsers.elements.status;
const btnAddUser = formUsers.elements.addUser;
const btnClear = formUsers.elements.clear;

let userName,
   login,
   status = fldStatus.value,
   countUsers;

let users = []; // массив пользователей (объектов)

// установка контекста работы функции setAccessFields
let accessFldUserName = setAccessFields.bind(fldCountUsers); // контестом является объект fldCountUserd
let accessFldLogin = setAccessFields.bind(fldUserName); // контестом является объект fldUserName
let accessFldStatus = setAccessFields.bind(fldLogin); // контестом является объект fldLogin

// обработчики события ввода значения в поля: "Кол-во пользователей", "Имя пользователя" и "Логин"
fldCountUsers.addEventListener("input", accessFldUserName);
fldUserName.addEventListener("input", accessFldLogin);
fldLogin.addEventListener("input", accessFldStatus);

// обработчик события выбора из выпадающего списка "Статус"
fldStatus.addEventListener("change", () => (status = fldStatus.value));

// обработчики кнопки "Добавить" и "Очистить"
btnAddUser.addEventListener("click", (e) => addUsers(e));
btnClear.addEventListener("click", (e) => clearFields(e));

// обработчик нажатия клавиши Enter для добавления пользователя
window.addEventListener("keydown", (e) => {
   if (e.key == "Enter") {
      if (
         +fldCountUsers.value != 0 &&
         fldUserName.value != "" &&
         fldLogin.value != ""
      ) {
         addUsers(e);
      }
   }
});

// обработчик нажатия клавиши Escape для очистки полей формы
window.addEventListener("keydown", (e) => {
   if (e.key === "Escape") {
      clearFields(e);
   }
});

function addUsers(e) {
   countUsers = +fldCountUsers.value; // кол-во пользователей
   userName = fldUserName.value; // имя пользователя
   login = fldLogin.value; // логин

   createUser(userName, login, status);

   fldCountUsers.value = --countUsers;

   fldUserName.value = "";
   fldUserName.focus();
   fldLogin.value = "";
   fldStatus.options.selectedIndex = 0;

   if (countUsers == 0) {
      clearFields(e);
      // getInfoUsers();
   }
}

// Функция создания объекта user (пользователь) и добавление его в массив "users"
function createUser(name, login, status) {
   let user; // пользователь (объект)
   user = new User(name, login, status);

   users.push(user);
}

// Функция разблокировки/блокировки полей (логин и статус)
// this - является объектом fldUserName или fldLogin в зависимости от привязки, заданной в методе bind
function setAccessFields(e) {
   let fldVal = this.value.trim();

   switch (this.name) {
      case "countUsers":
         +this.value != 0 ?
            fldUserName.removeAttribute("disabled") :
            clearFields(e);
         break;
      case "userName":
         if (fldVal != "") {
            fldLogin.removeAttribute("disabled");
            btnClear.removeAttribute("disabled");
         } else {
            if (fldLogin.value != "") {
               fldLogin.value = "";
            }
            fldLogin.setAttribute("disabled", "");
            fldStatus.setAttribute("disabled", "");
            btnClear.setAttribute("disabled", "");
            btnAddUser.setAttribute("disabled", "");
         }
         break;
      case "login":
         if (fldVal != "") {
            fldStatus.removeAttribute("disabled");
            btnAddUser.removeAttribute("disabled");
         } else {
            fldStatus.setAttribute("disabled", "");
            btnAddUser.setAttribute("disabled", "");
         }
         break;
   }
}

// Функция очистки полей формы
function clearFields(e) {
   e.preventDefault();
   for (let field of formUsers) {
      if (field != fldCountUsers) {
         if (field != btnAddUser && field != btnClear && field != fldStatus) {
            field.value = "";
         }
         field.setAttribute("disabled", "disabled");
      } else {
         fldCountUsers.value = 0;
         fldStatus.options.selectedIndex = 0;
      }
   }
}

function getInfoUsers() {
   for (let user of users) {
      console.log(user.getUserInfo());
   }
}

class User {
   //name, login, isAdmin - формальные параметры

   static MAX_COUNT_USERS = 5; //максимально возможное число пользователей
   static #countUsers = 0; //кол-во пользователей

   #name;
   #login;
   #status;

   constructor(name, login, status) {
      User.#countUsers++;

      if (User.#countUsers > User.MAX_COUNT_USERS) {
         console.log("Превышение числа пользователей!");
         // throw false;
      } else {
         this.#name = name;
         this.#login = login;
         this.#status = status;
      }
   }

   get Name() {
      return this.#name;
   }
   set Name(value) {
      if (typeof value == "string" && value.length >= 3 && value.length <= 20) {
         this.#name = value;
      } else {
         console.log(
            "Значение имени должно быть строковым и соотвествовать определённому кол-ву символов!"
         );
      }
   }

   get Login() {
      return this.#login;
   }
   set Login(value) {
      if (typeof value == "string") {
         this.#login = value;
      } else {
         console.log("Значение логина должно быть строковым!");
      }
   }

   get Status() {
      return this.#status;
   }
   set Status(value) {
      if (typeof value == "string") {
         this.#status = value;
      } else {
         console.log("Значение должно быть строкового типа!");
      }
   }

   getUserInfo() {
      let str = "Информация о пользователе:".toUpperCase() + "\n";

      str += `Имя: ${this.Name}\n`;
      str += `Логин: ${this.Login}\n`;

      if (this.Status == "admin") {
         str += `Является админом!`;
      } else {
         str += `Обычный пользователь :(`;
      }

      return str;
   }

   changeUserName() {
      this.Name = prompt("Новое имя:");
      return this.getUserInfo();
   }
}



// /*** ОБЪЕКТЫ (начало) ***/
// // Литеральный способ создания объекта {}
// // let button = {
// //   id: "generateBtn",
// //   text: "Купить",
// //   class: "btn animate__animated",
// //   isBorder: false,
// // };

// function Button(id, styles, name, types) {
//    this.id = id;
//    this.text = name;
//    this.defaultStyles = {};
//    this.btnStyles = {};

//    // Формирование дефолтных свойств (для всех кнопок)

//    for (let key in styles) {
//       this.defaultStyles[key] = styles[key];
//    }

//    // Формирование индивидуальных свойств (у каждой кнопки свои!)
//    for (let key in types) {
//       if (key == this.id) {
//          for (let prop in types[key]) {
//             this.btnStyles = types[key];
//          }
//       }
//    }

//    // Создание кнопки (объекта DOM)
//    this.create = function () {
//       let btn = document.createElement("button"); //создание тега button
//       btn.id = this.id; //задаём атрибут id из св-ва объекта

//       // задаём общие свойства для кнопки
//       // key - имя свойства
//       // this.defaultStyles - свойство (объект) со стилями по умолчанию
//       for (let key in this.defaultStyles) {
//          btn.style[key] = this.defaultStyles[key];
//       }

//       // задаём индивидуальные свойства для кнопки
//       // key - имя свойства
//       // this.btnStyles - свойство (объект) со индивидуальными свойствами
//       for (let key in this.btnStyles) {
//          btn.style[key] = this.btnStyles[key];
//       }

//       btn.textContent = this.text; // задаём текст на кнопке
//       document.body.insertAdjacentElement("afterbegin", btn); // добавляем в начало body
//    };
// }

// // массив с id кнопок
// const ids = ["buy", "more", "read", "link"];

// // объект с общими CSS-свойствами кнопок
// const defaultStyles = {
//    color: "white",
//    padding: "10px 15px",
//    fontSize: "14px",
//    marginRight: "15px",
// };

// // объект с разновидностями кнопок - содержит индивидуальные CSS-свойства
// const typeButtons = {
//    buy: {
//       backgroundColor: "darkred",
//       boxShadow: "0 0 5px 0 red",
//    },
//    more: {
//       backgroundColor: "darkblue",
//       border: "2px solid gold",
//    },
//    read: {
//       backgroundColor: "darkgreen",
//       transform: "scale(1.1)",
//    },
//    link: {
//       textDecoration: "underline",
//       backgroundColor: "transparent",
//       padding: "0",
//       color: "red",
//       border: "none",
//    },
// };

// // массив с названиями кнопок
// const namesButton = ["Купить", "Подробнее", "Читать", "Перейти на Яндекс"];
// // массив для хранения объектов (кнопок)
// let buttons = [];

// for (let i = 0; i < namesButton.length; i++) {
//    buttons[i] = new Button(ids[i], defaultStyles, namesButton[i], typeButtons);
// }

// for (let key in buttons) {
//    buttons[key].create();
// }

// let select = document.getElementById("variantsButton");
// let div = document.querySelector(".buttons");
// let btn;

// select.addEventListener("input", () => {
//   if (document.getElementById(button.id)) {
//     btn.className = `${button.class} ${select.value}`;
//     btn.classList.add("animate__bounceIn");

//     setTimeout(() => {
//       btn.classList.remove("animate__bounceIn");
//     }, 1000);
//   } else {
//     btn = document.createElement("button");
//     btn.id = button.id;
//     btn.textContent = button.text;
//     btn.className = `${button.class} ${select.value}`;

//     btn.classList.add("animate__backInDown");

//     setTimeout(() => {
//       btn.classList.remove("animate__backInDown");
//     }, 2000);

//     div.insertAdjacentElement("afterend", btn);
//   }
// });

/*** ОБЪЕКТЫ (конец) ***/



// /***** Пример работы с событиями (начало) *****/
// const form = document.forms.form;

// const btnSubmit = form.elements.submit;
// const btnReset = form.elements.reset;

// btnSubmit.addEventListener("click", submit);
// btnReset.addEventListener("click", clear);

// function submit(e) {
//    e.preventDefault();

//    const login = form.elements.login;
//    const pass = form.elements.pswd;
//    const comments = form.elements.comments;

//    if (login.value.length >= 6 && pass.value.length >= 6) {
//       if (!document.getElementById("answer")) {
//          const p = document.createElement("p");
//          p.id = "answer";
//          p.innerHTML = `Логин пользователя: ${login.value}<br>
// 										Пароль: ${pass.value}`;
//          form.insertAdjacentElement("afterend", p);
//       } else {
//          document.getElementById(
//             "answer"
//          ).innerHTML = `Логин пользователя: ${login.value}<br>
// 										Пароль: ${pass.value}`;
//       }
//    }
//    if (comments.value != "") {
//       document.getElementById(
//          "answer"
//       ).innerHTML += `<br>Комментарий: ${comments.value}`;
//    }
// }

// function clear(e) {
//    e.preventDefault();

//    for (let field of form) {
//       if (
//          !(
//             field.getAttribute("type") == "submit" ||
//             field.getAttribute("type") == "reset"
//          )
//       ) {
//          field.value = "";
//       }
//    }

//    if (document.getElementById("answer")) {
//       document.getElementById("answer").remove();
//    }
// }

// // console.dir(btnSubmit);


// Заголовок
// const title = document.createElement("h1");
// title.style.color = "#f00f0f";
// title.classList.add("title");

// title.innerHTML = `<span>Друзья</span>, добро пожаловать!`;

//afterbegin, afterend, beforebegin, beforeend
// document.body.insertAdjacentElement("beforebegin", title);

// Кнопка
// const button = document.createElement("button");
// button.id = "btn";
// button.classList.add("btn-image");
// button.textContent = "Показать картинку";
// document.querySelector("h1.title").insertAdjacentElement("afterend", button);

// // Создание картинки
// document.getElementById("btn").addEventListener("click", createImage);

// function createImage() {
//    if (!document.getElementById("image")) {
//       const img = document.createElement("img");
//       img.id = "image";
//       img.alt = "Фото";
//       img.src = "./img/logo.svg";
//       img.className = "image";

//       setTimeout(() => {
//          document.getElementById("btn").insertAdjacentElement("afterend", img);
//          document.getElementById("btn").textContent = "Скрыть картинку";
//       }, 500);

//       // Клик по картинке
//       img.addEventListener("click", showMessage);
//    } else {
//       setTimeout(() => {
//          document.getElementById("image").remove();
//          if (document.getElementById("message")) {

//             document.getElementById("message").classList.remove("animate__rotateIn");
//             document.getElementById("message").classList.add("animate__rotateOut");

//             setTimeout(() => {
//                document.getElementById("message").remove();
//             }, 1000);
//          }
//          document.getElementById("btn").textContent = "Показать картинку";
//       }, 500);
//    }
// }

// function showMessage(e) {
//    const src = e.target.src;

//    if (!document.getElementById("message")) {
//       const div = document.createElement("div");
//       div.id = "message";
//       div.classList.add("message", "animate__animated", "animate__rotateIn");

//       const p = document.createElement("p");
//       p.innerHTML = `Адрес картинки: <strong>${src}</strong>`;
//       div.insertAdjacentElement("beforeend", p);

//       document.getElementById("image").insertAdjacentElement("afterend", div);
//    }
// }


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