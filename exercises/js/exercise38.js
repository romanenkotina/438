// Дан массив с числами.Выведите последовательно его элементы используя рекурсию и не используя цикл.

let mas = [];

const setElem = () => {
	for (let i = 0; i < 10; i++) {
		mas.push(Math.ceil(Math.random() * 10));
	}
}

setElem();

const getElem = (index) => {

	if (index < (mas.length - 1)) {
		return mas[index].toString() + ', ' + getElem(++index);
	}
	return mas[index].toString() + '!';
}

alert(getElem(0));