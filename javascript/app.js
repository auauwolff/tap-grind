const menuToggle = document.querySelector('.toggle');
            const showcase = document.querySelector('.showcase');

            menuToggle.addEventListener('click', () => {
              menuToggle.classList.toggle('active');
              showcase.classList.toggle('active');
            })



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


