// На входе число от 1 до 4, указывающее время суток: 1 — утро, 2 — день, 3 — вечер, 4 — ночь.
// Выведите соответствующее название времени суток. Решение через: switch ... case.
// Входные: 1 → Результат: "Утро"
// Входные: 3 → Результат: "Вечер"

let a = +prompt()


switch (a) {
    case 1:
        console.log("Утро")
        break;
    case 2:
        console.log("День")
        break;

    case 3:
        console.log("Вечер")
        break;
    case 4:
        console.log("Ночь")
        break;

}