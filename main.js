// variabili
const selectSlider = document.querySelector('.slider');
const selectButtonDown = document.getElementById('down');
const imgArray = ['1', '2', '3', '4', '5'];
let activeItem = 0;



for (let i = 0; i < imgArray.length; i++) {
    // inserisco il blocco div e img sul DOM
    selectSlider.innerHTML += `<div class="item"><img src="img/0${imgArray[i]}.webp"></div>`;

    // inserisco la classe active
    const selectItems = document.querySelectorAll('.item');
    selectItems[activeItem].classList.add('active');

};


// al click inserisci mostra l'immagine
selectButtonDown.addEventListener('click',
    function () {
        console.log("ciaoo");
    }
);






        // // togli la classe active
        // selectItems[activeItem].classList.remove('active');
        // // passa al successivo
        // activeItem += 1;
        // // aggiungi la classe active al successivo
        // selectItems[activeItem].classList.add('active');