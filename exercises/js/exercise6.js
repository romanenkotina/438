// Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.

let num1, num2;

num1 = prompt("Первое число:");
if (!num1 && typeof num1 == "object") {
  alert("Вы отменили!");
} else {
  if (num1 == "" || isNaN(+num1)) {
    alert("Введите число цифрами!");
  } else {
    num2 = prompt("Второе число:");
    if (!num2 && typeof num2 == "object") {
      alert("Вы отменили!");
    } else {
      if (num2 == "" || isNaN(+num2)) {
        alert("Введите число цифрами!");
      } else {
        alert(`Остаток от деления= ${num1 % num2}`);
      }
    }
  }
}