// 1. На вход подается строка в виде числа. Необходимо написать регулярное
// выражение. Если строка состоит только из чисел, то вывести булевое true, в
// противном случае бросить исключение и обработать

function check(str){
    try {
        if(/^[0-9]+$/gm.test(str)) return true
        else throw Error('Присутствуют не числа!')    
    }
     catch (error) {
        return error
    }
}

console.log(check('12312'));
console.log(check('2d23s'));
