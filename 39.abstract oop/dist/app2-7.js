// 7. Создайте класс ArrayAnalyzer, который будет содержать массив чисел как поле класса,
// инициализируемое через конструктор. Реализуйте методы:
// • getAverage для вычисления среднего значения массива,
// • getMax для поиска максимального значения в массиве,
// • getMin для поиска минимального значения в массиве.
class ArrayAnalyzer {
    array = [];
    constructor(length) {
        for (let i = 0; i < length; i++) {
            this.array.push(+prompt());
        }
    }
    getAverage() {
        let sum = 0;
        this.array.forEach((el) => sum += el);
        return sum / this.array.length;
    }
    getMax() {
        let maxValue = -Infinity;
        this.array.forEach((el) => {
            if (el > maxValue)
                maxValue = el;
        });
        return maxValue;
    }
    getMin() {
        let minValue = Infinity;
        this.array.forEach((el) => {
            if (el < minValue)
                minValue = el;
        });
        return minValue;
    }
}
let arrayAnalyzer = new ArrayAnalyzer(5);
console.log(arrayAnalyzer.getAverage());
console.log(arrayAnalyzer.getMax());
console.log(arrayAnalyzer.getMin());
