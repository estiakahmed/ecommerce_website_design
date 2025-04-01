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
var swiper = new Swiper(".storiesSlider", {
  slidesPerView: "auto",
  spaceBetween: 5,
  breakpoints: {
      320: {
          slidesPerView: 2,
          centeredSlides: true,
      },
      768: {
          slidesPerView: 4,
      },
  },
});
// category page
function toggleFilter(id, element) {
  let content = document.getElementById(id);
  let icon = element.querySelector("i");
  if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
      icon.classList.remove("fa-angle-up");
      icon.classList.add("fa-angle-down");
  } else {
      content.style.display = "none";
      icon.classList.remove("fa-angle-down");
      icon.classList.add("fa-angle-up");
  }
}
function toggleFilterPanel() {
  const panel = document.getElementById("filterPanel");
  if (panel.classList.contains("show")) {
      panel.style.bottom = "-100%";
      setTimeout(() => panel.classList.remove("show"), 300);
  } else {
      panel.classList.add("show");
      panel.style.bottom = "0";
  }
}
var swiper = new Swiper(".featureSwiper", {
  slidesPerView: 6,
  spaceBetween: 10,
  loop: false,
  scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true,
  },
  watchOverflow: true,
  breakpoints: {
      320: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 6 },
  },
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 10,
  initialSlide: 0, 
  loop: false, 
  centeredSlides: false, 
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  scrollbar: {
      el: ".swiper-scrollbar",
      hide: false, 
      draggable: true,
  },
});
var swiper = new Swiper(".storiesSlider", {
  slidesPerView: "auto",
  spaceBetween: 5,
  breakpoints: {
      320: {
          slidesPerView: 2,
          centeredSlides: true,
      },
      768: {
          slidesPerView: 4,
      },
  },
});
// comparison page
var swiper = new Swiper(".storiesSlider", {
  slidesPerView: "auto",
  spaceBetween: 5,
  breakpoints: {
      320: {
          slidesPerView: 2,
          centeredSlides: true,
      },
      768: {
          slidesPerView: 4,
      },
  },
});
document.addEventListener("DOMContentLoaded", function () {
  let cmpproductdiv = document.querySelector(".cmpproductdiv");
  let fixeddiv = document.querySelector(".fixeddiv");

  window.addEventListener("scroll", function () {
      let cmpproductdivRect = cmpproductdiv.getBoundingClientRect();


      if (cmpproductdivRect.bottom < 0) {
          fixeddiv.style.display = "flex";
      } else {
          fixeddiv.style.display = "none";
      }
  });
});

document.addEventListener("DOMContentLoaded", function () {
document.querySelectorAll(".productitemdivcmp .close-icon").forEach(function (closeBtn) {
closeBtn.addEventListener("click", function () {
  let productDiv = this.closest(".productitemdivcmp"); // Find the closest product div
  
  if (productDiv) {
      // Create a new add_productdiv element
      let addProductDiv = document.createElement("div");
      addProductDiv.classList.add("add_productdiv", "openCompare"); // Ensure openCompare class is present

      // Set the inner HTML for the new div
      addProductDiv.innerHTML = `
          <div class="add-product-card text-center">
              <div class="add-icon">+</div>
              <div class="add-text">Add Product</div>
          </div>
      `;

      // Replace the product div with the new add product div
      productDiv.replaceWith(addProductDiv);
  }
});
});
});

$(document).ready(function () {
   
  $(document).on("click", ".openCompare", function (e) {
      e.preventDefault();
      $("#comparePanel, #overlay").addClass("show");
  });


  $(document).on("click", "#closeCompare, #overlay", function () {
      $("#comparePanel, #overlay").removeClass("show");
  });
});

// news details page
document.querySelectorAll(".newsSearch").forEach(function(element) {
  element.addEventListener("click", function(event) {
      event.preventDefault();
      var searchModal = new bootstrap.Modal(document.getElementById("searchModal"));
      searchModal.show();
  });
});

document.getElementById("filterIcon").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("categoryPanel").classList.add("active");
});

document.getElementById("closeCategory").addEventListener("click", function() {
  document.getElementById("categoryPanel").classList.remove("active");
});
var swiper = new Swiper(".storiesSlider", {
  slidesPerView: "auto",
  spaceBetween: 5,
  breakpoints: {
      320: {
          slidesPerView: 2,
          centeredSlides: true,
      },
      768: {
          slidesPerView: 4,
      },
  },
});
