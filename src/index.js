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
// test inputs

domBuilder.renderStatics();
domBuilder.renderMainContent(Application.arr);

export function submitProjectFormLogic(e) {
    e.preventDefault();
        
    const projectName = document.querySelector("#form-project-name").value;

    Application.addProject(new Project(projectName));

    document.getElementById("project-form").reset();
    
    document.getElementById("project-dialog").close();
    
    domBuilder.renderMainContent(Application.arr);
}

export function submitToDoFormLogic(e) {
    e.preventDefault();

    const dataIdFromDialog = document.getElementById("todo-dialog").dataid

    const toDoName = document.querySelector("#form-todo-name").value;
    const toDoDesc = document.querySelector("#form-todo-desc").value;
    const toDoDuedate = document.querySelector("#form-todo-duedate").value;
    const toDoPriority = document.querySelector("input[name='priority']:checked").value;

    const newToDoObject = new ToDo(toDoName, toDoDesc, toDoDuedate, toDoPriority);
    Application.addToDo(dataIdFromDialog, newToDoObject)

    document.getElementById("todo-form").reset();
    
    document.getElementById("todo-dialog").close();
    
    domBuilder.renderMainContent(Application.arr);

}

export function addProjectLogic(e) {
    document.getElementById("project-dialog").showModal();
}

export function toDoCancelLogic(e) {
    document.getElementById("todo-dialog").close()
}

export function projectCancelLogic(e) {
    document.getElementById("project-dialog").close()
}

export function expandButtonLogic(e) {
    domBuilder.expandOrCollapseProjectContainer(e.target.id);
}

export function addToDoButtonLogic(e) {
    console.log(e.target.id);
    document.getElementById("todo-dialog").dataid = e.target.id;
    document.getElementById("todo-dialog").showModal();
}

export function deleteProjectButtonLogic(e) {
    Application.removeProject(e.target.id)
    domBuilder.renderMainContent(Application.arr);
}

export function editProjectButtonLogic(e) {
    // tbd
}

export function deleteToDoButtonLogic(e) {
    Application.removeToDo(e.target.id)
    domBuilder.renderMainContent(Application.arr)

}

export function editToDoButtonLogic(e) {
    // tbd
}

