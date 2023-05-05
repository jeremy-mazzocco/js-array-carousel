// variabili
const selectSlider = document.querySelector('.slider');


const imgArray = ['1', '2', '3', '4', '5'];
let activeItem = 0;
// 0 1 2 3 4



for (let i = 0; i < imgArray.length; i++) {
    // inserisco il blocco div e img sul DOM
    selectSlider.innerHTML += `<div class="item"><img src="img/0${imgArray[i]}.webp"></div>`;
};


// inserisco la classe active
const selectItems = document.querySelectorAll('.item');
selectItems[activeItem].classList.add('active');


// al click button Down
const selectButtonDown = document.getElementById('down');
selectButtonDown.addEventListener('click',
    function () {

        selectItems[activeItem].classList.remove('active');

        activeItem++

        if (activeItem === imgArray.length) {
            activeItem = 0;
        }

        selectItems[activeItem].classList.add('active');
    }
);


// al click button Up
const selectButtonUp = document.getElementById("up");
selectButtonUp.addEventListener("click",
    function () {
        selectItems[activeItem].classList.remove('active');



        if (activeItem === 0) {
            activeItem = imgArray.length;
        }

        activeItem--

        selectItems[activeItem].classList.add('active');

    }
);
