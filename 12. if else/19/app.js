/**
 * . Даны три числа a, b, c. Напишите программу, которая находит корни квадратного
уравнения
ax
2 + bx + c = 0
 Если уравнение имеет два корня, то следует вывести их в порядке возрастания.
 */
let a = prompt()
let b = prompt()
let c = prompt()

let D = (b ** 2) - (4 * a * c);
console.log(D);
if (D < 0) {
    console.log('нет корней');
}
else if (D === 0) {
    console.log(-b / (2 * a));
}
else {
    console.log('корень 1');
    console.log((-(D ** 0.5) - b) / (2 * a));

    console.log('корень 2');
    console.log((-b + D ** 0.5) / (2 * a));

}

