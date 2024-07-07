import store from "../store";
export default function getNewTaskInputs() {
  const name = document.querySelector("#new-task-name").value;
  const description = document.querySelector("#new-task-description").value;
  const date = document.querySelector("#new-task-date").value;
  const priority = document.querySelector("#new-task-priority").value;
  const projectName = document.querySelector("#project-selection").value;
  function getProjectIdByName(name) {
    const projects = store.projects;
    let projectId = "";
    for (const [property, value] of projects) {
      if (value.name == name) projectId = property;
    }
    return projectId;
  }
  const projectId = getProjectIdByName(projectName);
  return { name, description, date, priority, projectId };
}
