import { store, updateLocalStorage } from "./store";
import inbox from "./inbox";
export default function createTask(
  name,
  description = "",
  dueDate = "",
  priority = "",
  projectId = inbox.id
) {
  const id = Date.now();
  function setProject(newProjectId) {
    let oldProjectId = projectId;
    projectId = newProjectId;
    let oldProject = store.projects.get(oldProjectId);
    let newProject = store.projects.get(newProjectId);
    newProject.addTask(id);
    oldProject.deleteTask(id);
    store.projects.set(oldProjectId, oldProject);
    store.projects.set(newProject, newProject);
  }
  //update Project
  (function updateProject() {
    let project = store.projects.get(projectId);
    project.tasks.push(id);
    store.projects.set(projectId, project);
  })();

  store.tasks.set(id, {
    name,
    description,
    dueDate,
    priority,
    projectId,
    setProject,
    id,
  });
  updateLocalStorage();
  return { name, description, dueDate, priority, projectId, setProject };
}
