import { Application } from "./index.js";
import { Project, ToDo } from "./classes.js";

class mainStorage {
    saveAll() {
        const arr = Application.arr;
        const projects = arr.map(project => {
            return {
                id: project.id,
                name: project.name,
                todoList: project.todoArr.map(todo => ({
                    title: todo.title,
                    desc: todo.desc,
                    due: todo.dueDate,
                    priority: todo.priority,
                    isDone: todo.isDone,
                    parentId: todo.parentId,
                    id: todo.id
                }))
            }
        });

        localStorage.setItem("Projects", JSON.stringify(projects));
    }

    loadAll() {
        const data = localStorage.getItem("Projects");

        if (!data) return []; // nothing saved yet
        const jsondata = JSON.parse(data);

        // clear arr
        Application.arr.length = 0;

        // populate Application.arr
        for (const project of jsondata) {
            let newProj = new Project(project.name, project.id);
            Application.addProject(newProj);

            for (const todo of project.todoList) {
                let newToDo = new ToDo(
                    todo.title, 
                    todo.desc, 
                    todo.due, 
                    todo.priority, 
                    todo.parentId, 
                    todo.id)

                newProj.addToDo(newToDo)
            }
        }
    }
}

export { mainStorage }