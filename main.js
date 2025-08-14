console.log("hi");

const container = document.querySelector('#container');


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