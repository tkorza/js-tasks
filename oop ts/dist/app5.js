class Rectangle {
    width;
    height;
    constructor(w, h) {
        this.height = h;
        this.width = w;
    }
    getArea() {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle(4, 5);
console.log(rectangle.getArea());
