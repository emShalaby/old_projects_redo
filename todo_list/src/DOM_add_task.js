import store from "./store";
import task from "./todo";
export default function addTask() {
  const addTaskBtn = document.querySelector("#add-task");
  const projectSelection = document.querySelector("#project-selection");
  const submitBtn = document.querySelector("#task-submit");
  let currentProjects = store.projects;

  function populateProjects() {
    const projects = store.projects;
    currentProjects = projects;
    projectSelection.textContent = "";
    for (const [property, propValue] of projects) {
      let option = document.createElement("option");
      option.value = propValue.name;
      option.textContent = propValue.name;
      projectSelection.append(option);
    }
  }
  function getProjectIdByname(name) {
    for (const [id, project] of currentProjects) {
      if (project.name == name) return id;
    }
  }
  function createTask() {
    const inputFields = document.querySelectorAll(".new-task-input");
    const inputFieldsValues = Array.from(inputFields).map((obj) => obj.value);
    task(
      inputFieldsValues[0],
      inputFieldsValues[1],
      inputFieldsValues[2],
      inputFields[3],
      getProjectIdByname(inputFields[4])
    );
  }
  addTaskBtn.addEventListener("click", () => {
    console.log("click");
    populateProjects();
  });
  submitBtn.addEventListener("click", createTask);
}
