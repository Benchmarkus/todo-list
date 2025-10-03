import "./reset.css";
import "./styles.css";
import { App, Project, ToDo } from "./classes.js";
import { domBuilder } from "./dombuilder.js";

const Application = new App();

// test inputs
const task = new ToDo("task2", "descdescdesc", "10.12.", 1)
const task2 = new ToDo("task2", "descdescdesc", "12.12.", 1)

const project = new Project("huge project");

project.addToDo(task)
project.addToDo(task2)

Application.addProject(project)
console.log(Application.arr);

domBuilder.renderAll(Application.arr);
// test inputs

// 
// Events
function refreshEvents() {
    const addProjectButton = document.getElementById("add-project-button");
    addProjectButton.addEventListener("click", (e) => {
        // logic
    });

    const addToDoButtons = document.querySelectorAll(".add-todo-button");
    addToDoButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            // logic
        })
    });

    const deleteProjectButton = document.querySelector(".delete-project-button");
    deleteProjectButton.addEventListener("click", (e) => {
        // logic
    });

    const deleteToDoButtons = document.querySelectorAll(".delete-todo-button");
    deleteToDoButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
        // logic
        })
    });

    const expandButtons = document.querySelectorAll(".expand-button");
    expandButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            console.log(button.id);
            domBuilder.expandOrCollapseProjectContainer(button.id);
        })
    });
}

refreshEvents()