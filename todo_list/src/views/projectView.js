import getStoredProjectByName from "../getProjectByName";
export default function getCurrentDOMProject() {
  const name = document.querySelector("#content-project-name").textContent;
  const project = getStoredProjectByName(name);
  return project;
}
