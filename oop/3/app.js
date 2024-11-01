// 3. найти произведение всех элементов массива.  (рекурсия)



class obj {
    arr = [1, 2, 3, 4, 5]
    pr(arr, res = 1, index = 0) {
        if (this.arr[index]) return this.pr(arr, res *= this.arr[index], index++)
        else return res
    }
}

const obj1 = new obj()

console.log(obj1.pr());

