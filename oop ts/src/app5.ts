// 5. Создайте класс Rectangle, который содержит свойства width (ширина) и height
// (высота), а также метод getArea(), который возвращает площадь прямоугольника
// (ширина * высота). Создайте экземпляр класса Rectangle и выведите его площадь.
interface value {
    width: number
    height: number
    getArea(): number
}

class Rectangle {
    width: number;
    height: number;

    constructor(w: number, h: number) {
        this.height = h
        this.width = w
    }

    getArea(): number {
        return this.width * this.height
    }
}

const rectangle: value = new Rectangle(4, 5)
console.log(rectangle.getArea());
