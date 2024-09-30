// 4. На вход подается строка в виде электронной почты пользователя. Необходимо
// написать регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать


let str = 'timkorza@mai.ru'

function check(str) {
    try {
        if(/^[A-Za-z]+@[a-z]+\.[a-z]+/gm.test(str)) return true
        else return Error('Не подходит под условие!')
    }

    catch (error) {
        return error
    }
}

console.log(check('timkorza@mai.ru'));
console.log(check('tfggs#mail.ru'));

