// 5. Создайте абстрактный класс Fruit (Фрукт) со следующим полем:
// • fruits: массив объектов, где каждый объект имеет свойства id, title
// (название) и price (цена)
// Затем создайте дочерний класс Apple (Яблоко), который наследует
// Fruit. В классе Apple реализуйте метод getAppleInfo(), который должен
// возвращать информацию о яблоке из массива fruits, где title равно
// "яблоко".
// Входные: [ {"id": 1, "title": "яблоко", "price": 50}, {"id": 2, "title": "банан", "price": 30}, {"id": 3, "title": "груша", "price":
//     45} ]
//     → Результат: {"id": 1, "title": "яблоко", "price": 50}
//     Входные: [ {"id": 1, "title": "банан", "price": 35}, {"id": 2, "title": "киви", "price": 70}} ] → Результат: null

interface Fruits {
    id: number
    title: string
    price: number
}

abstract class Fruit {
    abstract fruits: Fruits[]
    abstract getAppleInfo(nameFruit: string): {}[]
}

class Apple extends Fruit {
    fruits: Fruits[] = [{ "id": 1, "title": "яблоко", "price": 50 }, { "id": 2, "title": "банан", "price": 30 }, {
        "id": 3, "title": "груша", "price": 45
    }]
    getAppleInfo(nameFruit: string) {
        let resultArr = this.fruits.filter((el) => el.title = nameFruit)
        return resultArr
    }
}
const fruit: Fruit = new Apple()

console.log(fruit.getAppleInfo('яблоко'));

