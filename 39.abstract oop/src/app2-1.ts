// 1. Создайте абстрактный класс Shape (Фигура) с абстрактным методом calculateArea()
// (вычислитьПлощадь). Затем создайте дочерний класс Rectangle (Прямоугольник), который
// наследует Shape и реализует метод calculateArea() для расчета площади прямоугольника. Формула
// для вычисления площади прямоугольника: S = длина * ширина
// Входные: Rectangle(5, 4) → Результат: 20
// Входные: Rectangle(10, 3) → Результат: 30
// Входные: Rectangle(7, 7) → Результат: 49

abstract class Shape {
    abstract calculateArea(): number
}

class _Rectangle extends Shape {
    width: number;
    height: number;

    constructor(W: number, H: number) {
        super()
        this.width = W
        this.height = H
    }
    private isValid() {
        if (!this.width || !this.height) throw new Error('введено не число!')
        if (isNaN(this.width) || isNaN(this.height)) throw new Error('введено не число!')
    }
    calculateArea(): number {
        try {
            this.isValid()
            return this.width * this.height

        } catch (error) {
            return error
        }
    }
}
interface rectParam {
    width: number
    height: number
    calculateArea(): number
}
const rect = new _Rectangle(4, 5)

console.log(rect.calculateArea());
