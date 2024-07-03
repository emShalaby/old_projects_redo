import store from "./store";
export default function project(name, tasks = []) {
  const id = Date.now();
  function addTask(taskId) {
    tasks.push(taskId);
  }
  function deleteTask(taskId) {
    tasks.splice(tasks[tasks.indexOf(taskId)], 1);
  }
  store.projects.set(id, { name, id, addTask, deleteTask, tasks });
  return { name, id, addTask, deleteTask, tasks };
}
