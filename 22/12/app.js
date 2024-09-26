// 12. Напишите функцию, которая принимает два параметра: предложение из нескольких слов и
// букву. Функция должна подсчитывать количество вхождений указанной буквы в строке.
// Добавить проверки

const func = (str, a) => {
    let testStr = str.split('')
    let result = 0

    for (let i = 0; i < testStr.length; i++) {
        if (testStr[i] == a) result++
    }
    return result
}


console.log(func("напишите функцию",'н'));


