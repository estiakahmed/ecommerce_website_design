let arrow = document.getElementById("up_downArrow");
let arrow1 = document.getElementById("up_downArrow1");

document.querySelectorAll(".dropdown").forEach((dropdown) => {
  dropdown.addEventListener("mouseover", () => {
    const menu = dropdown.querySelector(".dropdown-menu");
    if (menu) {
      arrow.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
      menu.classList.add("show");
    }
  });

  dropdown.addEventListener("mouseleave", () => {
    const menu = dropdown.querySelector(".dropdown-menu");
    if (menu) {
      arrow.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
      menu.classList.remove("show");
    }
  });
});

document.querySelectorAll(".dropdown1").forEach((dropdown1) => {
  dropdown1.addEventListener("mouseover", () => {
    const menu1 = dropdown1.querySelector(".dropdown-menu1");
    if (menu1) {
      arrow1.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
      menu1.classList.add("show");
    }
  });

  dropdown1.addEventListener("mouseleave", () => {
    // Corrected from 'dropdown' to 'dropdown1'
    const menu1 = dropdown1.querySelector(".dropdown-menu1");
    if (menu1) {
      arrow1.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
      menu1.classList.remove("show");
    }
  });
});

// Sidebar Menu
document.getElementById("menu-icon").addEventListener("click", function () {
  document.getElementById("sidebar").classList.add("show");
  document.getElementById("overlay").classList.add("show");
});

document.getElementById("overlay").addEventListener("click", function () {
  document.getElementById("sidebar").classList.remove("show");
  document.getElementById("overlay").classList.remove("show");
});

// Dropdown
document
  .getElementById("dropdownButton")
  .addEventListener("click", function (event) {
    event.stopPropagation();
    document.getElementById("dropdownMenu").classList.toggle("show");
  });

document.addEventListener("click", function (event) {
  if (!document.getElementById("dropdownButton").contains(event.target)) {
    document.getElementById("dropdownMenu").classList.remove("show");
  }
});
