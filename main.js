console.log("hi");

const container = document.querySelector('#container');
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
    let integerValue = parseInt(userInput, 10);
    
    const userContainer = document.createElement('div');
    userContainer.classList.add('container');

    for(let i = 0; i <= integerValue; i++) {
    const userRow = document.createElement('div');
    userRow.classList.add('row');

    for(let j = 0; j <= integerValue; j++) {
    const userSqDiv = document.createElement('div');
    userSqDiv.classList.add('square-div');
    userRow.appendChild(userSqDiv);
    }
    userContainer.appendChild(userRow);
}
container.replaceWith(userContainer);
});