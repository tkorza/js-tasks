// 9. Напишите код, который сделает из массива объект
// [ {name: 'width', value: 10}, {name: 'height', value: 20} ] -> {width: 10, height: 20}
interface value {
    name: string
    value: number
}
let startArray: value[] = [{ name: 'width', value: 10 }, { name: 'height', value: 20 }]

interface Parametrs {
    width: number;
    height: number;
}

let parametrs: Parametrs = {
    width: null,
    height: null
}

startArray.forEach((el:value)=>{
    
})
