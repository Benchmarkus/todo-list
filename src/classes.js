import { v4 as uuidv4 } from 'uuid';

class App {
    constructor() {
        this.arr = [];
    };

    getProject(projectId) {
        for (let project of this.arr) {
            if (project.id == projectId) {
                return project;
            };
        }
    }

    getToDo(toDoId) {
        for (let project of this.arr) {
            for (let todo of project.todoArr) {
                if (todo.id == toDoId) {
                    return todo;
                }
            }
        }
    }

    editProject(projectId, newProjectObject) {
        for (let project of this.arr) {
            if (project.id == projectId) {
                project.name = newProjectObject.name
                return
            };
        }
    }

    // fix this
    editToDo(parentId, toDoId, newToDoObject) {
        for (let project of this.arr) {
            if (project.id == parentId) {
                for (const todo of project.todoArr) {
                    if (todo.id == toDoId) {
                        todo.title = newToDoObject.title
                        todo.desc = newToDoObject.desc
                        todo.dueDate = newToDoObject.dueDate
                        todo.priority = newToDoObject.priority
                        return
                    }
                }
            }
        }
    }

    addProject(project) {
        this.arr.push(project);
    }

    addToDo(projectId, toDoObject) {
        for (let project of this.arr) {
            if (project.id == projectId) {
                project.addToDo(toDoObject);
                return;
            };
        }
    }

    removeProject(id) {
        for (let [i, project] of this.arr.entries()) {
            if (project.id == id) {
                return this.arr.splice(i, 1);
            }
        }
    }

    removeToDo(toDoIdToRemove) {
        for (let project of this.arr) {
            project.removeToDo(toDoIdToRemove);
        }
    }

}

class Project {
    constructor(name, id=undefined) {
        this.name = name;
        this.todoArr = [];

        if (id) {
            this.id = id;
        } else {
            this.id = uuidv4();
        }
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
    constructor(title, desc, dueDate, priority, parentId = undefined, id = undefined) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;

        this.parentId = parentId
        this.isDone = false;

        if (id) {
            this.id = id;
        } else {
            this.id = uuidv4();
        }
    }

    toggleDone() {
        this.isDone = !this.isDone;
        return this.isDone;
    }
}

export { App, Project, ToDo }