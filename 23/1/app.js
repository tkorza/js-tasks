// 1. Отобразите в строке через пробел числа от n до 10 по возрастанию используя рекурсию
// Входные: 0 → Результат: 0 1 2 3 4 5 6 7 8 9 10
// Входные: 2 → Результат: 2 3 4 5 6 7 8 9 10
// Входные: 5 → Результат: 5 6 7 8 9 10

function rec(n){
if(n>10) return 
console.log(n);

n++
return rec(n)
}

rec(1)