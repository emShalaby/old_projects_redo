import getNewProjectInputFields from "./newProjectView.js";
import createProject from "./project.js";
export default function initNewProjectSubmissionController() {
  const submitBtn = document.querySelector("#new-project-submit");
  submitBtn.addEventListener("click", () => {
    const inputFields = getNewProjectInputFields();
    const modal = document.querySelector("#new-project-modal");
    createProject(inputFields.name);
    modal.className = "off";
  });
}
