// 10. Создайте класс Product, который содержит объект product (продукт) с полями и
// price (цена продукта), title (название продукта). Реализуйте метод
// displayProductInfo(), который выводит массив продуктов, где цена > 20. Создайте
// экземпляр класса Product и вызовите метод displayProductInfo().
interface _product {
    tittle: string,
    price: number
}
interface product_ {
    product: _product[]
    displayProductInfo(): _product[]
}
class Product {
    product: _product[] = [
        { tittle: 'apple', price: 12 },
        { tittle: 'pineapple', price: 25 },
        { tittle: 'strawberry', price: 26 },
        { tittle: 'lemon', price: 16 },
        { tittle: 'blueberry', price: 19 },
        { tittle: 'carrot', price: 21 },
    ]

    displayProductInfo(): _product[] {
        let resultArr: _product[] = []
        this.product.forEach((el: _product) => {
            if (el.price > 20) resultArr.push(el)
        })
        return resultArr
    }
}

const product: product_ = new Product()
console.log(product.displayProductInfo());
