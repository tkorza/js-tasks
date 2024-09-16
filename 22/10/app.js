// 10. Напишите IIFE, которая принимает массив и возвращает новый массив, содержащий только
// уникальные элементы.
//  [1, 1, 2, 2, 2, 3, 4, 5, 5, 5] –> [1, 2, 3, 4, 5].

let arr = [1, 1, 2, 2, 2, 3, 4, 5, 5, 5];

(function (arr) {
    let newArr = []
    for(let elem of arr){
        if(!newArr.includes(elem)){
            newArr.push(elem)
        }
    }
    console.log(newArr);
}(arr))
