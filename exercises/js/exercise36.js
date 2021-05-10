// Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.

let symb = prompt("Введите символ");
if(symb.length != 1) {
   alert("Только один символ!!!");
}
else {
   let setMas = symb => {
      let mas = [];
      let str = symb;

      for(let i = 0; i < 10; i++) {
         mas.push(str);
         str += symb;
      }
      return mas;
   }
   console.log(setMas(symb));
}

// let factRecourse = function innerFact(num) {
//    if(num <= 1) {
//       return 1;
//    }
//    return num * innerFact(num - 1);
// }

// console.log(factRecourse(5));

// let fact = num => {
//    let result = 1;

//    while(num >= 1) {
//       result *= num;
//       num--;
//    }
//    return result;
// }

// console.log(fact(5));