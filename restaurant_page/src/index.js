import "./style.css";
import homeContent from "./home";

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
const content = document.querySelector("#content");
const home = { btn: homeBtn, content: homeContent };
const menu = { btn: menuBtn };
const about = { btn: aboutBtn };
const pages = [home, menu, about];
pages.forEach((page) =>
  page.btn.addEventListener("click", () => {
    pages.forEach((page) => (page.btn.className = "off"));
    page.btn.className = "on";
    content.textContent = "";
  })
);
homeBtn.className = "on";
homeContent();
