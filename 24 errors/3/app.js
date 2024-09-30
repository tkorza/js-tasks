// 3. Дан массив. Вывести те элементы массива, id которых – четное значение. Добавить
// проверки
// [
// { "id": 1, "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
//  { "id": 2, "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
//  { "id": 3, "label": "SQL", "category": "programmingLanguages", "priority": 2 },
//  { "id": 4, "label": "Java", "category": "programmingLanguages", "priority": 3 },
//  { "id": 5, "label": "GO", "category": "programmingLanguages", "priority": 3 }
// ]

let arr = [
    { "id": 1, "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
    { "id": 2, "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
    { "id": 3, "label": "SQL", "category": "programmingLanguages", "priority": 2 },
    { "id": 4, "label": "Java", "category": "programmingLanguages", "priority": 3 },
    { "id": 5, "label": "GO", "category": "programmingLanguages", "priority": 3 }
]

function checkEven(arrTest) {
    try {
        arrTest.forEach(function (el) {
            if (isNaN(el.id)) throw new Error('Id не число')
        })

        const result = arr.filter(function (el) {
            if (el.id % 2 == 0) return true
            else return false
        })
        return result


    }
    catch (error) {
        return error
    }
}

console.log(checkEven(arr));

