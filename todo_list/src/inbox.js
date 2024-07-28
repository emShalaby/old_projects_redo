import createProject from "./project";
import { store } from "./store";
const inbox = () => {
  for (const [id, project] of store.projects) {
    if (project.name == "Inbox") return project;
  }
  return createProject("Inbox");
};
export default inbox();
