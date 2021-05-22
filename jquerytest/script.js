// решить проблему с двойным кликом, когда адулт тру
// если сделать куки и он работает, как я думаю, найти способ стирать этот куки
// перенаправить разноязычные страницы на разных уточек

let adult = false; // статус пользователя: несовершеннолетний
console.log(adult);

$(document).ready(function ($) {
  // пользователь нажал на раздел 18+
  $("#agecheck").on("click", () => {
    // проверяет статус пользователя
    if (!adult) {
//     if (getCookie("over-18") == "true") {
      // если несовершеннолетний, открывает модальное окно
      $(".popup-fade").fadeIn("slow");
      // пользователь нажал на кнопку перейти
      // переводит пользователя в раздел и закрывает модальное окно
      $(".goto").on("click", () => {
//         window.location.href = "adult.html";
        window.open("adult.html");
        $(".popup-fade").fadeOut("slow");
        // меняет статус пользователя на совершеннолетнего
        adult = true;
//         document.cookie = "over-18=true";
      });
    } else {
      // если совершеннолетний, переходит сразу в раздел 18+
      // только почему-то приходится дважды кликать
      $("#agecheck").on("click", () => {
//         window.location.href = "adult.html";
        window.open("adult.html");
      });
    }
  });

//   function getCookie(name) {
//     let cookies = document.cookie || "";
//     let cookie =
//       cookies.split("; ").find((row) => row.startsWith(name + "=")) || "";
//     return cookie.split("=")[1];
//   }

  // пользователь нажимает Закрыть
  // закрывает модальное окно
  $(".close").on("click", () => {
    $(".popup-fade").fadeOut("slow");
  });
  // закрывает окно при клике вне окна
  $(".popup-fade").click(function (e) {
    if ($(e.target).closest(".popup").length == 0) {
      $(this).fadeOut();
    }
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
