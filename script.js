
// Objects 
let player = {
    name:  "Per",
    chips:  233
}
//Let is a variable 
//I created a couple varibles each having their own meaning 
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

//getElementById = from index html
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el")

//Render the player name and chips
playerEl.textContent = player.name + ": £" + player.chips




//Functions is a statement 
//Created a few function statements each of them 

function getRandomCard() {

    //Variable first that actually operates a random full number  
    let randomNumer = Math.floor( Math.random()*13 ) + 1

    // Created a if statement 
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

//Another function 
function startGame() {
    isAlive = true
    //two varaibles here 
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    //these letters already represent a varialbe 
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
    renderGame()
}

//Created another function 
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

//Another function statement 
function newCard() {
    //if is alive is true and has black jack is false then the dealer should give new card 
    if (isAlive === true && hasBlackJack === false){
//let varaible (card is going to get a random card number)
    let card = getRandomCard()
    
    //this is the variable that will be assigned to the cards array
    sum += card
    cards.push(card)
    renderGame()
    }
}
