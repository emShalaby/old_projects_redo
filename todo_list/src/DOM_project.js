import store from "./store";
import inbox from "./inbox";
export default function populateContent(project = inbox) {
  const currentProject = document.querySelector("#current-project");
  currentProject.textContent = "";
  const projects = store.projects;
  const h2 = document.createElement("h2");
  const tasksElement = document.createElement("div");
  for (let i = 0; i < project.tasks.length; i++) {
    let task = document.createElement("div");
    let name = document.createElement("h4");
    let taskObj = store.tasks.get(project.tasks[i]);
    name.textContent = taskObj.name;
    task.append(name);
    tasksElement.append(task);
  }
  tasksElement.id = "current-tasks";
  h2.textContent = project.name;
  currentProject.append(h2);
  currentProject.append(tasksElement);
}
