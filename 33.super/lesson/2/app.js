// Создайте класс Point с координатами x, y, z. Добавьте метод distanceTo(otherPoint), который вычисляет расстояние до другой точки по формуле:

class Point {
    x
    y
    z

    constructor(X, Y, Z) {
        this.x = X
        this.y = Y
        this.z = Z
    }
    distanceTo() {
        return (this.x ** 2 + this.y ** 2 + this.z ** 2) ** 0.5
    }
}
const point = new Point(2, 8, 1)
console.log(point.distanceTo());
