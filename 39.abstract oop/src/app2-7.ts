// 7. Создайте класс ArrayAnalyzer, который будет содержать массив чисел как поле класса,
// инициализируемое через конструктор. Реализуйте методы:
// • getAverage для вычисления среднего значения массива,
// • getMax для поиска максимального значения в массиве,
// • getMin для поиска минимального значения в массиве.

// Входные:                                                      Входные:
// let analyzer = new ArrayAnalyzer([1, 2, 3, 4, 5]);            let analyzer = new ArrayAnalyzer([10, 20, 5, 30, 15]);
// analyzer.getAverage()                                         analyzer.getMax();
// → Результат: 3                                                → Результат: 30

// Входные:
// let analyzer = new ArrayAnalyzer([10, 20, 5, 30, 15]);
// analyzer.getMin();
// → Результат: 5

interface iArrayAnalyzer {
    array: number[]
    getAverage(): number
    getMax(): number
    getMin(): number
}

class ArrayAnalyzer {
    array: number[] = []
    constructor(length: number) {
        for (let i: number = 0; i < length; i++) {
            this.array.push(+prompt())
        }
    }

    getAverage(): number {
        let sum: number = 0
        this.array.forEach((el: number) => sum += el)
        return sum / this.array.length
    }

    getMax(): number {
        let maxValue: number = -Infinity
        this.array.forEach((el: number) => {
            if (el > maxValue) maxValue = el
        })
        return maxValue
    }

    getMin(): number {
        let minValue: number = Infinity
        this.array.forEach((el: number) => {
            if (el < minValue) minValue = el
        })
        return minValue
    }

}

let arrayAnalyzer: iArrayAnalyzer = new ArrayAnalyzer(5)
console.log(arrayAnalyzer.getAverage());
console.log(arrayAnalyzer.getMax());
console.log(arrayAnalyzer.getMin());


