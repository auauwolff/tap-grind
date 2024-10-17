const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

const video = document.querySelector(".showcase video");
video.playbackRate = 0.8; // Slow down to half speed (1 is normal speed)

//------MODAL FORM-----/////

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

//SCROLL TRIGGER ANIMATION
gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from("header", {
  y: "-30%",
  opacity: 0,
  duration: 1,
  ease: Power4.easeOut,
});
tl.from(".social", {
  y: "-30%",
  opacity: 0,
  duration: 2,
  ease: Power4.easeOut,
});
tl.from(
  ".stagger1",
  {
    opacity: 0,
    y: -50,
    stagger: 0.3,
    ease: Power4.easeOut,
    duration: 2,
  },
  "-=1.5"
);

gsap.from(".transition2", {
  scrollTrigger: {
    trigger: ".transition2",
    start: "top bottom",
  },
  y: 50,
  opacity: 0,
  duration: 2,
  stagger: 0.3,
});

gsap.from(".transition3", {
  scrollTrigger: {
    trigger: ".transition3",
    start: "top center",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.6,
});
