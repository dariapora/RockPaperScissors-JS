let humanScore = 0;
let computerScore = 0;

function playRound(computerSelection, humanSelection)
{
    const roundWinner = document.createElement("p");
    if(humanSelection == "rock") humanSelection = 0;
    else if(humanSelection == "paper") humanSelection = 1;
    else humanSelection = 2;
    if(humanSelection==0)
    {
        if(computerSelection==1)
        {
            roundWinner.textContent = "You chose rock. Computer chose paper. You lose.";
            results.append(roundWinner);
            computerScore++;
        }
        else if(computerSelection==2)
        {
            roundWinner.textContent = "You chose rock. Computer chose scissors. You win.";
            results.append(roundWinner);
            humanScore++;
        }
        else 
        {
            roundWinner.textContent = "Draw.";
            results.append(roundWinner);
        }
    }
    else if(humanSelection==1)
    {
        if(computerSelection==2)
        {
            roundWinner.textContent = "You chose paper. Computer chose scissors. You lose.";
            results.append(roundWinner);
            computerScore++;
        }
        else if(computerSelection==0)
        {
            roundWinner.textContent = "You chose paper. Computer chose rock. You win.";
            results.append(roundWinner);
            humanScore++;
        }
        else 
        {
            roundWinner.textContent = "Draw.";
            results.append(roundWinner);
        }
    }
    else 
    {
        if(computerSelection==0)
        {
            roundWinner.textContent = "You chose scissors. Computer chose rock. You lose.";
            results.append(roundWinner);
            computerScore++;
        }
        else if(computerSelection==1)
        {
            roundWinner.textContent = "You chose scissors. Computer chose paper. You win.";
            results.append(roundWinner);
            humanScore++;
        }
        else 
        {
            roundWinner.textContent = "Draw.";
            results.append(roundWinner);
        }
    }
}

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const choiceBtn = [rockBtn, paperBtn, scissorsBtn];
const results = document.createElement("div");
results.style.fontSize = "5px";
results.style.textAlign = "center";
const score = document.createElement("p");
document.getElementsByClassName("rowTwo")[0].append(results);
document.getElementsByClassName("scoreTable")[0].append(score);
score.style.display="none";
let clicked = false;

if(clicked)
{
    score.textContent=computerScore + "-" + humanScore;
    score.style.display="block";
}
choiceBtn.forEach(btn => btn.addEventListener("click", () => { 
    playRound(Math.floor(Math.random()*3), btn.id)
    clicked = true;
}));

