// 5. Напиши регулярное выражение, чтобы проверить, является ли строка номером телефона в формате +375 (XX) XXX-XX-XX, где X - цифра от 0 до 9.
const numberPhone = '+375 (33) 332-1d-10'
if (/\+375 \(\d+\) \d+\-\d+-\d+/gm.test(numberPhone)) console.log(true);
else console.log(false);

