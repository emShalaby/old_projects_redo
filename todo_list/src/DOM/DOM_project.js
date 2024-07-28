import store from "../store";
import inbox from "../inbox";
export default function populateContent(project = inbox) {
  const currentProject = document.querySelector("#current-project");
  currentProject.textContent = "";
  const h2 = document.createElement("h2");
  h2.id = "content-project-name";
  const tasksElement = document.createElement("div");
  for (let i = 0; i < project.tasks.length; i++) {
    const task = document.createElement("div");
    const name = document.createElement("h4");
    const description = document.createElement("p");
    const dueDate = document.createElement("p");
    const taskObj = store.tasks.get(project.tasks[i]);
    const editTaskBtn = document.createElement("button");
    editTaskBtn.textContent = "Edit Task";
    editTaskBtn.classList.add("btn");
    editTaskBtn.classList.add("btn-secondary");
    editTaskBtn.classList.add("btn-sm")
    description.textContent = taskObj.description;
    name.textContent = taskObj.name;
    dueDate.textContent = taskObj.dueDate;
    task.append(name);
    task.append(description);
    task.append(dueDate);
    tasksElement.append(task);
    tasksElement.append(editTaskBtn);
  }
  tasksElement.id = "current-tasks";
  h2.textContent = project.name;
  currentProject.append(h2);
  currentProject.append(tasksElement);
}
