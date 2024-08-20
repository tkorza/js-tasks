// 13. На вход подается строка, содержащая несколько предложений. Напишите программу, которая
// подсчитывает количество предложений в строке.
// Входные: "Hello. How are you? I'm fine!" → Результат: 3
// Входные: "This is one sentence." → Результат: 1
// Входные: "What's your name? My name is John." → Результат: 2

let str = prompt().trim()
if (str.includes('.') || str.includes('!') || str.includes('?')) {
    let b = str.split('.').join('')
    b = b.split('!').join('')
    b = b.split('?').join('')

    if (str[str.length - 1] != '.' && str[str.length - 1] != '?' && str[str.length - 1] != '!') {
        console.log((str.length - b.length) + 1)
    } else {
        console.log(str.length - b.length)
    }

} else {
    console.log('1')
}

