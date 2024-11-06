// 5. Создайте класс NumberGenerator с методом generateNumbers(size), который возвращает массив
// чисел от 1 до size. Наследуйте от него класс EvenNumbers, добавив метод getEvenNumbers(size),
// который вызывает generateNumbers(size) и фильтрует только четные числа.
// Входные: new EvenNumbers().getEvenNumbers(6) → Результат: [2, 4, 6]
// Входные: new EvenNumbers().getEvenNumbers(10) → Результат: [2, 4, 6, 8, 10]
// Входные: new EvenNumbers().getEvenNumbers(3) → Результат: [2]

// class NumberGenerator {
//     generateNumbers(size) {
//         const arr = []
//         for (let i = 0; i < 10; i++) {
//             arr.push(Math.round(Math.random() * size))
//         }
//         return arr
//     }
// }

// class EvenNumbers extends NumberGenerator {
//     getEvenNumbers(size) {
//         const result = this.generateNumbers(size).filter(el => {
//             if (el % 2 === 0) return true
//         })
//         return result
//     }
// }

// const evenNumbers = new EvenNumbers()
// console.log(evenNumbers.getEvenNumbers(10))

/////////////////////////////////////////////////////////
class NumberGenerator {
    size = 10
    generateNumbers() {
        const arr = []
        for (let i = 0; i < 10; i++) {
            arr.push(Math.round(Math.random() * this.size))
        }
        return arr
    }
}

class EvenNumbers extends NumberGenerator {
    getEvenNumbers() {
        const result = this.generateNumbers(this.size).filter(el => {
            if (el % 2 === 0) return true
        })
        return result
    }
}

const evenNumbers = new EvenNumbers()
console.log(evenNumbers.getEvenNumbers())

