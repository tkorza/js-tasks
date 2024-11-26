class Product {
    product = [
        { tittle: 'apple', price: 12 },
        { tittle: 'pineapple', price: 25 },
        { tittle: 'strawberry', price: 26 },
        { tittle: 'lemon', price: 16 },
        { tittle: 'blueberry', price: 19 },
        { tittle: 'carrot', price: 21 },
    ];
    displayProductInfo() {
        let resultArr = [];
        this.product.forEach((el) => {
            if (el.price > 20)
                resultArr.push(el);
        });
        return resultArr;
    }
}
const product = new Product();
console.log(product.displayProductInfo());
