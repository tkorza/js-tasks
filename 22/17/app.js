// Реализуйте функцию, которая принимает коэффициент и возвращает другую функцию,
// которая умножает переданное ей число на этот коэффициент.

// // Пример использования:
// const multBy3 = multiplier(3);
// console.log(multBy3(5));  // 15
// console.log(multBy3(10));  // 30

 function multiplier (k) {
    let kT = k
    return function(a){
        console.log(kT*a);
        
    }
}
const multBy3 = multiplier(3)
multBy3(5)  
multBy3(10)