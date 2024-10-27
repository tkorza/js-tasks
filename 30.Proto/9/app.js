// 9. Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает новый объект, где значения – исключительно числа
// первоначального объекта. IIFE

const obj = { 1: '2', 2: '3', 3: '4' }
const arrObjValue = Object.values(obj)
const lengthObj = Math.round(Math.random() * 10)

const newObj = {}

for (let i = 0; i < lengthObj; i++) {
    let randomValue = Math.round(Math.random() * (Object.keys(obj).length-1))

    newObj[i] = arrObjValue[randomValue]
}

console.log(newObj);








