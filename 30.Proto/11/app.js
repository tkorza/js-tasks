// 11. Реализуйте функцию, которая будет считать количество своих вызовов

let current = 0

const func = () => {
    current++
    console.log(`Функция вызвана ${current} раз`);
}

func()
func()
func()
func()