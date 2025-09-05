let humanScore = 0;
let computerScore = 0;

function playRound(computerSelection, humanSelection)
{
    const roundWinner = document.createElement("p");
    if(humanSelection == "rock") 
    { humanSelection = 0;
        humanPic.src="img/rock.png";
    }
    else if(humanSelection == "paper") 
    {humanSelection = 1;
        humanPic.src="img/paper.png";
    }
    else
    { humanSelection = 2;
        humanPic.src="img/scissors.png";
    }
    if(computerSelection==0) computerPic.src="img/rock.png";
    else if(computerSelection==1) computerPic.src="img/paper.png";
    else computerPic.src="img/scissors.png";
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
    console.log(round);
}

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const restartBtn = document.getElementById("restart");
const humanPic = document.getElementById("hPic");
const computerPic = document.getElementById("cPic");
const choiceBtn = [rockBtn, paperBtn, scissorsBtn];

const results = document.getElementById("results");
const score = document.getElementById("score");

const winner = document.createElement("p");
winner.style.fontSize = "4rem";
winner.style.fontWeight = "bold";
let round=0;


restartBtn.addEventListener("click", () => 
{
    round=0;
    results.innerHTML="";
    choiceBtn.forEach(btn => {btn.style.visibility="visible"});
    restartBtn.style.visibility="hidden";
    computerPic.src="img/noSelection.png"
    humanPic.src="img/noSelection.png"
    humanPic.style.display="inline";
    computerPic.style.display="inline";
    score.style.visibility="hidden";
})

choiceBtn.forEach(btn => btn.addEventListener("click", () => {
    if(!round)
    {
        humanScore=0;
        computerScore=0;
        score.style.visibility="hidden";
    } 
    playRound(Math.floor(Math.random()*3), btn.id); 
    round++;
    if(round==1)
    {
        restartBtn.textContent = "restart";
        restartBtn.style.visibility="visible";
    }
    if(round==5)
    {
        computerPic.src="img/noSelection.png"
        humanPic.style.display="none";
        computerPic.style.display="none";
        if(humanScore>computerScore) 
            {
                winner.textContent="you win.";
                results.append(winner);
                choiceBtn.forEach(btn => {btn.style.visibility="hidden"});
            }
            else if(humanScore<computerScore)
            {
                winner.textContent="you lose.";
                results.append(winner);
                choiceBtn.forEach(btn => {btn.style.visibility="hidden"});
            }
            else
            {
                winner.textContent="draw.";
                results.append(winner);
                choiceBtn.forEach(btn => {btn.style.visibility="hidden"});
            }
        restartBtn.textContent = "play again";
        restartBtn.style.visibility="visible";
    }
    score.textContent=humanScore + "-" + computerScore;
    score.style.visibility="visible";
}));

choiceBtn.forEach(btn => btn.addEventListener("mouseenter", () => {
    humanPic.src="img/"+btn.id+".png";
}))
