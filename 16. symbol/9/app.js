// Пользователь вводит строку, состоящую из слов, разделенных пробелами. Преобразуйте каждое
// слово так, чтобы первая буква была строчной, а остальные — заглавными.
// Входные: "HELLO WORLD" → Результат: "hELLO wORLD"
// Входные: "JavaScript LANGUAGE" → Результат: "jAVA sCRIPT lANGUAGE"
// Входные: "CODING is FUN" → Результат: "cODING iS fUN"

let a = prompt().toUpperCase().trim()

console.log(a[a.indexOf(' ') + 1].toLowerCase())




