// 1. Напишите программу, которая проверяет, делится ли заданное число num на 3 и 5 одновременно.
// Если делится, выведите "Число делится на 3 и 5", иначе "Число не делится на 3 и 5".
// Входные: num = 15 → Результат: "Число делится на 3 и 5"
// Входные: num = 14 → Результат: "Число не делится на 3 и 5"
const num = 15;
const num1 = 5;
const num2 = 3;
if (num % num1 === 0 && num % num2 === 0) {
    console.log("Число делится на 3 и 5");
}
else
    console.log("Число не делится на 3 и 5");