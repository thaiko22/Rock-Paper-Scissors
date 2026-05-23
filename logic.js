



options = ["rock", "paper", "scissors"]


function getComputerChoice() {
    /*
        Getting the computer choice:

        generate random number from 0-2
        if the number is 0 then output rock
        if the number is 1 then output paper
        if the number is 2 then output scissors

    */

    
    let number = Math.floor(Math.random()*3)
    return options[number]
}

function getHumanChoice () {
    /*
        getting human choice:

        generate prompt with text: 
        "What option do you want to play with?
        write:
        1 = Rock
        2 = paper
        3 = scissors
        "
        convert input to int
        return the option
     */
    let choice = parseInt(prompt("What option do you want to play with?write: 1 = Rock, 2 = paper, 3 = scissors"))
    return options[choice-1]
}

function playRound (humi, pc){
    /*
        play Round:
        compare if humi or pc wins. 
        rock wins against scissors, scissors wins against paper, paper wins against stone
        if humi wins, print return True else false
     */
    if (humi == "rock" && pc == "scissors") { return true}
    if (humi == "paper" && pc == "rock") { return true}
    if (humi == "scissors" && pc == "paper") {return true}
    else { return false}
}   



function playGame() {
    /*
        play game:
        ask for amount of games the player wants to play.
        convert input to int
        initialize a counter for player and Computer
        if player wins, ad 1 to player counter
        if computer wins, ad 1 to computer counter
        after each round, print the counter

        
     */
    playerc = 0
    computerc = 0
    amountofgames = parseInt(prompt("how many games do you want to play?"))
    for (let i = 0 ; i < amountofgames; i++) {
        player = getHumanChoice()
        computer = getComputerChoice()

        console.log("player = "+ player + " computer = " + computer)
        if (playRound(player,computer)) {
            playerc++
            console.log("You won this round!!")
        }
        else if (player == computer) {
            console.log("Thats a tie!!")
        }   
        else {
            computerc++
            console.log("You lost this round...")
        }
        console.log(playerc + " : " + computerc)
    }

    if (playerc > computerc) {
        console.log("You won " + playerc + " to " + computerc + "!!")

    }
    else if (playerc==computerc){
        console.log("thats a tie!! " + playerc + " : " + computerc )
    }
    else {
        console.log("You lost " + playerc + " to " + computerc + "...")
    }
}



playGame()