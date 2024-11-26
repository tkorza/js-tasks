// 7. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести тот товар, где количество * прайс является наибольшим значением
let arr_obj_7 = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];
function maxTotalPrice() {
    let maxСount = 0;
    let indexMaxCount;
    arr_obj_7.forEach((el, i) => {
        if (el.count > maxСount) {
            maxСount = el.count;
            indexMaxCount = i;
        }
    });
    arr_obj_7[indexMaxCount].title = arr_obj_7[indexMaxCount].title.split('').join('_');
    return arr_obj_7;
}
console.log(maxTotalPrice());
