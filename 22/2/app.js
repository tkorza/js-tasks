// 2. Создайте объект textAnalyzer с полем text – строка и методом getTextLength, который
// возвращает длину текста, хранящегося в поле text. В задаче использовать контекст

const textAnalyzer ={
    text: 'hschool',
    getTextLength: function(){
        return this.text.length
    }
}

console.log(textAnalyzer.getTextLength());
