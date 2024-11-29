class StringManipulator {
    reverseString(str) {
        console.log(str.split('').reverse().join(''));
    }
    isPalindrome(str) {
        console.log(str.split('').reverse().join('') === str ? true : false);
    }
    countVowels(str) {
        let count = 0;
        const vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
        str.split('').forEach((el) => {
            if (vowels.includes(el.toUpperCase()))
                count++;
        });
        console.log(count);
    }
}
let manipulator = new StringManipulator();
manipulator.reverseString('hello');
manipulator.isPalindrome('madam');
manipulator.countVowels('maeeedam'); // 5
