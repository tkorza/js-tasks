// 13. На входе массив чисел. Необходимо сформировать объект, где ключ – это элемент массива, а
// значение – true или false. Если число четное, то значение будет true, если нечетное – false.
// Входные: [1, 2, 3, 4, 5] → Результат: {1: false, 2: true, 3: false, 4: true, 5: false}
// Входные: [10, 15, 22, 33] → Результат: {10: true, 15: false, 22: true, 33: false}
let arr = [1, 2, 3, 4, 5]
const obj = {}

for (let i = 1; i <= arr.length; i++) {
    if (arr[i] % 2 == 0) {
        obj.push(`${arr[i]} : true`)
    } else {
        obj.push(`${arr[i]} : false`)
    }
}

for (let el in obj) {
    console.log(el)
}












