const container = document.querySelector('#container');
const squarediv = document.querySelector('.squares');
const btn = document.querySelector('.create');





function createGrid () 
{
    let size = Number(window.prompt("Enter the Grid Size (Length x Width)"));
    while(size>100)
    {
        size = Number(window.prompt("Size can't be more than 100, Enter the Grid Size (Length x Width)"));
    }
    let counter = 1;
    for (let i=1; i<=size; i++)
    {
        for (let j=1; j<=size; j++)
        {
            const square = document.createElement('div');
            let boxsize = 900/size;
            square.style.width = `${boxsize}px`;
            square.style.height = `${boxsize}px`;
            square.classList.add('square', `${counter}`);
            square.style.opacity = "0";
            counter++;
            squarediv.appendChild(square);
            square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                square.style.opacity = (Number(square.style.opacity) + 0.1).toFixed(1);
            });
        }
    }
}


btn.addEventListener("click", () => {
    squarediv.innerHTML = "";
    createGrid();
});


