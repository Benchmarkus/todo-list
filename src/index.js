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
    const projectId = document.getElementById("project-form").dataid;
    const newProjectObject = new Project(projectName);

    if (document.getElementById("project-form").editMode) {
        Application.editProject(projectId, newProjectObject);
    } else {
        Application.addProject(newProjectObject);
    }

    document.getElementById("project-form").reset();
    
    document.getElementById("project-dialog").close();
    
    domBuilder.renderMainContent(Application.arr);
}

export function submitToDoFormLogic(e) {
    e.preventDefault();

    const parentId = document.getElementById("todo-form").parentId

    const toDoName = document.getElementById("form-todo-name").value;
    const toDoDesc = document.querySelector("#form-todo-desc").value;
    const toDoDuedate = document.querySelector("#form-todo-duedate").value;
    const toDoPriority = document.querySelector("input[name='priority']:checked").value;

    const newToDoObject = new ToDo(toDoName, toDoDesc, toDoDuedate, toDoPriority, parentId);

    console.log(document.getElementById("todo-form").editMode);
    if (document.getElementById("todo-form").editMode) {
        const toDoId = document.getElementById("todo-form").toDoId
        Application.editToDo(parentId, toDoId, newToDoObject)
    } else {
        Application.addToDo(parentId, newToDoObject)
    }
    document.getElementById("todo-form").reset();
    
    document.getElementById("todo-dialog").close();
    
    domBuilder.renderMainContent(Application.arr);

}

export function addProjectLogic(e) {
    document.getElementById("project-form").editMode = false;
    document.getElementById("project-confirm-button").textContent = "Add Project";
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
    document.getElementById("todo-form").editMode = false;
    document.getElementById("todo-confirm-button").textContent = "Add task";
    document.getElementById("todo-form").parentId = e.target.id;
    document.getElementById("todo-dialog").showModal();
}

export function deleteProjectButtonLogic(e) {
    Application.removeProject(e.target.id)
    domBuilder.renderMainContent(Application.arr);
}

export function editProjectButtonLogic(e) {
    document.getElementById("project-form").editMode = true;
    document.getElementById("project-form").dataid = e.target.id;
    document.getElementById("project-confirm-button").textContent = "Confirm";
    
    const currentProject = Application.getProject(e.target.id);
    document.getElementById("form-project-name").value = currentProject.name;
    
    document.getElementById("project-dialog").showModal();
}

export function deleteToDoButtonLogic(e) {
    Application.removeToDo(e.target.id)
    domBuilder.renderMainContent(Application.arr)
    
}

export function editToDoButtonLogic(e) {
    const toDoId = e.target.id;
    const currentToDo = Application.getToDo(toDoId);
    
    const parentId = currentToDo.parentId;

    document.getElementById("todo-form").editMode = true;
    document.getElementById("todo-form").toDoId = toDoId;
    document.getElementById("todo-form").parentId = parentId;
    document.getElementById("todo-confirm-button").textContent = "Confirm";
    
    // populate form fields
    document.getElementById("form-todo-name").value = currentToDo.title;
    document.getElementById("form-todo-desc").value = currentToDo.desc;
    document.getElementById("form-todo-duedate").value = currentToDo.dueDate;
    document.getElementById(`priority-${currentToDo.priority}`).toggleAttribute("checked")
    
    document.getElementById("todo-dialog").showModal();
}

