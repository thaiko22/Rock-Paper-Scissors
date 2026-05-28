



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

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
rock.addEventListener("click", () => {playRound("rock",getComputerChoice())})
paper.addEventListener("click", () => {playRound("paper",getComputerChoice())})
scissors.addEventListener("click", ()=> {playRound("scissors",getComputerChoice())})
const counter = document.querySelector("#counter")
const sH = document.querySelector("#humie")
const sP = document.querySelector("#pc")
let humic = 0;
let pcc = 0;
const comment = document.querySelector("#comment")
counter.addEventListener("Roundplayed", (event) => {
    
    if (event.detail.whoWon == 0) {
        ++pcc
        comment.textContent = "Computer Won!"
    }
    else if (event.detail.whoWon == 1) {
        ++humic
        comment.textContent = "Player Won!"
    }

    else {
        comment.textContent = "Thats a draw!"
    }
    
    if (humic == 5) {
        comment.textContent= "Humie Won the Game " + humic + " : " + pcc + "!!" 
        humic= 0
        pcc = 0
        
    }
    if (pcc == 5) {
        comment.textContent= "Computer Won the Game " + humic + " : " + pcc + "!!" 
        pcc = 0
        humic = 0

    }
    sH.textContent = humic
    sP.textContent = pcc
})

function playRound (humi, pc){
    /*
        play Round:
        compare if humi or pc wins. 
        rock wins against scissors, scissors wins against paper, paper wins against stone
        if humi wins, print return True else false
     */
    let win = 0
    if (humi == "rock" && pc == "scissors") { 
        let humiWon = new CustomEvent("Roundplayed", { detail: {
            whoWon: 1
        }})
        counter.dispatchEvent(humiWon)
    }
    else if (humi == "paper" && pc == "rock") { 
        let humiWon = new CustomEvent("Roundplayed", { detail: {
            whoWon: 1
        }})
        counter.dispatchEvent(humiWon)
    }
    else if (humi == "scissors" && pc == "paper") {
        let humiWon = new CustomEvent("Roundplayed", { detail: {
            whoWon: 1
        }})
        counter.dispatchEvent(humiWon)

    }
    else if (humi == pc) { 
        let draw = new CustomEvent("Roundplayed", { detail: {
            whoWon: 2
        }})
        counter.dispatchEvent(draw)

    }
    else {
        let pcWon = new CustomEvent("Roundplayed", { detail: {
            whoWon: 0
        }})
        counter.dispatchEvent(pcWon)

    }
    
}   










