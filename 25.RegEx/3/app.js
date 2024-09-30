// 3. На вход подается строка из 2 и более слов. Необходимо все символы пробела
// заменить на пустую строку. 

const changeStr = (str) => str.replaceAll(/ /gm,(''))

console.log(changeStr('tim a k o r z a'));
