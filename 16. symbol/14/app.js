// 14. На вход подается строка в формате пути, например '/home/user/dir/file.txt'. Необходимо извлечь и
// вернуть имя файла, то есть подстроку после последнего символа /.
// Входные: '/home/user/dir/file.txt' → Результат: 'file.txt'
// Входные: '/docs/report.pdf' → Результат: 'report.pdf'
// Входные: '/images/photo.png' → Результат: 'photo.png’

let a = '/home/user/dir/file.txt'
console.log(a.slice(a.lastIndexOf('/') + 1))