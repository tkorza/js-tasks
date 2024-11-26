// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести итоговую стоимость на складе.
// Итоговая стоимость = количество * цена + ...
interface Products {
    id: number,
    title: string,
    count: number,
    price: number
}

let arr_obj_4: Products[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
]

function _showObj_(): number {
    let totalSum: number = 0
    arr_obj_4.forEach((el: Products) => {
        totalSum += el.count * el.price
    })
    return totalSum
}

console.log(_showObj_())