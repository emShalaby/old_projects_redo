import {store} from "../store";
import inbox from "../inbox";
export default function populateContent(project = inbox) {
  const currentProject = document.querySelector("#current-project");
  currentProject.textContent = "";
  const header = document.createElement("div");
  const h2 = document.createElement("h2");
  
  h2.id = "content-project-name";
  const tasksElement = document.createElement("div");
  const col = document.createElement("div");
  tasksElement.classList.add("row");
  tasksElement.classList.add("justify-content-center");
  col.classList.add("col");
  col.classList.add("col-6");

  for (let i = 0; i < project.tasks.length; i++) {
    const task = document.createElement("div");
    const taskBody = document.createElement("div");
    const name = document.createElement("h4");
    const description = document.createElement("p");
    const dueDate = document.createElement("p");
    const taskObj = store.tasks.get(project.tasks[i]);
    const btnGroup = document.createElement("div");
    const editTaskBtn = document.createElement("button");
    const deleteTaskBtn = document.createElement("button");

    task.classList.add("card");
    taskBody.classList.add("card-body");
    editTaskBtn.textContent = "Edit Task";
    editTaskBtn.classList.add("btn");
    editTaskBtn.classList.add("btn-secondary");
    editTaskBtn.classList.add("btn-sm");
    deleteTaskBtn.classList.add("btn");
    deleteTaskBtn.classList.add("btn-danger");
    deleteTaskBtn.classList.add("btn-sm");
    deleteTaskBtn.classList.add("ms-2");
    deleteTaskBtn.textContent = "Delete";
    name.textContent = taskObj.name;
    name.classList.add("card-title");
    description.textContent = taskObj.description;
    description.classList.add("card-text");
    dueDate.textContent = taskObj.dueDate;
    taskBody.append(name);
    taskBody.append(description);
    taskBody.append(dueDate);
    task.append(taskBody);

    btnGroup.append(editTaskBtn);
    btnGroup.append(deleteTaskBtn);
    btnGroup.classList.add("mt-3")
    taskBody.append(btnGroup);
    col.append(task);
  }
  tasksElement.append(col);
  tasksElement.id = "current-tasks";
  h2.textContent = project.name;
  header.append(h2);
  header.classList.add("header");
  header.classList.add("text-center");
  currentProject.append(header);
  currentProject.append(tasksElement);
}
