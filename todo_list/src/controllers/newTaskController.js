import DOMnewTask from "../DOM/DOM_new_task";

export default function initNewTaskController() {
  const newTaskBtn = document.querySelector("#add-task");
  newTaskBtn.addEventListener("click", DOMnewTask);
}
