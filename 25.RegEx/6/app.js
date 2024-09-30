// 6. На вход подается строка вида: путь к файлу. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать
// C:\Users\Admin\Desktop\test.txt -> true
// C:/Users/Admin/Desktop/test.txt -> true

function check(str){
    try {
        if(/^[\w]\:\\[\w]+\\[\w]+\\[\w]+\\[\w]+\.[\w]+/gm.test(str)) return true
        else throw Error('Не подходит!')    
    }
     catch (error) {
        return error
    }
}
console.log(check(`C:\\Users\\Admin\\Desktop\\test.txt`));
console.log(check(`C:\\Users\\Admin\\Desktop\\test!txt`));
