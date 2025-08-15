console.log("hi");

const container = document.querySelector('#container');
const btn = document.querySelector('button');


for(let i = 0; i <= 34; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square-fixed');
    container.appendChild(squareDiv);
}
const hoveringDivs = document.querySelectorAll('.square-fixed');


hoveringDivs.forEach(div => {
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = 'lightblue';
    });
    // div.addEventListener('mouseleave', () => {
    //     div.style.backgroundColor = '';
    // });
});

btn.addEventListener('click', () => {
    let userInput = prompt("Please enter the number of dquares per side:");
    let integerValue = parseInt(userInput, 10);
    container.remove();
    
});