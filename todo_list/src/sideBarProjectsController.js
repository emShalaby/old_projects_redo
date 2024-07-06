import createSideBarProjects from "./DOM_side_bar_projects.js";
import getStoredProjectByName from "./getProjectByName.js";
import populateContent from "./DOM_project.js";
export function initSideBarProjectsController() {
  const submitNewProjectBtn = document.querySelector("#new-project-submit");

  populateSideBarProjects();
  submitNewProjectBtn.addEventListener("click", populateSideBarProjects);
}
export function populateSideBarProjects() {
  const elements = createSideBarProjects();
  const projectsDiv = document.querySelector("#projects");
  projectsDiv.textContent = "";
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", () => {
      const project = getStoredProjectByName(elements[i].id);
      populateContent(project);
    });
    projectsDiv.append(elements[i]);
  }
}
