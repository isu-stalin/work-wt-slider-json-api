let activeSlide = 0;
const slides = document.querySelectorAll(".slide");

let left = document.querySelector("#left-arrow");
let right = document.querySelector("#right-arrow");

left.onclick = function () {
  updatePrevSlide();
};

right.onclick = function () {
  updateNextSlide();
};

function updateNextSlide() {
  let nextSlide = activeSlide < slides.length - 1 ? activeSlide + 1 : 0;

  slides[activeSlide].classList.add("prev");
  slides[nextSlide].classList.remove("prev");
  slides[nextSlide].classList.remove("next");
  slides[nextSlide].classList.add("active");

  if (nextSlide < slides.length - 1) {
    slides[nextSlide + 1].classList.add("next");
    slides[nextSlide + 1].classList.remove("prev");
  } else {
    slides[0].classList.remove("prev");
    slides[0].classList.add("next");
  }
  activeSlide = nextSlide;
}

function updatePrevSlide() {
  let prevSlide = activeSlide > 0 ? activeSlide - 1 : slides.length - 1;

  slides[activeSlide].classList.add("next");
  slides[prevSlide].classList.remove("next");
  slides[prevSlide].classList.remove("prev");
  slides[prevSlide].classList.add("active");

  if (prevSlide > 0) {
    slides[prevSlide - 1].classList.add("prev");
    slides[prevSlide - 1].classList.remove("next");
  } else {
    slides[slides.length - 1].classList.remove("next");
    slides[slides.length - 1].classList.add("prev");
  }
  activeSlide = prevSlide;
}

let elMovie = document.querySelector(".sl1");
let elMovie1 = document.querySelector(".sl2");
let elMovie2 = document.querySelector(".sl3");
let elMovie3 = document.querySelector(".sl4");

fetch("db.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return data.map((item) => {
      return (elMovie.innerHTML += `
          <h1>${item.title}</h1>
          <img src=${item.href} alt=${item.title}/>
        `);
    });
  });
