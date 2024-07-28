import getNewTaskInputs from "../views/newTaskView";
import createTask from "../todo";
import getCurrentDOMProject from "../views/projectView";
import populateContent from "../DOM/DOM_project";
export default function initNewTaskSubmissionController() {
  const submitBtn = document.querySelector("#new-task-submit");
  submitBtn.addEventListener("click", () => {
    console.log(getNewTaskInputs());
    const name = getNewTaskInputs().name;
    const description = getNewTaskInputs().description;
    const date = getNewTaskInputs().date;
    const priority = getNewTaskInputs().priority;
    const projectId = getNewTaskInputs().projectId;
    createTask(name, description, date, priority, projectId);
    const currentProject = getCurrentDOMProject();
    populateContent(currentProject);
  });
}
