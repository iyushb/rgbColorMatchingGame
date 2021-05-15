// function for generating random RGB color.
function colorGen() {
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + " " + (Math.floor(Math.random() * 256)) + ',' + " " + (Math.floor(Math.random() * 256)) + ')';

}

const headingRGB = document.querySelector('h1');
const palette = document.querySelectorAll('.assignColor');
var WinningColor = headingRGB.textContent = colorGen().toUpperCase();

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


// assigning colors to pallettes;
for (let i = 0; i < 3; i++) {
    palette[i].style.backgroundColor = colorGen();
    palette[i].classList.add('dimension');

}

//setting one of the color palette and winning rgb value as same value. 
var rand = getRndInteger(0, 3);
palette[rand].style.backgroundColor = WinningColor;


//adding event listeners to pallette
for (let i = 0; i < 3; i++) {
    palette[i].addEventListener('click', function () {
        let tilebg = this.style.backgroundColor;
        console.log(tilebg)
        tilebg = tilebg.toUpperCase();
        let status = document.querySelector('#status');

        if (tilebg === WinningColor) {
            let header = document.querySelector('header');
            let spanBg = document.querySelector('.blue-bg');
            header.style.backgroundColor = WinningColor;
            // spanBg.style.backgroundColor = WinningColor;
            status.textContent = "You won";

            for (let i = 0; i < 3; i++) {
                palette[i].style.backgroundColor = WinningColor;
            }
        }
        else {
            status.textContent = "Try Again";
            this.style.backgroundColor = 'white';
        }

    })
}