let form = document.getElementById("form")
let rounds = document.getElementById("rounds")
let playRounds = document.getElementById("playRounds")
let result = document.getElementById("result")
let gameOutput = document.getElementById("output")
let compWins = document.getElementById("compWins")
let userWins = document.getElementById("userWins")
let rockId = document.getElementById("rockId")
let paperId = document.getElementById("paperId")
let scissorsId = document.getElementById("scissorsId")
let userPoints = 0
let compPoints = 0
let countRound = 0
let compArray = ["rock", "paper", "scissors"]
let rock = "rock"
let paper = "paper"
let scissors = "scissors"
let section = document.querySelector(".section")

let userChoice = (abc) => {
    let formRounds = form.rounds.value
    let compArrayRandom = compArray[Math.floor(Math.random() * 3)]
    countRound += 1
    playRounds.innerHTML = `${countRound} / ${formRounds}` 
    if (compArrayRandom == abc) {
        gameOutput.innerHTML = ""
    } else if (compArrayRandom != abc) {
        if (compArrayRandom == rock && abc == scissors || compArrayRandom == paper && abc == rock || compArrayRandom == scissors && abc == paper) {
            compPoints +=1
            compWins.innerHTML = compPoints
        } else {
            userPoints +=1
            userWins.innerHTML = userPoints
        }
    } 
    if (countRound == formRounds) {
        rockId.disabled = true
        paperId.disabled = true
        scissorsId.disabled = true
        if (compPoints < userPoints) {
            section.style.backgroundColor = "rgba(0, 255, 8, 0.06)"
            output.innerHTML = "you lucky motherfucker"
        } else if (compPoints > userPoints) {
            section.style.backgroundColor = "rgba(255, 0, 34, 0.06)"
            output.innerHTML = "you fucked up"
        } else {
            section.style.backgroundColor = "rgba(229, 255, 0, 0.06)"
            output.innerHTML = "try again if you dare"
        }
    }
}

$(document).ready(function(){
    $(".rounds").prop("disabled", true)
    $(document).on("click",".plus",function(){
        $(".rounds").val(parseInt($(".rounds").val()) + 1 )
    })
    $(document).on("click",".minus",function(){
        $(".rounds").val(parseInt($(".rounds").val()) - 1 )
            if ($(".rounds").val() == 0) {
                $(".rounds").val(1)
            }
        })
})