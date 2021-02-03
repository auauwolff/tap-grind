// Menu Header toggle

const menuToggle = document.querySelector('.toggle');
            const showcase = document.querySelector('.showcase-catering');

            menuToggle.addEventListener('click', () => {
              menuToggle.classList.toggle('active');
              showcase.classList.toggle('active');
            })



//Carousel

//catering carousel
$('.foodcarousel').slick({
  centerMode: true,
  centerPadding: '60px',
  focusOnSelect: true,
  mobileFirst: true,
  slidesToShow: 1,
  
  responsive: [
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint:1000,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    }
  ]
});


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


//animations

//SCROLL TRIGGER ANIMATION
gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from('header', {
    y: '-30%',
    opacity: 0,
    duration: 1,
    ease: Power4.easeOut
})
tl.from('.side1', {
  x: '-30%',
  opacity: 0,
  duration: 2,
  ease: Power4.easeOut
})
tl.from('.stagger1', {
    opacity: 0,
    y: -50,
    stagger: .3,
    ease: Power4.easeOut,
    duration: 2
}, "-=1.5")

gsap.from(".transition2", {
    scrollTrigger: {
        trigger: '.transition2',
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 2,
    stagger: .3
})

gsap.from(".transition3", {
    scrollTrigger: {
        trigger: ".transition3",
        start: "top center"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .6
});

