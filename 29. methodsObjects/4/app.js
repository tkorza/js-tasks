// 4. Создайте функцию, которая принимает объект и строку (имя свойства) и
// возвращает true, если такое свойство существует в объекте, и false, если нет,
// используя Object.keys().


const obj = { яблоко: 'красное', банан: 'желтый', апельсин: 'оранжевый' }

const find = (str) => {
    const arrKeys = Object.keys(obj)
    const res = obj.hasOwnProperty(str)
    return res
}

console.log(find('яблоо'));

