// 10. Реализовать функцию f: при вызове f(2, 3) -> вернет 5, при вызове f(2)(3), тоже
// вернет 5. Использовать каррирование

function f(a: number) {
    return (b: number) => {
        return a + b;
    }
}

console.log(f(2)(3));
