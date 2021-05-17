// С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.

let firstNum = +(prompt('С какого числа начать:', '1'));
let step = +(prompt('Насколько увеличивать числа:', '1'));
let count = +(prompt('Сколько чисел всего:', '9'));

let str = '';

for (i = 0; i < count; i++) {
	str += firstNum + ' ';
	firstNum += step;
	console.log(str);
}

alert(str.trim())