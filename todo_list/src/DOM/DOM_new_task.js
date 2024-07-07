export default function DOMnewTask() {
  const projectSelection = document.querySelector("#project-selection");
  const newTaskModal = document.querySelector("#new-task-modal");
  newTaskModal.className = "on";
  const projects = store.projects;
  projectSelection.textContent = "";
  for (const [property, propValue] of projects) {
    let option = document.createElement("option");
    option.value = propValue.name;
    option.textContent = propValue.name;
    projectSelection.append(option);
  }
}
