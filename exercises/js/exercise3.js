// ******** 3 задача
// Пользователь вводит сумму вклада и процент, который будет начисляться ежегодно.
// Отобразить размер вклада поочередно на ближайшие 5 лет.

let sum; //сумма вклада
let percent; //годовой процент
let countYears; //кол-во лет
let result = ""; //итоговая строка с выводом

let endWordYears = ""; //строка, содержащая "год(а)", "лет"

sum = Number(prompt("Сумма вклада:"));
percent = Number(prompt("Годовой %:"));
countYears = Number(prompt("Период вклада (в годах):", "5"));

for(let i = 1; i <= countYears; i++) {
  sum += sum * percent / 100;

  //1 год, 21 год
  //2, 3, 4 года
  //5,6,7,8,9,10 лет + 11 лет!

  if(i != 11 && i % 10 == 1) {
    endWordYears = "год";
  }
  else if((i >= 5 && i <= 20) || (i % 10 >= 5 && i % 10 <= 9 ) || (i % 10) == 0) {
    endWordYears = "лет";
  }
  else {
    endWordYears = "года";
  }

  result += `Через ${i} ${endWordYears} сумма = ${sum.toFixed(2)}\n`;
  console.log(`Через ${i} ${endWordYears} сумма = ${sum.toFixed(2)}`);
}

alert(result);