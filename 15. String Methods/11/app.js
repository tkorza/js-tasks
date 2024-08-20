// 11. Вырежьте из строки "aaa bbb ccc" слово "bbb".
// Входные: "aaa bbb ccc" → Результат: "aaa ccc"
// Входные: "bbb ccc aaa" → Результат: "ccc aaa"
// Входные: "ccc bbb aaa" → Результат: "ccc aaa“

let a = 'aaa bbb ccc'
console.log(a.slice(0, a.indexOf('bbb')) + a.slice(a.indexOf('bbb')+3)  )

// console.log(a.indexOf('bbb') + 2)
