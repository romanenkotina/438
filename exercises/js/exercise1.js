// ******** 1 задача
// Программа хранит в двух переменных курс доллара и евро. В первой переменной у вас хранится стоимость одного евро в рублях, во второй - стоимость одного доллара в рублях. Вы спрашиваете у пользователя, сколько рублей он хочет сконвертировать, получаете это число и считаете. Результат надо вывести на страницу с помощью alert.

let rateEuro = 89.64;
let rateDollar = 73.7;
let sumEuro, sumDollars;

let rubles = prompt("Сумма в рублях:");

if(!rubles && typeof rubles == "object") {
  alert("Вы отменили!!!");
}
else {
  if(rubles == "") {
    alert("Вы ничего не ввели!!!");
  }
  else {
    if(isNaN(+rubles)) {
      alert("Это не число!");
    }
    else {
      sumDollars = (rubles/rateDollar).toFixed(2);
      sumEuro = (rubles/rateEuro).toFixed(2);

      alert(`Сумма в долларах = ${sumDollars}$, сумма в евро = ${sumEuro}\u20AC.`);
    }
  }
}