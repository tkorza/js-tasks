// 6. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести средний прайс среди всех продуктов

interface Products {
    id: number,
    title: string,
    count: number,
    price: number
}

let arr_obj_6: Products[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
]

function showMediumPrice(): number {
    let resultPrice: number = 0
    arr_obj_6.forEach((element: Products) => {
        resultPrice += element.price * element.count
    });
    resultPrice = resultPrice / arr_obj_6.length
    return resultPrice
}

console.log(showMediumPrice());
