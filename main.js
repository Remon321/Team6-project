const dayEl = document.querySelector(".countdown .days .time");
const hoursEl = document.querySelector(".countdown .hours .time");
const minsEl = document.querySelector(".countdown .mins .time");
const secEl = document.querySelector(".countdown .secs .time");

const eventDate = new Date("2024 3 22 9:00").getTime();
const min = 60 * 1000;
const hour = 60 * min;
const day = 24 * hour;

let zeroes = (num) => (num < 10 ? `0${num}` : num);

const countdown = () => {
  const currentDate = new Date().getTime();
  let remainingTime = eventDate - currentDate;

  if (eventDate < currentDate) {
    console.log("....");
  } else {
    let daysLeft = Math.floor(remainingTime / day);
    let hoursLeft = Math.floor((remainingTime % day) / hour);
    let minsLeft = Math.floor((remainingTime % hour) / min);
    let secsLeft = Math.floor((remainingTime % min) / 1000);

    dayEl.textContent = zeroes(daysLeft);
    hoursEl.textContent = zeroes(hoursLeft);
    minsEl.textContent = zeroes(minsLeft);
    secEl.textContent = zeroes(secsLeft);
  }
};

let timer = setInterval(countdown, 1000);

// auto SlideShow
const sliderContainer = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider .slide");

let currentSlide = 0;

const updateSlide = () => {
  currentSlide = (currentSlide + 1) % slides.length;
  const prevSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;

  slides.forEach((slide, index) => {
    // console.log(prevSlide, (prevSlide + 1) % slides.length);
    slide.classList.remove("active", "prev", "slide-out");
    if (index === currentSlide) {
      slide.classList.add("active");
    } else if (prevSlide === index) {
      slide.classList.add("prev");
    } else if (index === (prevSlide - 1 + slides.length) % slides.length) {
      console.log("achi");
      slide.classList.add("slide-out");
    }
  });
};
let autoSlideShow;
const startSlideShow = () => {
  autoSlideShow = setInterval(updateSlide, 2000);
};

const stopSlideShow = () => {
  clearInterval(autoSlideShow);
};

startSlideShow();

sliderContainer.addEventListener("mouseover", () => {
  stopSlideShow();
});
sliderContainer.addEventListener("mouseleave", () => {
  startSlideShow();
});

// end auto slideShow

// Navbar

const navEl = document.querySelector(".links");
const navIcon = document.querySelector(".links .icon");
const overlayEl = document.querySelector(".overlay");

const removeNav = () => {
  navEl.classList.remove("active");
  overlayEl.classList.remove("show");
};

navIcon.addEventListener("click", () => {
  navEl.classList.toggle("active");
  overlayEl.classList.toggle("show");
});

overlayEl.addEventListener("click", () => {
  removeNav();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") removeNav();
});

const headsSlides = document.querySelectorAll(".yasmeen-heads .heads-slides .filter");
const headsSlidesContainer = document.querySelector(".yasmeen-heads .heads-slides");

// heads section slider
let currHeadsSlide = 0;

const updateSlideShow = (direction = "auto") => {
  let size = 4;
  if (window.innerWidth < 860) {
    size = 3;
  }
  const headSlideWidth = headsSlides[0].clientWidth;

  if (direction === "auto") {
    currHeadsSlide = (currHeadsSlide + 1) % (headsSlides.length - 3);

    headsSlidesContainer.style.transform = `translateX(-${
      currHeadsSlide * headSlideWidth
    }px)`;
  }
};

let headerSliderShow;
const startHeadsSlider = () => {
  headerSliderShow = setInterval(updateSlideShow, 2200);
};

const stopHeadsSlider = () => {
  clearInterval(headerSliderShow);
};

headsSlidesContainer.addEventListener("mouseover", () => {
  console.log("entered");
  stopHeadsSlider();
});
headsSlidesContainer.addEventListener("mouseleave", () => {
  console.log("left");
  startHeadsSlider();
});
startHeadsSlider();
