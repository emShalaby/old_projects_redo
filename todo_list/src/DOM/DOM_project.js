import store from "../store";
import inbox from "../inbox";
export default function populateContent(project = inbox) {
  const currentProject = document.querySelector("#current-project");
  currentProject.textContent = "";
  const h2 = document.createElement("h2");
  h2.id = "content-project-name";
  const tasksElement = document.createElement("div");
  for (let i = 0; i < project.tasks.length; i++) {
    let task = document.createElement("div");
    let name = document.createElement("h4");
    let description = document.createElement("p");
    let dueDate = document.createElement("p");
    let taskObj = store.tasks.get(project.tasks[i]);
    description.textContent = taskObj.description;
    name.textContent = taskObj.name;
    dueDate.textContent = taskObj.dueDate;
    task.append(name);
    task.append(description);
    task.append(dueDate);
    tasksElement.append(task);
  }
  tasksElement.id = "current-tasks";
  h2.textContent = project.name;
  currentProject.append(h2);
  currentProject.append(tasksElement);
}
