// 9. Создайте функцию, которая принимает два объекта. Используйте hasOwnProperty,
// чтобы объединить только те свойства, которыe существуют в обоих объектах.

const objAbout = { яблоко: 'красное', банан: 'желтый', апельсин: 'оранжевый' }
const objAbout2 = { яблоко: 'красное', апельсин: 'оранжевый' }
const resultObj = {}

const r = (obj1, obj2) => {
    const arrValue1 = Object.entries(obj1)
    const arrValue2 = Object.entries(obj2)

    for(let i = )

    // arrValue1.forEach(el => {
    //     if(arrValue2.hasOwnProperty(el)) resultObj.push(el)
    // })
}

console.log(resultObj);

