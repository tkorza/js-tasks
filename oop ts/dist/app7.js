// 7. Создайте класс TodoList, который содержит свойство tasks (список задач) и методы
// addTask() (добавление задачи), removeTask() (удаление задачи) и getTasks()
// (получение списка задач). Создайте экземпляр класса TodoList и выполните
// несколько операций.
class TodoList {
    tasks = ['g', 'h', 'o', 's'];
    addTask() {
        this.tasks.push(prompt('введите задачу'));
        return this.tasks;
    }
    removeTask() {
        this.tasks.pop();
        return this.tasks;
    }
    getTasks() {
        return this.tasks;
    }
}
let todoList = new TodoList();
console.log(todoList.getTasks());
console.log(todoList.addTask());
console.log(todoList.removeTask());
