// 23. Дан массив объектов с полями "название", "цена" и "количество". Найдите
// суммарную стоимостью всех товаров учитывая количество каждого.
// Итог = цена_1_товара * кол-во_1_товара + цена_2_товара * кол-во_2_товар
let resultPrice = 0;
const arrProduct = [
    { name: 'mobile', price: 1500, value: 2 },
    { name: 'pen', price: 30, value: 3 },
    { name: 'monitor', price: 100, value: 1 }
];
for (let i = 0; i < arrProduct.length; i++) {
    resultPrice += arrProduct[i].price * arrProduct[i].value;
}
console.log(resultPrice); //3190
