// 5. На вход подается строка в виде url. Необходимо написать регулярное выражение
// для данной строки. Если же строка подходит под регулярное выражение, то
// вывести булевое true, в противном случае бросить исключение и обработать

function check(str) {
    try {
        if (/^https:\/\/[\w]+\.[\w]+\//gm.test(str)) return true
        else throw Error('Не подходит!')
    }

    catch (error) {
        return error
    }
}

console.log(check('https://regex101.com/'));
console.log(check('https://regex101!com/'));
