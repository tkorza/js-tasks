// 2. найти произведение всех элементов массива.  (без рекурсии)

class obj {
    arr = [1, 2, 3, 4, 5]

    prArr() {
        let res = 1

        this.arr.forEach(el => res *= el)

        return res
    }
}

const obj1 = new obj()
console.log(obj1.prArr());


