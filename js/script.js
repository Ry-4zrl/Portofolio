/* ==================================================
   PORTFOLIO JAVASCRIPT
================================================== */

const navLinks = document.querySelectorAll(".nav-menu a");
const sections = document.querySelectorAll("main section[id]");
const footerText = document.querySelector(".footer p");

/* ==================================================
   OPENING ANIMATION
================================================== */

window.addEventListener("load", function () {
  document.body.classList.remove("is-loading");
  document.body.classList.add("is-ready");
});

/* ==================================================
   ACTIVE NAVIGATION
================================================== */

function updateActiveNavigation() {
  let currentSection = "";

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - sectionHeight * 0.3) {
      currentSection = section.id;
    }
  });

  navLinks.forEach(function (link) {
    const isCurrentSection = link.getAttribute("href") === `#${currentSection}`;

    link.classList.toggle("active", isCurrentSection);
  });
}

window.addEventListener("scroll", updateActiveNavigation);
updateActiveNavigation();

/* ==================================================
   AUTO UPDATE FOOTER YEAR
================================================== */

if (footerText) {
  const currentYear = new Date().getFullYear();

  footerText.textContent = `© ${currentYear} Reyhan Azriel. All Rights Reserved.`;
}
