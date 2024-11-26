// 3. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести только те товары из положения, количество которых внутри массива
// кратно 3

interface Products {
    id: number,
    title: string,
    count: number,
    price: number
}

let arr_obj_3: Products[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
]

function showObj_(): void {
    arr_obj_3.forEach((el: Products) => {
        if (el.count % 3 === 0) console.log(el);
    })
}

showObj_()