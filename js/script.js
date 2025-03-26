let arrow = document.getElementById("up_downArrow");
let arrow1 = document.getElementById("up_downArrow1");
let arrow2 = document.getElementById("up_downArrow2");

document.querySelectorAll(".loginClass").forEach((dropdown) => {
  dropdown.addEventListener("mouseover", () => {
    const menu = dropdown.querySelector(".loginclass-menu");
    if (menu) {
      arrow.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
      menu.classList.add("show");
    }
  });

  dropdown.addEventListener("mouseleave", () => {
    const menu = dropdown.querySelector(".loginclass-menu");
    if (menu) {
      arrow.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
      menu.classList.remove("show");
    }
  });
});
document.querySelectorAll(".categoryMenu").forEach((dropdown) => {
  dropdown.addEventListener("mouseover", () => {
    const menu = dropdown.querySelector(".category-menu");
    if (menu) {
      arrow2.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
      menu.classList.add("show");
    }
  });

  dropdown.addEventListener("mouseleave", () => {
    const menu = dropdown.querySelector(".category-menu");
    if (menu) {
      arrow2.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
      menu.classList.remove("show");
    }
  });
});

document.querySelectorAll(".moreClass").forEach((moreClass) => {
  moreClass.addEventListener("mouseover", () => {
    const menu1 = moreClass.querySelector(".moreclass-menu");
    if (menu1) {
      arrow1.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
      menu1.classList.add("show");
    }
  });

  moreClass.addEventListener("mouseleave", () => {
    // Corrected from 'dropdown' to 'moreClass'
    const menu1 = moreClass.querySelector(".moreclass-menu");
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

document.querySelectorAll(".slider-container").forEach((sliderContainer) => {
  let currentIndex = 0;
  let isMouseDown = false;
  let startX;
  let scrollLeft;

  const slider = sliderContainer.querySelector(".mobileNew");
  const products = sliderContainer.querySelectorAll(".mobileProduct");
  const productWidth = products[0].offsetWidth;
  const totalProducts = products.length;

  // Drag functionality
  slider.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.style.cursor = "grabbing";
  });

  slider.addEventListener("mouseleave", () => {
    isMouseDown = false;
    slider.style.cursor = "grab";
  });

  slider.addEventListener("mouseup", () => {
    isMouseDown = false;
    slider.style.cursor = "grab";
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isMouseDown) return;
    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
  });

  function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
      currentIndex = totalProducts - 1;
    } else if (currentIndex >= totalProducts) {
      currentIndex = 0;
    }

    slider.style.transform = `translateX(-${currentIndex * productWidth}px)`;
  }

  const prevButton = sliderContainer.querySelector(".prev");
  const nextButton = sliderContainer.querySelector(".next");

  if (prevButton) prevButton.addEventListener("click", () => moveSlide(-1));
  if (nextButton) nextButton.addEventListener("click", () => moveSlide(1));
});
function toggleText() {
  let button = document.getElementById("toggleButton");
  if (button.innerText === "Read More") {
      button.innerText = "Show Less";
  } else {
      button.innerText = "Read More";
  }
}
