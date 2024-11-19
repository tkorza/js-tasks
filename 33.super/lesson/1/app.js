// Создайте класс NumberList, который хранит массив чисел. Реализуйте метод findMax() для поиска наибольшего
//элемента массива. Метод должен использовать алгоритм линейного поиска и возвращать наибольший элемент.

// class NumberList {
//     arrNumber = [1, 2, 3, 4, 5]

//     findMax() {
//         let result = -Infinity
//         this.arrNumber.forEach(el => {
//             if (el > result) result = el
//         })
//         return result
//     }
// }

// const numberList = new NumberList()
// console.log(numberList.findMax());


class NumberList {
    arrNumber
    constructor(arr) {
        this.arrNumber = arr
    }

    findMax() {
        let result = -Infinity
        this.arrNumber.forEach(el => {
            if (el > result) result = el
        })
        return result
    }
}

const numberList = new NumberList([1, 2, 3, 4, 2, 3])
console.log(numberList.findMax());
