// добавить затемнение фона
// добавить клик вне окошка для закрытия
// решить проблему с двойным кликом, когда адулт тру
// создать куки
// если сделать куки, поменять открытие страниц в одной вкладке
// если сделать куки и он работает, как я думаю, найти способ стирать этот куки

let adult = false; // статус пользователя: несовершеннолетний

// пользователь нажал на раздел 18+
$("#agecheck").on("click", () => {
  // проверяет статус пользователя
  if (!adult) {
    // если несовершеннолетний, открывает модальное окно
    $(".popup").fadeIn("slow");
    // пользователь нажал на кнопку перейти
    // переводит пользователя в раздел и закрывает модальное окно
    $(".goto").on("click", () => {
      window.open("adult.html");
      $(".popup").fadeOut("slow");
      // меняет статус пользователя на совершеннолетнего
      adult = true;
      alert(
        "Замечательно! Мы запомним это и в дальнейшем будем пускать вас в раздел сразу!"
      );
    });
  } else {
    // если совершеннолетний, переходит сразу в раздел 18+
    // только почему-то приходится дважды кликать
    $("#agecheck").on("click", () => {
      window.open("adult.html");
    });
  }
});

// пользователь нажимает Закрыть
// закрывает модальное окно
$(".close").on("click", () => {
  $(".popup").fadeOut("slow");
});

// считает, исполнилось ли пользователю 18
$("#bdayinput, .popup").on("change", () => {
  const now = Date.now();
  const bday = document.getElementById("bdayinput").value;
  const diff = Math.abs(now - Date.parse(bday));
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  // скрывает кнопку, пока возраст пользователя меньше 18
  if (age >= 18) {
    $(".goto").prop("disabled", false);
  } else {
    $(".goto").prop("disabled", true);
  }
});

// ограничение календаря до текущего дня (начало)
let currentdate = new Date();
let dd = currentdate.getDate();
let mm = currentdate.getMonth() + 1;
let yyyy = currentdate.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
currentdate = yyyy + "-" + mm + "-" + dd;
document.getElementById("bdayinput").setAttribute("max", currentdate);
// ограничение календаря до текущего дня (конец)
