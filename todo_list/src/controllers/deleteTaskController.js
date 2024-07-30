import { store, updateLocalStorage } from "../store";
export default function deleteTaskStore(taskID) {
  store.tasks.delete(Number(taskID));
  updateLocalStorage();

  for (const [id, project] of store.projects) {
    if (project.tasks.includes(Number(taskID))) {
      project.tasks = project.tasks.filter((task) => task != taskID);
      updateLocalStorage();
      return true;
    }
  }
}
