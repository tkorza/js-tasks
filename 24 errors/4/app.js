// 4. На вход подается число n – количество элементов массива. Необходимо заполнить массив
// случайными элементами в диапазоне 0<n< 100. Добавить проверки на ввод n.

let n = prompt('Введите N')
function arrAdd(n) {
    let arr = []
    try {
        if (isNaN(n)) throw new Error('n - не число!')
        for (let i = 0; i < n; i++) {
            arr.push((Math.round(Math.random() * 100)))
        }
        return arr
    }


    catch (error) {
        return error
    }
}

console.log(arrAdd(n));
