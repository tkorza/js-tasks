// 2. У вас есть объект, представляющий собой список студентов и их оценок
// (например, { Анна: 95, Иван: 88, Мария: 92 }). Используйте Object.values() и filter() для
// фильтрации студентов, у которых оценки выше определенного порога

const studentMark = { Анна: 95, Иван: 88, Мария: 92 }


const filterStudent = () => {
    const arrStudent = Object.entries(studentMark)
    const testValue = +prompt('Введите порог')
    const res = []

    arrStudent.forEach(el => {
        if (el[1] == testValue || el[1] > testValue) res.push(el[0])
    })
    return res
}
console.log(filterStudent());



