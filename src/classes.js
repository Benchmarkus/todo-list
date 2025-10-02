import { v4 as uuidv4 } from 'uuid';

class Project {
    constructor(name) {
        this.name = name;
        this.todoArr = [];

        this.id = uuidv4();
    }

    addToDo(todo) {
        this.todoArr.push(todo);
    }

    removeToDo(id) {
        for (let [i, todo] of this.todoArr.entries()) {
            if (todo.id == id) {
                return this.todoArr.splice(i, 1);
            }
        }
    }
}

class ToDo {
    constructor(title, desc, dueDate, priority) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;

        this.id = uuidv4();
    }
}

export { Project, ToDo }