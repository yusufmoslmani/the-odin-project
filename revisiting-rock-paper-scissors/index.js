const container = document.querySelector('#container');
const rbutton = document.querySelector('#container > .rbutton');
const pbutton = document.querySelector('#container > .pbutton');
const sbutton = document.querySelector('#container > .sbutton');
const output = document.querySelector('.output');
const pscorez = document.querySelector('.pscore');
const aiscorez = document.querySelector('.aiscore');
let pscore = 0;
let aiscore = 0;
let aioption;
let playeroption;


rbutton.addEventListener('click', () => {
    playeroption = playerSelection("rock");
});

pbutton.addEventListener('click', () => {
    playeroption = playerSelection("paper");
});

sbutton.addEventListener('click', () => {
    playeroption = playerSelection("scissors");
});

function aiSelection ()
{
    aioption = Math.floor(Math.random() * 3) + 1;
}



function playerSelection(playeroption)
{
    if (playeroption == "rock")
        return 1;
    else if (playeroption == "paper")
        return 2;
    else if (playeroption == "scissors")
        return 3;
}

function check()
{
    if ((playeroption == 1) && (aioption == 1))
    {
        output.textContent = "Rock VS Rock, it's a tie";
    }
    else if ((playeroption == 1) && (aioption == 2))
    {
        output.textContent = "Rock VS Paper, AI Wins!";
        aiscore++;
        aiscorez.textContent = "AI Score: " + aiscore;
    }
    else if ((playeroption == 1) && (aioption == 3))
    {
        output.textContent = "Rock VS Scissors, You Win!";
        pscore++;
        pscorez.textContent = "Player Score: " + pscore;
    }
    else if ((playeroption == 2) && (aioption == 1))
    {
        output.textContent = "Paper VS Rock, You Win!";
        pscore++;
        pscorez.textContent = "Player Score: " + pscore;
    }
    else if ((playeroption == 2) && (aioption == 2))
    {
        output.textContent = "Paper VS Paper, it's a tie";
    }
    else if ((playeroption == 2) && (aioption == 3))
    {
        output.textContent = "Paper VS Scissors, AI Wins!";
        aiscore++;
        aiscorez.textContent = "AI Score: " + aiscore;
    }
    else if ((playeroption == 3) && (aioption == 1))
    {
        output.textContent = "Scissors VS Rock, AI Wins!";
        aiscore++;
        aiscorez.textContent = "AI Score: " + aiscore;
    }
    else if ((playeroption == 3) && (aioption == 2))
    {
        output.textContent = "Scissors VS Paper, You Win!";
        pscore++;
        pscorez.textContent = "Player Score: " + pscore;
    }
    else if ((playeroption == 3) && (aioption == 3))
    {
        output.textContent = "Scissors VS Scissors, it's a tie";
    }
}

function winner()
{
    console.log("Your Score: " + pscore);
    console.log("AI's Score: " + aiscore);


    if (aiscore>pscore)
    {
        output.innerText = ("AI Wins :(")
    }
    else
        output.innerText = ("You Win :)")
}
function playround()
{
    if ((aiscore<5) && (pscore<5))
    {
        aiSelection();
        check();
    }

    if ((aiscore>=5) || (pscore>=5))
    {
        winner();
        return;
    }
}


const buttons = document.querySelectorAll("button")


buttons.forEach(button => {
        button.addEventListener('click', () => {
            playround();
    });
});
