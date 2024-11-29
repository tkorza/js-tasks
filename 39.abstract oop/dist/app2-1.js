// 1. Создайте абстрактный класс Shape (Фигура) с абстрактным методом calculateArea()
// (вычислитьПлощадь). Затем создайте дочерний класс Rectangle (Прямоугольник), который
// наследует Shape и реализует метод calculateArea() для расчета площади прямоугольника. Формула
// для вычисления площади прямоугольника: S = длина * ширина
// Входные: Rectangle(5, 4) → Результат: 20
// Входные: Rectangle(10, 3) → Результат: 30
// Входные: Rectangle(7, 7) → Результат: 49
class Shape {
}
class _Rectangle extends Shape {
    width;
    height;
    constructor(W, H) {
        super();
        this.width = W;
        this.height = H;
    }
    isValid() {
        if (!this.width || !this.height)
            throw new Error('введено не число!');
        if (isNaN(this.width) || isNaN(this.height))
            throw new Error('введено не число!');
    }
    calculateArea() {
        try {
            this.isValid();
            return this.width * this.height;
        }
        catch (error) {
            return error;
        }
    }
}
const rect = new _Rectangle(4, 5);
console.log(rect.calculateArea());
