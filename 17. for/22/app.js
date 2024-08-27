// 22. Дан массив с названиями дней недели ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
//     "Saturday", "Sunday"]. Вам нужно с помощью цикла for пройти по каждому элементу массива и с
//     помощью конструкции switch определить, будний это день или выходной, а затем вывести
//     соответствующую информацию на экран.

let arrDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

for (let i = 0; i < arrDay.length; i++) {
    switch (arrDay[i]) {
        case "Monday":
            console.log(arrDay[i] + ' - weekday')
            break;
        case "Tuesday":
            console.log(arrDay[i] + ' - weekday')
            break;
        case "Wednesday":
            console.log(arrDay[i] + ' - weekday')
            break;
        case "Thursday":
            console.log(arrDay[i] + ' - weekday')
            break;
        case "Friday":
            console.log(arrDay[i] + ' - weekday')
            break;
        case "Saturday":
            console.log(arrDay[i] + ' - weekend')
            break;
        case "Sunday":
            console.log(arrDay[i] + ' - weekend')
            break;

        default:
            console.log('Error')
            break;

    }
}