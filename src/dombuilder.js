
// cycle projects and draw everything
const domBuilder = (function() {
    function renderAll(projectArray) {
        const mainContainer = document.getElementById("main-container");
        mainContainer.replaceChildren();

        for (const project of projectArray) {
            let projectContainer = buildProject(project);

            for (const todo of project.todoArr) {
                let todoContainer = buildToDo(todo);
                projectContainer.appendChild(todoContainer);
            }
            mainContainer.appendChild(projectContainer);
        }
    }

    function buildToDo(todo) {
        const newTitle = document.createElement("div");
        newTitle.classList.add("todo-title");
        newTitle.textContent = todo.title;
        
        const newDesc = document.createElement("div");
        newDesc.classList.add("todo-desc");
        newDesc.textContent = todo.desc;
        
        const newdueDate = document.createElement("div");
        newdueDate.classList.add("todo-duedate");
        newdueDate.textContent = todo.dueDate;
        
        const newPriority = document.createElement("div");
        newPriority.classList.add("todo-priority");
        newPriority.textContent = todo.priority;

        const toDoContainer = document.createElement("div");
        toDoContainer.classList.add("todo-container");

        toDoContainer.appendChild(newTitle);
        toDoContainer.appendChild(newDesc);
        toDoContainer.appendChild(newdueDate);
        toDoContainer.appendChild(newPriority);

        return toDoContainer;
    }

    function buildProject(project) {
        const newName = document.createElement("div");
        newName.classList.add("project-name");
        newName.textContent = project.name;

        const newProjectContainer = document.createElement("div");
        newProjectContainer.classList.add("project-container");

        newProjectContainer.appendChild(newName);

        return newProjectContainer;
    }


    return { renderAll }
})();

export { domBuilder }