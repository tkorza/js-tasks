// Пользователь вводит строку. Если первый символ строки — буква "А", выведите: "Строка '[строка]'
// начинается с буквы А.", иначе — "Строка '[строка]' не начинается с буквы А.". Решение через: if ... else,
// интерполяцию.
// Входные: "Авокадо" → Результат: "Строка 'Авокадо' начинается с буквы А."
// Входные: "Банан" → Результат: "Строка 'Банан' не начинается с буквы А."

let a = prompt()

if (a[0] === 'А') {
    console.log('строка "' + a + '" начинается с буквы А')
}else{
    console.log('строка "' + a + '" не начинается с буквы А')
}

if (a[0] === 'А') {
    console.log(`Строка '${a}' начинается с буквы A`) 
}else{
    console.log(`Строка '${a}' не начинается с буквы A`)
}
