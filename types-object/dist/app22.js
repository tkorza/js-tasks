// 22. Создайте массив объектов, представляющих сотрудников, с полями "имя" и
// "зарплата". Найдите среднюю зарплату всех сотрудников.
const arrEmployes = [
    { name: 'alesha', salary: 10 },
    { name: 'lena', salary: 20 },
    { name: 'vasya', salary: 30 },
    { name: 'anton', salary: 40 }
];
let sumSalary = 0;
for (let i = 0; i < arrEmployes.length; i++) {
    sumSalary += arrEmployes[i].salary;
}
console.log(sumSalary / arrEmployes.length);
