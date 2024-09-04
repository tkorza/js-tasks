// 6. На входе объект. Необходимо удвоить все значения, которые являются числами.
// Входные: {"x": 5, "y": 10, "z": "abc"} → Результат: {"x": 10, "y": 20, "z": "abc"}

const obj = { "x": 5, "y": 10, "z": "abc" }

for (let key in obj) {
    if (!isNaN(obj[key])) {
        obj[key] *= 2
    }
}

for (let key in obj) {
    console.log(key + ' ' + obj[key])
}
