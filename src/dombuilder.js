
const domBuilder = (function() {
    // cycle projects and draw everything
    function renderAll(projectArray) {
        const mainContainer = document.getElementById("main-container");
        mainContainer.replaceChildren();

        for (const project of projectArray) {
            let projectContainer = buildProject(project);

            for (const todo of project.todoArr) {
                let todoContainer = buildToDo(todo);
                let projectContainerExpand = projectContainer.querySelector(".project-container-expand");
                projectContainerExpand.appendChild(todoContainer);
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

        const newDeleteButton = document.createElement("button");
        newDeleteButton.classList.add("delete-todo-button");
        newDeleteButton.setAttribute("id", todo.id);
        newDeleteButton.textContent = "Delete"

        const newEditButton = document.createElement("button");
        newEditButton.classList.add("edit-todo-button");
        newEditButton.setAttribute("id", todo.id);
        newEditButton.textContent = "Edit"

        const toDoContainer = document.createElement("div");
        toDoContainer.classList.add("todo-container");

        toDoContainer.appendChild(newTitle);
        toDoContainer.appendChild(newDesc);
        toDoContainer.appendChild(newdueDate);
        toDoContainer.appendChild(newPriority);
        toDoContainer.appendChild(newEditButton);
        toDoContainer.appendChild(newDeleteButton);

        return toDoContainer;
    }

    function buildProject(project) {
        const newName = document.createElement("div");
        newName.classList.add("project-name");
        newName.textContent = project.name;

        const newProjectContainer = document.createElement("div");
        newProjectContainer.classList.add("project-container");

        const newProjectContainerTitle = document.createElement("div");
        newProjectContainerTitle.classList.add("project-container-title");
        
        const newProjectContainerExpand = document.createElement("div");
        newProjectContainerExpand.classList.add("project-container-expand");
        newProjectContainerExpand.setAttribute("id", project.id)

        const newExpandButton = document.createElement("button");
        newExpandButton.classList.add("expand-button")
        newExpandButton.setAttribute("id", project.id)
        newExpandButton.textContent = ">"

        const newAddToDoButton = document.createElement("button");
        newAddToDoButton.classList.add("add-todo-button")
        newAddToDoButton.setAttribute("id", project.id)
        newAddToDoButton.textContent = "+ Add Task"

        const newDeleteButton = document.createElement("button");
        newDeleteButton.classList.add("delete-project-button")
        newDeleteButton.setAttribute("id", project.id)
        newDeleteButton.textContent = "Delete"
        
        const newEditButton = document.createElement("button");
        newEditButton.classList.add("edit-project-button")
        newEditButton.setAttribute("id", project.id)
        newEditButton.textContent = "Edit"

        newProjectContainerTitle.appendChild(newExpandButton);
        newProjectContainerTitle.appendChild(newName);
        newProjectContainerTitle.appendChild(newAddToDoButton);
        newProjectContainerTitle.appendChild(newEditButton);
        newProjectContainerTitle.appendChild(newDeleteButton);

        newProjectContainer.appendChild(newProjectContainerTitle);
        newProjectContainer.appendChild(newProjectContainerExpand);

        return newProjectContainer;
    }

    function expandOrCollapseProjectContainer(id) {
        const target = document.querySelector(`div[class="project-container-expand"][id="${id}"]`);
        console.log(target);
        if (target.style.display === "none") {
            target.style.display = "flex"
        }   else {
            target.style.display = "none"
        }
    }


    return { renderAll, expandOrCollapseProjectContainer }
})();

export { domBuilder }