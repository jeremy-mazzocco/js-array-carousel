// variabili
const selectItem = document.querySelector('.item');
const selectButtonDown = document.getElementById('down');
let imgArray = ['<img src="img/02.webp">', '<img src="img/02.webp">', '<img src="img/02.webp">', '<img src="img/02.webp">'];

// al click inserisci la tag imgagine
selectButtonDown.addEventListener('click',
    function () {
        selectItem.innerHTML = imgArray[1];
        imgArray
        console.log(imgArray[1]);
    })




