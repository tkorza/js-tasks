// 9. Создайте класс CircleC, который содержит свойство radius (радиус круга) и метод
// getCircumference() (вычисление длины окружности). Создайте экземпляр класса
// CircleC и выведите длину окружности. Длина окружности: 2 * π * r
class CircleC {
    radius;
    constructor(R) {
        this.radius = R;
    }
    getCircumference() {
        return 2 * 3.14159 * this.radius;
    }
}
const circleC = new CircleC(3);
console.log(circleC.getCircumference());
