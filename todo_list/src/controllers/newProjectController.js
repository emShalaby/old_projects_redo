import DOMnewProject from "../DOM/DOM_new_project";
export default function initNewProjectController() {
  const newProjectBtn = document.querySelector("#add-project");
  const newProjectModal = document.querySelector("#new-project-modal");
  newProjectBtn.addEventListener("click", DOMnewProject);
  document.addEventListener("click", (event) => {
    if (
      !newProjectModal.contains(event.target) &&
      !newProjectBtn.contains(event.target)
    )
      newProjectModal.className = "off";
  });
}
