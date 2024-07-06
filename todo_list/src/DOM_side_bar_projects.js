import store from "./store";
export default function createSideBarProjects() {
  const projects = store.projects;
  const listOfElements = [];
  for (const [property, value] of projects) {
    const project = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = value.name;
    project.style.display = "flex";
    project.id = value.name;
    project.append(p);
    listOfElements.push(project);
  }
  return listOfElements;
}
