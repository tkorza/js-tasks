// 1. Создайте класс Product, который будет иметь свойства name, price и quantity. Напишите метод
// getTotalCost(products), который принимает список продуктов и возвращает общую стоимость всех
// товаров в каталоге.
// Входные: Product("Apple", 2, 5) → Результат: 10
// Входные: Product("Orange", 3, 4)→ Результат: 12


// class Product {
//     name
//     price
//     quantity
//     constructor(name, price, quantity) {
//         this.name = name
//         this.price = price
//         this.quantity = quantity
//     }
//     getTotalCost() {
//         return `${this.name}: ${this.quantity * this.price}`
//     }
// }

// const product = new Product('яблоко', 2, 5)
// console.log(product.getTotalCost())

class Product {
    getTotalCost(name, price, quantity) {
        return `${name}: ${quantity * price}`
    }
}

const product = new Product()
console.log(product.getTotalCost('яблоко', 2, 5))