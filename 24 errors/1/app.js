// 1. На входе значение. Необходимо его обработать. Если это число и оно не является четным,
// бросить исключение

let n = prompt('Введите число')

function chekEven(n) {
    try {
        if (!isNaN(n) && n % 2 != 0) throw Error('Нечетное!')
        return 'не нечетное!'
    }
    catch(error) {  
        return error      
    }
}

console.log(chekEven(n));
