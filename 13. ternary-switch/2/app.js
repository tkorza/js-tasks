// Пользователь вводит число от 1 до 7, указывающее день недели. Выведите название
// соответствующего дня недели. (Решить задачу через: if … else, switch … case)
// Входные: 1 → Результат: Понедельник
// Входные: 5 → Результат: Пятница


let dayOfWeek = prompt()

switch (dayOfWeek) {
    case '1':
        console.log('понедельник');
        break;
    case '2':
        console.log('вторник');
        break;
    case '3':
        console.log('среда');
        break;
    case '4':
        console.log('четверг');
        break;
    case '5':
        console.log('пятница');
        break;
    case '6':
        console.log('суббота');
        break;
    case '7':
        console.log('воскресенье');
        break;

    default:
        console.log('некорректный ввод')
}

if (dayOfWeek == 1) {
    console.log('понедельник');
} else if (dayOfWeek == 2) {
    console.log('вторник');
} else if (dayOfWeek == 3) {
    console.log('среда');
} else if (dayOfWeek == 4) {
    console.log('четверг');
} else if (dayOfWeek == 5) {
    console.log('пятница');
} else if (dayOfWeek == 6) {
    console.log('суббота');
} else if (dayOfWeek == 7) {
    console.log('воскресенье');
} else {
    console.log('некорректный ввод')
}





