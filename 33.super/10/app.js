// 10. Создайте родительский класс NumberProcessor, который будет содержать массив чисел [1, -1, -4, 3, 3,
//     5, 4, 4, 2, 2, 2] и метод processNumbers(), который оставляет в массиве только положительные числа.
//     Затем создайте дочерний класс UniqueNumberProcessor, который переопределяет метод
//     processNumbers() и удаляет дубликаты из массива.
//     Входные: new NumberProcessor().processNumbers() → Результат: [1, 2, 3, 4, 5]

class NumberProcessor {
    arr = [1, -1, -4, 3, 3, 5, 4, 4, 2, 2, 2]
    processNumbers() {
        const result = this.arr.filter(el => el > 0)
        return result
    }
}

class UniqueNumberProcessor extends NumberProcessor {
    processNumbers() {
        const arr = super.processNumbers()
        const result = []
        arr.forEach(el => {
            if (!result.includes(el)) result.push(el)
        })
        return result.sort()
    }
}

const uniqueNumberProcessor = new UniqueNumberProcessor()
console.log(uniqueNumberProcessor.processNumbers());
