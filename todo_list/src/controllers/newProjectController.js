import DOMnewProject from "../DOM/DOM_new_project";
export default function initNewProjectController() {
  const newProjectBtn = document.querySelector("#add-project");
  const newProjectModal = document.querySelector("#new-project-modal");
  const cancelBtn = document.querySelector("#new-project-cancel");
  newProjectBtn.addEventListener("click", DOMnewProject);
  cancelBtn.addEventListener("click", () => {
    newProjectModal.className = "off";
  });
  document.addEventListener("click", (event) => {
    if (
      !newProjectModal.contains(event.target) &&
      !newProjectBtn.contains(event.target)
    )
      newProjectModal.className = "off";
  });
}
