const aboutContent = () => {
  const content = document.querySelector("#content");
  let h3 = document.createElement("h3");
  h3.textContent = "hi its me emShalaby";
  let p = document.createElement("p");
  p.textContent = "my socials";
  content.append(h3, p);
};
export default aboutContent;
