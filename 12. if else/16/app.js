/*
Пользователь вводит с клавиатуры число. Найдите корень введенного числа (если
же результат – число с плавающей точкой, то округлить до 2 знаков после запятой).
 */
let a = +prompt()

let result = a ** 0.5

if ((Math.round(result) - result) == 0) {
    console.log(result);
} else {
    console.log(result.toFixed(2));
}





