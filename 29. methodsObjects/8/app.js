// 8. На вход подается число. Необходимо каждое значение возвести в степень
// индекса и вычислить сумму. 12345 = 1
// 0+2
// 1+3
// 2+4
// 3+5
// 4

const value = prompt('введите число').trim()

const valueArr = value.split('')

let sum = 0

valueArr.forEach((el, i) => {
    return sum += el ** i
})

console.log(sum);