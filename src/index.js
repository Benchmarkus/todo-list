import "./reset.css";
import "./styles.css";
import { App, Project, ToDo } from "./classes.js";
import { domBuilder } from "./dombuilder.js";

const Application = new App();


const task = new ToDo("title", "höpinää", "12.12.", 1)
const task2 = new ToDo("tinen", "höpinää22", "12.12.", 1)
console.log(task)

const project = new Project("iso projekti");

project.addToDo(task)
project.addToDo(task2)

project.removeToDo(task.id)

console.log(project);

Application.addProject(project)

console.log(Application.arr);

domBuilder.renderAll(Application.arr);