export default function getNewProjectInputFields() {
  let name = document.querySelector("#new-project-name").value;
  return { name };
}
