// 16. Выведите числа от 0 до 100 с помощью цикла for. Если число кратно 7, пропустите его и перейдите
// к следующей итерации.

for (let i = 0; i <= 100; i++) {
    if (i % 7 == 0) {
        continue;
    } else {
        console.log(i)
    }
}