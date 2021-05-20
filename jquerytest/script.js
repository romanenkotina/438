// let adult = true;
let adult = false; // по умолчанию считает пользователя несовершеннолетним
let age;

$("#agecheck").on("click", () => {
	// проверяет 
	if (!adult) {
		// открывает окно
		$(".popup-overlay, .popup-content").fadeIn('slow')
	} else {
		// переходит сразу в раздел
		// только почему-то приходится дважды вбивать
		$('#agecheck').on('click', () => {
			window.open("adult.html")
		})}
	})

// переводит пользователя в раздел
// закрывает окошко
$('.goto').on('click' , () => {
	window.open("adult.html")
	$(".popup-overlay, .popup-content").fadeOut('slow');
	// меняет adult на true
	adult = true
	alert("Замечательно! Мы запомним это и в дальнейшем будем пускать вас в раздел сразу!")
})

// закрывает окно
$(".close").on("click", () => {
	$(".popup-overlay, .popup-content").fadeOut('slow');
});

// скрывает кнопку, пока возраст меньше 18

// ПЕРВЫЙ ВАРИАНТ ПРОСТО ВВОД ВОЗРАСТА
// корявое решение проблемы с тем, 
// что не менялись данные инпута
// сначала отключает ввод цифр
// $("[type='number']").keypress(function (e) {
// 	e.preventDefault();
// });
// // затем меняет данные при каждом клике
// $('#ageinput').on('click', () => {
// 	age = document.getElementById("ageinput").value
// if (age >= 18) {
// 	$('.goto').prop("disabled", false)
// } else {
// 	$('.goto').prop("disabled", true)
// }
// })

// ВТОРОЙ ВАРИАНТ КАЛЕНДАРЬ
// подключение календаря отключает верхний способ

// те же условия для календаря
// меняет значения тоже по клику, ввел дату - кликнул рядом
$('#bdayinput, .popup-overlay').on('click', () => {
	const now = Date.now()
	const bday = document.getElementById('bdayinput').value
	const diff = Math.abs(now - Date.parse(bday))
	const calcage = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
	if (calcage >= 18) {
		$('.goto').prop("disabled", false)
	} else {
		$('.goto').prop("disabled", true)
	}
})





//******** ЗАПИСИ С ЛЕКЦИИ

// стандартная длинная версия
// document.getElementById('h1').innerHTML = "Hello world, edited"

// короткая версия с jQuery
// $('#h1').html('Hello world, edited')

// console.log($('h1')) поиск по тэгу
// console.log($('#h11')) поиск по id
// console.log($('.header')) поиск по class

// console.log($("input[name='inpit1']"))
// console.log($("input[name^='inpit']")) начинается с ''
// console.log($("input[name$='1']")) заканчивается на ''

// console.log($("input[class~='class1']")) если несколько значений

// $('div').attr('style', 'width:150px; height:150px; background: red') задаем параметры

// $('input').prop('disabled', true)

// $('input').each((index, item) => {
// 	$(item).val(index)
// 	console.log(item.val)
// }) обращаемся к каждому элементу

// $('button').on('click', () => {
// 	console.log('click')
// } кликаем кнопку

// $('button').on('click', (event) => {
// 	console.log(event)
// })

// $('button').on('click.event1', (event) => {
// 	console.log('event 1')
// })

// $('button').on('click.event2', (event) => {
// 	console.log('event 2')
// })
// сработали оба события

// $('#btn1').on('click.event1', () => {
// 	console.log('event 1')
// })

// $('#btn1').on('click.event2', () => {
// 	console.log('event 2')
// })

// $('#btn2').on('click', () => {
// 	$('#btn1').trigger('click.event1')
// }) обращаемся к одному из евентов кнопки с помощью другой

// стандартные анимации
// $('#btn1').on('click', () => {
// 	$('p').hide()
// })

// $('#btn2').on('click', () => {
// 	$('p').show()
// })

// $('#btn1').on('click', () => {
// 	$('p').fadeOut('slow')
// })

// $('#btn2').on('click', () => {
// 	$('p').fadeIn('slow')
// })

// $('#btn1').on('click', () => {
// 	$('p').slideUp('slow')
// })

// $('#btn2').on('click', () => {
// 	$('p').slideDown('slow')
// })

// уникальные сложные анимации
// $('#btn1').on('click', () => {
// 	$('div').animate(
// 		{ // Свойства и значения css
// 			'margin-top': '500px'
// 			// или добавить в стиль div 'position: absolute' и оставить просто 'left'
// 		}, 1500, // время
// 		'linear', // строковое название функции
// 		() => { // call back функция
// 		alert('Я закончила двигать ящик!')})		
// })

// $('#btn2').on('click', () => {
// 	$('div').animate({
// 		'margin-left': '500px'
// 	}, 1500)
// })