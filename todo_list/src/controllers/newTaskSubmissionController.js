import getNewTaskInputs from "../views/newTaskView";
import createTask from "../todo";
import getCurrentDOMProject from "../views/projectView";
import populateContent from "../DOM/DOM_project";
export default function initNewTaskSubmissionController() {
  const submitBtn = document.querySelector("#new-task-submit");
  console.log(submitBtn);
  const newTaskModal = document.querySelector("#new-task-modal");
  submitBtn.addEventListener("click", () => {
    const inputs = getNewTaskInputs();
    const inputValues = [];
    for (const property in inputs) {
      inputValues.push(inputs[property]);
    }
    createTask(
      inputValues[0],
      inputValues[1],
      inputValues[2],
      inputValues[3],
      inputValues[4]
    );
    newTaskModal.className = "off";
    const currentProject = getCurrentDOMProject();
    populateContent(currentProject);
  });
}
