// variabili
const selectSlider = document.querySelector('.slider');
const selectButtonDown = document.getElementById("down");
const selectButtonUp = document.getElementById("up");
const imgArray = ['1', '2', '3', '4', '5'];
let activeItem = 0;


for (let i = 0; i < imgArray.length; i++) {
    // inserisco il blocco div e img sul DOM
    selectSlider.innerHTML += `<div class="item"><img src="img/0${imgArray[i]}.webp"></div>`;
};


// inserisco la classe active
const selectItems = document.querySelectorAll('.item');
selectItems[activeItem].classList.add('active');


// al click 
selectButtonDown.addEventListener("click",
    function () {
        selectItems[activeItem].classList.remove('active');

        activeItem++

        if (activeItem == 0) {
            activeItem = imgArray.length;
        }

        selectItems[activeItem].classList.add('active');
    }
);


selectButtonUp.addEventListener("click",
    function () {
        selectItems[activeItem].classList.remove('active');

        activeItem--

        if (activeItem == imgArray.length - 1) {
            activeItem = o;
        }

        selectItems[activeItem].classList.add('active');

    }
);

