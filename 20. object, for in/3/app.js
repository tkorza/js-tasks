// 1. На входе пустой объект. Выполните следующие шаги:
// • Добавьте свойство id со значением 1.
// • Добавьте свойство name со значением "udemy".
// • Измените значение свойства name на "hschool".
// • Удалите свойство name из объекта.

const obj = {}

obj.id = 1
obj.name = 'udemy'
console.log(obj.name)
obj.name = 'hschool'
console.log(obj.name)
delete obj.name