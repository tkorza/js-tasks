// 8. Создайте класс StringManipulator, который будет иметь три метода:
// • reverseString(str) — разворачивает строку,
// • isPalindrome(str) — проверяет, является ли строка палиндромом,
// • countVowels(str) — подсчитывает количество гласных букв в строке.
// Входные:
// let manipulator = new StringManipulator();
// manipulator.reverseString('hello');
// → Результат: 'olleh
// Входные:
// let manipulator = new StringManipulator();
// manipulator.isPalindrome('madam');
// → Результат: true
interface iStringManipulator {
    reverseString(str: string): void
    isPalindrome(str: string): void
    countVowels(str: string): void
}
class StringManipulator {
    reverseString(str: string): void {
        console.log(str.split('').reverse().join(''));
    }
    isPalindrome(str: string): void {
        console.log(str.split('').reverse().join('') === str ? true : false);
    }
    countVowels(str: string): void {
        let count: number = 0
        const vowels: string[] = ['A', 'E', 'I', 'O', 'U', 'Y']
        str.split('').forEach((el: String) => {
            if (vowels.includes(el.toUpperCase())) count++
        })
        console.log(count);
    }
}

let manipulator: iStringManipulator = new StringManipulator();
manipulator.reverseString('hello');
manipulator.isPalindrome('madam'); 
manipulator.countVowels('maeeedam'); // 5
