const homeContent = () => {
  const content = document.querySelector("#content");
  const h1 = document.createElement("h1");
  h1.textContent = "My Restaurant";
  const p = document.createElement("p");
  p.textContent = "this restuaraunt is so cool";
  content.append(h1, p);
};
export default homeContent;
