// 8. На входе объект. Необходимо посчитать количество пар (ключ: значение) в объекте.
// Входные: {"a": 1, "b": 2, "c": 3} → Результат: 3

const obj = {"a": 1, "b": 2, "c": 3}
let arr = []

for(let key in obj){
    arr.push(obj[key])
}

console.log(arr.length)

