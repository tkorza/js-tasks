// 9. Создайте класс CircleC, который содержит свойство radius (радиус круга) и метод
// getCircumference() (вычисление длины окружности). Создайте экземпляр класса
// CircleC и выведите длину окружности. Длина окружности: 2 * π * r


class CircleC {
    radius: number

    constructor(R: number) {
        this.radius = R
    }

    getCircumference(): number {
        return 2 * 3.14159 * this.radius
    }
}

interface circleR_ {
    radius: number
    getCircumference(): number
}

const circleC: circleR_ = new CircleC(3)
console.log(circleC.getCircumference());
