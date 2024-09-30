// 7. На вход подается строка. Необходимо удалить все гласные из строки. Добавить проверки на
// ввод строки (ввод должен быть строкой).
// "hello" -> "hll",
// "world" -> "wrld"
let input = prompt('Введите строку')

function deleteVowel(strTest) {
    try {
        let arr = strTest.split('')
        let withoutNumber = arr.every((elem) => isNaN(elem))
        if (!withoutNumber) return Error('Присутсвтуют число!')
        let vowels = 'eioauyEUIAOY'
        let result = ''
        for (let el of strTest.split('')) {
            if (!vowels.includes(el)) result += el
        }
        return result

    } catch (error) {
        return error
    }
}

console.log(deleteVowel(input));
