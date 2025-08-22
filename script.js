let humanScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    let choice = Math.floor(Math.random()*3);
    return choice;
}

function getHumanChoice()
{
    let choice = prompt("What is your choice?");
    return choice;
}

function playRound(computerSelection, humanSelection)
{
    if(humanSelection == "rock") humanSelection = 0;
    else if(humanSelection == "paper") humanSelection = 1;
    else humanSelection = 2;
    if(humanSelection==0)
    {
        if(computerSelection==1)
        {
            console.log("Computer win!");
            computerScore++;
        }
        else if(computerSelection==2)
        {
            console.log("Human win!");
            humanScore++;
        }
        else 
        {
            console.log("Draw!");
        }
    }
    else if(humanSelection==1)
    {
        if(computerSelection==2)
        {
            console.log("Computer win!");
            computerScore++;
        }
        else if(computerSelection==0)
        {
            console.log("Human win!");
            humanScore++;
        }
        else 
        {
            console.log("Draw!");
        }
    }
    else 
    {
        if(computerSelection==0)
        {
            console.log("Computer win!");
            computerScore++;
        }
        else if(computerSelection==1)
        {
            console.log("Human win!");
            humanScore++;
        }
        else 
        {
            console.log("Draw!");
        }
    }
}

function playGame()
{
    let rounds = prompt("How many rounds do you want to play?");
    parseInt(rounds);
    let i;
    for(i=1; i<=rounds; i++)
    {
    console.log("Round "+ i + ":");
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice().toLowerCase();
    playRound(computerSelection, humanSelection);
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    }
}

playGame();
