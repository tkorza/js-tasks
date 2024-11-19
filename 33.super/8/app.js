// 8. Создайте родительский класс NumberArrayGenerator, который будет генерировать массив чисел
// от 1 до 8 с помощью метода generateArray(). Затем создайте дочерний класс EvenNumberFilter,
// который переопределяет метод generateArray() и оставляет в массиве только чётные числа.
// Входные: new EvenNumberFilter().generateArray() → Результат: [2, 4, 6, 8]

class NumberArrayGenerator {
    generateArray() {
        const arr = []
        for (let i = 0; i < 5; i++) {
            arr.push(Math.floor(Math.random() * 8))
        }
        return arr
    }
}
class EvenNumberFilter extends NumberArrayGenerator {
    generateArray() {
        const arr = super.generateArray()
        console.log(arr);

        const result = arr.filter(el => el % 2 == 0)
        return result
    }
}

const evenNumberFilter = new EvenNumberFilter()
console.log(evenNumberFilter.generateArray());

