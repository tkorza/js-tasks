// 2. На входе массив значений. Необходимо его обработать. Если в массиве есть хотя бы 1
// строка, бросить исключение.

let arr = [1, 2, 3, 4, 5]

function checkStr(arrTest) {
    try {
        let result = arrTest.some((el) => { if (typeof (el) === 'string') return true })
        if(result) throw Error('В массиве есть строка!')
        return 'В массиве отсутствуют строки'
    }
    catch(error) {
        return error
    }
}

console.log(checkStr(arr));



