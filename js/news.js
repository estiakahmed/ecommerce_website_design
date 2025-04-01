// news page
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
  