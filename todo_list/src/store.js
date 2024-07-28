
function localStorageManager() {
  const projects = new Map();
  const tasks = new Map();
  return { tasks, projects };
}
const store = {
  projects: new Map(),
  tasks: new Map(),
};
export default store;
