// 7. На входе статичный объект и строка str. Написать функцию на поиск в объекте
// значения str используя Object.values ()

const objAbout = { яблоко: 'красное', банан: 'желтый', апельсин: 'оранжевый' }

const foundStr = (obj, str) => {
    const arrValueObj = Object.values(obj)
    let result
    arrValueObj.forEach(el => {
        el == str ? result = true : result = false
    })
    return result
}

console.log(foundStr(objAbout, 'красне'));
