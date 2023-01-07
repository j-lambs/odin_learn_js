function getComputerChoice()
{
    myRandomNum = Math.floor(Math.random() * 3) + 1 // get random num 1-3
    switch (myRandomNum)
    {
        case 1:
            return 'rock'
        case 2:
            return 'paper'
        case 3:
            return 'scissors'
    }
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection == computerSelection)
    {
        return 'TIE'
    }
    else if (playerSelection == 'rock')
    {
        if (computerSelection == 'paper')
        {
            return 'LOSE'
        }
        else // computerSelection = 'scissors'
        {
            return 'WIN'
        }
    }
    else if (playerSelection == 'paper')
    {
        if (computerSelection == 'rock')
        {
            return 'WIN'
            
        }
        else
        {
            return 'LOSE'
        }
    }
    else // player is scissors
    {
        if (computerSelection == 'rock')
        {
            return 'LOSE'
        }
        else // computer is paper
        {
            return 'WIN'
        }
    }
}

function game()
{
    for (let i = 0; i < 5; i++) 
    {
        console.log('ENTER rock / paper / scissors')
        const playerSelection = prompt()
        const computerSelection = getComputerChoice()
        console.log('Player Selection: ' + playerSelection)
        console.log('Computer Selection: ' + computerSelection)
        console.log(playRound(playerSelection, computerSelection))
    }
}

game()