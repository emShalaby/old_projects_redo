import getNewTaskInputs from "./newTaskView";
import createTask from "./todo";
export default function initNewTaskSubmissionController() {
  const submitBtn = document.querySelector("#new-task-submit");
  console.log(submitBtn);
  const newTaskModal = document.querySelector("#new-task-modal");
  submitBtn.addEventListener("click", () => {
    const inputs = getNewTaskInputs();
    const inputvalues = [];
    for (const property in inputs) {
      inputvalues.push(inputs[property]);
    }
    createTask(
      inputvalues[0],
      inputvalues[1],
      inputvalues[2],
      inputvalues[3],
      inputvalues[4]
    );
    newTaskModal.className = "off";
  });
}
