const initProjects = JSON.parse(localStorage.getItem("projects") || "[]");
const initTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
export const store = {
  projects: new Map(initProjects),
  tasks: new Map(initTasks),
};
export function updateLocalStorage() {
  localStorage.setItem("projects", JSON.stringify([...store.projects]));
  localStorage.setItem("tasks", JSON.stringify([...store.tasks]));
}
updateLocalStorage();

