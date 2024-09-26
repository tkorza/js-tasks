// 9. Необходимо реализовать конкатенацию строк при каждом последующем вызове функции с
// использованием замыкания

function func() {
    let result = ''
    return function (substr) {
        result += substr
        console.log(result);
    }
}

const a = func()
a('1')
a('2')
a('3')
a('4')






