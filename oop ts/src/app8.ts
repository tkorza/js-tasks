// 8. Создайте класс CircleR, который содержит свойство radius (радиус круга) и метод
// getArea() (вычисление площади круга). Создайте экземпляр класса CircleR и
// выведите площадь окружности. Площадь круга: π * r^2

class CircleR {
    radius: number
    constructor(R: number) {
        this.radius = R
    }
    getArea(): number {
        return 3.14159 * this.radius ** 2
    }
}
interface _circleR {
    radius: number
    getArea(): number
}

const circleR: _circleR = new CircleR(2)

console.log(circleR.getArea());

