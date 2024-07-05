import getNewProjectInputFields from "./newProjectView";
import createProject from "./project";
export default function initNewProjectSubmissionController() {
  const submitBtn = document.querySelector("#new-project-submit");
  submitBtn.addEventListener("click", () => {
    const inputFields = getNewProjectInputFields();
    const modal = document.querySelector("#new-project-modal");
    createProject(inputFields.name);
    modal.className = "off";
  });
}
