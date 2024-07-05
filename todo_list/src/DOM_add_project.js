import project from "./project";
export default function addProject() {
  const newProjectBtn = document.querySelector("#add-project");
  const newProjectModal = document.querySelector("#new-project-modal");
  const submitBtn = document.querySelector("#project-submit");

  newProjectBtn.addEventListener("click", () => {
    newProjectModal.className = "on";
  });
  submitBtn.addEventListener("click", () => {
    newProjectModal.className = "off";
    const projectName = document.querySelector("#new-project-name").value;
    console.log(projectName);
    project(projectName);
  });
}
