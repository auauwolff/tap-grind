//------Menu accordion animation set

var menus = document.getElementsByClassName("menu-button");

for (var i = 0; i < menus.length; i++){
    menus[i].onclick = function () {
        this.classList.toggle('is-open');
        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;

        } else{
            content.style.maxHeight = content.scrollHeight + "px";

        }
    }
}


// Menu Header toggle

const menuToggle = document.querySelector('.toggle');
            const showcase = document.querySelector('.showcase-menu');

            menuToggle.addEventListener('click', () => {
              menuToggle.classList.toggle('active');
              showcase.classList.toggle('active');
            })