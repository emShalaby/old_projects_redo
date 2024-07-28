import { store } from "./store.js";
export default function getStoredProjectByName(name) {
  const projects = store.projects;
  let result = {};
  for (const [prop, value] of projects) {
    if (value.name == name) {
      return value;
    }
  }
}
