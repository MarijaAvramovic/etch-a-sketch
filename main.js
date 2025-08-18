console.log("hi");

const container = document.querySelector('.container');
const btn = document.querySelector('button');


for(let i = 0; i <= 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for(let j = 0; j <= 16; j++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square-div');
    row.appendChild(squareDiv);
    }
    container.appendChild(row);
}

const hoveringDivs = document.querySelectorAll('.square-div');


hoveringDivs.forEach(div => {
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = 'lightblue';
    });

});

btn.addEventListener('click', () => {
    let userInput = prompt("Please enter the number of squares per side:");
    let squares = parseInt(userInput, 10);
    
    const newContainer = document.createElement('div');
    newContainer.classList.add('container');

    for(let i = 0; i <= squares; i++) {
    const newRow = document.createElement('div');
    newRow.classList.add('row');

    for(let j = 0; j <= squares; j++) {
    const box = document.createElement('div');
    box.classList.add('square-div');
    newRow.appendChild(box);
    }
    newContainer.appendChild(newRow);
}
container.replaceWith(newContainer);
});