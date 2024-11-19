// Создайте базовый класс Shape с методом getArea(), который возвращает площадь фигуры. 
// Реализуйте подклассы Rectangle, Circle и Triangle, которые наследуют от Shape и реализуют метод getArea() для расчета площади по формулам:
// 	•	Прямоугольник: area = width * height
// 	•	Круг: area = π * radius^2
// 	•	Треугольник: area = (base * height) / 2

class Shape {
    getArea() { }
}

class Rectangle extends Shape {
    width = 10
    height = 5
    getArea() {
        super.getArea()
        return this.width * this.height
    }
}

class Circle extends Shape {
    radius = 20
    getArea() {
        super.getArea()
        return 3.14 * this.radius ** 2
    }
}

class Triangle extends Shape {
    base = 24
    height = 10
    getArea() {
        super.getArea()
        return (this.base * this.height)/2
    }
}
const rectangle = new Rectangle()
console.log(rectangle.getArea());

const circle = new Circle()
console.log(circle.getArea());

const triangle = new Triangle()
console.log(triangle.getArea());

