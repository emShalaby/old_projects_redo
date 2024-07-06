import createSideBarProjects from "./DOM_side_bar_projects.js";
export default function initSideBarProjectsController() {
  const submitNewProjectBtn = document.querySelector("#new-project-submit");
  function populateSideBarProjects() {
    const elements = createSideBarProjects();
    const projectsDiv = document.querySelector("#projects");
    projectsDiv.textContent = "";
    for (let i = 0; i < elements.length; i++) {
      projectsDiv.append(elements[i]);
    }
  }
  populateSideBarProjects();
  submitNewProjectBtn.addEventListener("click", populateSideBarProjects);
}
