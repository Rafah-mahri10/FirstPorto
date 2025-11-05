let headersection = document.getElementById("header");
let title = document.querySelector(".title");
let menu = document.querySelectorAll(".menu ul li a");
let floatingButton = document.getElementById("floating-button");
function scrollheader() {
  if (window.scrollY > 0) {
    headersection.style.backgroundColor = "#000000ff";
    headersection.style.borderBottom = " solid #ffffffff";
    title.style.color = "white";
    menu.forEach((Element) => {
      {
        Element.style.color = "black";
      }
    });
    floatingButton.style.display = "flex";
  } else {
    headersection.style.backgroundColor = "transparent";
    headersection.style.borderBottom = "1px solid #eee4e4ff";
    floatingButton.style.display = "none";

    
  }
}
window.onscroll = scrollheader;
let home = document.getElementById("menu ul li a[href='#home']");
let about = document.getElementById("menu ul li a[href='#about']");
let skill = document.getElementById("menu ul li a[href='#skill']");
let work = document.getElementById("menu ul li a[href='#works']");
let contact = document.getElementById("menu ul li a[href='#contact']");
function scrollhome(event) {
  event.preventDefault();
  homeSection.scrollIntoView({ behavior: "smooth" });
}
function scrollabout(event) {
  event.preventDefault();
  aboutSection.scrollIntoabout({ behavior: "smooth" });
}
function scrollskill(event) {
  event.preventDefault();
  aboutSection.scrollIntoskill({ behavior: "smooth" });
}
function scrollwork(event) {
  event.preventDefault();
  aboutSection.scrollIntowork({ behavior: "smooth" });
}
function scrollcontact(event) {
  event.preventDefault();
  aboutSection.scrollIntocontact({ behavior: "smooth" });
}
floatingButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

