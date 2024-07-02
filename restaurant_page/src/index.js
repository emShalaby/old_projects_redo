import "./style.css";
import homeContent from "./home";
import menuContent from "./menu";
import aboutContent from "./about";
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
const content = document.querySelector("#content");
const home = { btn: homeBtn, content: homeContent };
const menu = { btn: menuBtn, content: menuContent };
const about = { btn: aboutBtn, content: aboutContent };
const pages = [home, menu, about];
pages.forEach((page) =>
  page.btn.addEventListener("click", () => {
    pages.forEach((page) => (page.btn.className = "off"));
    page.btn.className = "on";
    content.textContent = "";
    page.content();
  })
);
homeBtn.className = "on";
homeContent();
