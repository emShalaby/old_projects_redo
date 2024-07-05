import store from "./store";
import createProject from "./project";
import DOMaddProject from "./DOM_new_project";
export default function initProjectController() {
  const projectSubmitBtn = document.querySelector("#project-submit");
  projectSubmitBtn.addEventListener("click", () => handleAddProject);
}
function handleAddProject() {
  store;
}
