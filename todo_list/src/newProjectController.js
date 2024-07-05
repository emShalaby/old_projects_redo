import DOMnewProject from "./DOM_new_project";
export default function initNewProjectController() {
  const newProjectBtn = document.querySelector("#add-project");
  
  newProjectBtn.addEventListener("click", DOMnewProject);

}
