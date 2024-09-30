// 12. На вход подается строка в виде электронной почты пользователя. Необходимо найти в
// данной почте “@”. Если же есть, то вывести булевое true, в противном случае бросить
// исключение и его обработать

let n = prompt('Введите строку')
function check(n) {
    try {
        if(n.includes('@')) return true
        else throw Error('@ отсутствует!')
    }

    catch (error) {
        return error
    }
}

console.log(check(n));
