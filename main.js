console.log("hi");

const section = document.querySelector('section');
const container = document.querySelector('.container');
const btn = document.querySelector('button');


for(let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for(let j = 0; j < 16; j++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square-div');
    row.appendChild(squareDiv);
    }
    container.appendChild(row);
}

const hoveringDivs = document.querySelectorAll('.square-div');


hoveringDivs.forEach(div => {
    div.addEventListener('mouseenter', () => {
      

        div.style.backgroundColor =  getRandomRgbColor() ;

            let currentOpacity = parseFloat(window.getComputedStyle(this).opacity);

            let newOpacity = Math.min(currentOpacity + 0.1, 1.0);
            this.style.opacity = newOpacity;
    });

});

btn.addEventListener('click', () => {
    let userInput = prompt("Please enter the number of squares per side:", "44");
    let squares = parseInt(userInput, 10);

    if (squares === null || isNaN(squares)) {
        alert("Invalid number entered.");}
    else if (squares > 100) {
        alert("Error: Input exceeds the maximun allowed number of squares.")
    } else {
    
    const newContainer = document.createElement('div');
    newContainer.classList.add('container');

    section.innerHTML = '';

    
    for(let i = 0; i < squares; i++) {
    const newRow = document.createElement('div');
    newRow.classList.add('row');

    for(let j = 0; j < squares; j++) {
    const box = document.createElement('div');
    box.classList.add('box');
    const calcWidth = `calc(100% / ${squares})`;
    box.style.width = calcWidth;
    newRow.appendChild(box);
    }
    newContainer.appendChild(newRow);
}

section.appendChild(newContainer);
    } //else
const hoveringBox = document.querySelectorAll('.box');


hoveringBox.forEach(div => {
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = getRandomRgbColor();
    });

});

});//buttonAddEvent

 function getRandomRgbColor() {
            const r = Math.floor(Math.random() * 256); // 0-255
            const g = Math.floor(Math.random() * 256); // 0-255
            const b = Math.floor(Math.random() * 256); // 0-255
            return `rgb(${r}, ${g}, ${b})`;
        }