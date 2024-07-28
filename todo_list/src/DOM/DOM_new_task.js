import { store, updateLocalStorage } from "../store";
export default function DOMnewTask() {
  const projectSelection = document.querySelector("#project-selection");

  const projects = store.projects;
  projectSelection.textContent = "";
  for (const [property, propValue] of projects) {
    let option = document.createElement("option");
    option.value = propValue.name;
    option.textContent = propValue.name;
    projectSelection.append(option);
  }
}
