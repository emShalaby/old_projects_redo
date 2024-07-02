const menuContent = () => {
  const content = document.querySelector("#content");
  let h1 = document.createElement("h1");
  h1.textContent = "MENU";
  let p = document.createElement("p");
  p.textContent = "this is a menu";
  content.append(h1, p);
};
export default menuContent;
