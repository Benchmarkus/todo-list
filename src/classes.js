import { v4 as uuidv4 } from 'uuid';

class App {
    constructor() {
        this.arr = [];
    };

    addProject(project) {
        this.arr.push(project);
    }

    removeProject(id) {
        for (let [i, project] of this.arr.entries()) {
            if (project.id == id) {
                return this.arr.splice(i, 1);
            }
        }
    }
}

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

        this.isDone = false;
        this.id = uuidv4();
    }

    toggleDone() {
        if (this.isDone === true) {
            this.isDone = false;
        } else {
            this.isDone = true;
        }
    }
}

export { App, Project, ToDo }