// 1. Создайте объект, представляющий информацию о товарах в интернет-магазине
// (например, { product1: 10, product2: 5, product3: 8 }). Используйте Object.values() для
// подсчета общего количества различных товаров.

const obj = { product1: 10, product2: 5, product3: 8 }

const arrValue = Object.values(obj)

const result = arrValue.reduce((el, sum) => sum += el)
console.log(result);



