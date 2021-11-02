const navToggle = document.querySelector("#toggle");
const themeToggle = document.querySelector(".toggle-theme");
const navLinksWrapper = document.querySelector(".links");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".side-nav-link-item .nav-link");
const copyIcons = document.querySelectorAll(".copy-icon");

themeToggle.addEventListener("change", (e) => {
  console.log("status: ", e.target.checked);
});

navToggle.addEventListener("change", (e) => {
  e.target.checked
    ? document.body.classList.add("nav-open")
    : document.body.classList.remove("nav-open");
  document
    .querySelectorAll(".links a")
    .forEach((anchor) =>
      e.target.checked
        ? anchor.classList.add("slide-from-left")
        : anchor.classList.remove("slide-from-left")
    );
});

document.body.addEventListener("mousedown", () => {
  navToggle.checked = false;
  document.body.classList.remove("nav-open");
});

hamburger.addEventListener("mousedown", (e) => e.stopPropagation());

navLinksWrapper.addEventListener("mousedown", (e) => {
  e.stopPropagation();
});

document.querySelector(".toggle-theme").addEventListener("change", (e) => {
  e.target.checked
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark");
});

navLinks.forEach((navLink) =>
  navLink.addEventListener("click", function () {
    document
      .querySelectorAll(".side-nav-link-item .nav-link.active")
      .forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
  })
);

copyIcons.forEach((copyIcon) =>
  copyIcon.addEventListener("click", function (e) {
    e.preventDefault();
    const beforeCopyHTML = this.innerHTML;
    const clipboardText = this.previousElementSibling.textContent;

    navigator.clipboard?.writeText(clipboardText).then(() => {
      this.classList.add("copied");
      this.innerHTML = `<i class="fas fa-clipboard-check"></i><span>Copied</span>`;
      setTimeout(() => {
        this.classList.remove("copied");
        this.innerHTML = beforeCopyHTML;
      }, 2000);
    });
  })
);
