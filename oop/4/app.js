// вывести элементы массива строк в объекте. прекратить вывод на элементе, длина которого меньше 3

class test {
    strArr = ['яблоко', 'апельсин', 'груша', 'ракета', 'ты', 'вышка']

    showElement() {
        for (let i = 0; i < this.strArr.length; i++) {
            if (this.strArr[i].length < 3) break
            else console.log(this.strArr[i]);
        }
    }

}

const test1 = new test()

test1.showElement()
