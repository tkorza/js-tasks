// 10. На входе строка s. Проверьте, является ли строка палиндромом (читается одинаково в обе
//     стороны), используя рекурсию.
//     Входные: "madam" → Результат: True
//     Входные: "hello" → Результат: False
//     Входные: "racecar" → Результат: True
let str = "hello"
let st = 0
let end = str.length - 1
let result = false
function rec(strTest) {
    if (st > strTest.length - 1) return result
    strTest[st] == strTest[end] ? result = true : result = false
    st++
    end--
    return rec(strTest)
}

console.log(rec(str));


