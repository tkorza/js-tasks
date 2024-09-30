// 14. *Реализуйте функцию, которая принимает массив последовательных (возрастающих) букв и
// возвращает отсутствующую в массиве. Добавить проверки на элементы массива
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P "
function findLetter(testArr) {

    try {
        let check = testArr.every((el) => typeof (el) === 'string')
        if (!check) throw Error('В массиве не только буквы!')

        let alphabetArr = 'abcdefghijklmnopqrstuvwxyz'
        let i = alphabetArr.indexOf(testArr[0].toLowerCase())
        let skipped = false
        for (let j = 0; j < testArr.length; j++) {
            if (testArr[j].toLocaleLowerCase() !== alphabetArr[i]) {
                skipped = true
                break
            }
            else i++
        }
        if (skipped) return alphabetArr[i]
        else return 'Ничего не пропустили!'
    }


    catch (error) {
        return error
    }
}

console.log(findLetter(["O","Q","R","S"]));
