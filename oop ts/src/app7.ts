// 7. Создайте класс TodoList, который содержит свойство tasks (список задач) и методы
// addTask() (добавление задачи), removeTask() (удаление задачи) и getTasks()
// (получение списка задач). Создайте экземпляр класса TodoList и выполните
// несколько операций.
class TodoList {
    tasks: string[] = ['g', 'h', 'o', 's']

    addTask(): string[] {
        this.tasks.push(prompt('введите задачу'))
        return this.tasks
    }
    removeTask(): string[] {
        this.tasks.pop()
        return this.tasks
    }

    getTasks(): string[] {
        return this.tasks
    }
}

interface list {
    tasks: string[]
    addTask(): string[],
    removeTask(): string[],
    getTasks(): string[]
}
let todoList: list = new TodoList()
console.log(todoList.getTasks());
console.log(todoList.addTask());
console.log(todoList.removeTask());


