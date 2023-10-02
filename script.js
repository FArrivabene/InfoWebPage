document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((menuItem, index) => {
    menuItem.addEventListener("click", () => {
      sections[index].scrollIntoView({ behavior: "smooth" });
    });
  });

  window.addEventListener("scroll", () => {
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        menuItems[index].classList.add("active");
      } else {
        menuItems[index].classList.remove("active");
      }
    });
  });
});
