// 1. Создайте класс Rectangle, который будет иметь свойства width и height. Напишите метод getArea(),
//         который возвращает площадь прямоугольника.
//         Входные: Rectangle(5, 10) → Результат: 50
//         Входные: Rectangle(3, 7) → Результат: 21
//         Входные: Rectangle(6, 9) → Результат: 54

// class Rectangle {
//     constructor(Width, Height) {
//         this.width = Width
//         this.height = Height
//     }
//     width
//     height
//     getArea = () => {
//         return this.width * this.height
//     }
// }

// const rectangle = new Rectangle(2, 4)
// console.log(rectangle.getArea())

// class Rectangle {
//     getArea = (width, height) => {
//         return width * height
//     }
// }

// const rectangle = new Rectangle()
// console.log(rectangle.getArea(2, 4))


class Rectangle {
    width = 2
    height = 4
    getArea = () => {
        return this.width * this.height
    }
}

const rectangle = new Rectangle()
console.log(rectangle.getArea())

