// 20.Создайте массив объектов, представляющих книги, и найдите книгу с самым
// большим количеством страниц (count – одно из полей объекта)
const arr_of_obj = [
    { id: 1, author: 'Грибоедов', name: 'Горе от ума', price: 45, count: 455 },
    { id: 2, author: 'Ремарк', name: 'Три товарища', price: 55, count: 400 },
    { id: 3, author: 'Булгаков', name: 'Мастер и маргарита', price: 30, count: 234 },
    { id: 4, author: 'Драйзер', name: 'Титан', price: 90, count: 456 }
];
let maxCount = 0;
let indexMaxCount = 0;
for (let i = 0; i < arr_of_obj.length; i++) {
    if (arr_of_obj[i].count > maxCount) {
        indexMaxCount = i;
        maxCount = arr_of_obj[i].count;
    }
}
console.log(arr_of_obj[indexMaxCount].name);
