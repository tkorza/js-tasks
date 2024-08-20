// 1. Пользователь вводит слово. Преобразуйте его в хештег. Проверка: строка должна состоять только
// из текста.
// Входные: "hSСhOol" → Результат: '#hschool'
// Входные: "JavaScript" → Результат: '#javascript'

let a = prompt()

let small = a.toLowerCase()
if (isNaN(a)) {
    console.log("#" + small)
} else {
    console.log(false)
}


