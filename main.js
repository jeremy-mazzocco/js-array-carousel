// variabili
const selectSlider = document.querySelector('.slider');
const selectButtonDown = document.getElementById('down');
const selectImg = document.querySelector('.item');
const imgArray = ['1', '2', '3', '4', '5'];

for (let i = 0; i < imgArray.length; i++) {
    // inserisco il blocco div e img sul DOM
    selectSlider.innerHTML = `<div class="item"><img src="img/0${imgArray[i]}.webp"></div>`;
    console.log(selectSlider);
};

// al click inserisci mostra l'immagine
selectButtonDown.addEventListener('click',
    function () {
        selectImg.classList.add("active");
    });




