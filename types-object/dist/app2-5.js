// 5. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести товар с максимальным прайсом
let arr_obj_5 = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];
function ShowMaxPrice() {
    let indexMax;
    let sumMax = 0;
    arr_obj_5.forEach((el, i) => {
        if (el.count * el.price > sumMax) {
            sumMax = el.count * el.price;
            indexMax = i;
        }
    });
    return arr_obj_5[indexMax];
}
console.log(ShowMaxPrice());
