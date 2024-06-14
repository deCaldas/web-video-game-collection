const player = {
    name: "Yassine",
    chips: 120,
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");
const playerEl = document.getElementById("player-el");

playerEl.textContent = `${player.name}: $${player.chips}`;

function getRandomCard() {
    // Generate a random card value between 2 and 11
    return Math.floor(Math.random() * 10) + 2;
}

function startGame() {
    // Reset game state
    cards = [];
    sum = 0;
    hasBlackJack = false;
    isAlive = true;
    // Initial message
    message = "Game started! Press 'NEW CARD' to get your first card.";
    renderGame();
}

function renderGame() {
    // Update UI elements
    cardsEl.textContent = cards.join(", ");
    sumEl.textContent = sum;
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive) {
        const newCardValue = getRandomCard();
        cards.push(newCardValue);
        sum += newCardValue;
        // Check for game-ending conditions
        if (sum > 21) {
            isAlive = false;
            message = "You busted! Game over.";
        } else if (sum === 21) {
            hasBlackJack = true;
            message = "Blackjack! You win!";
        } else {
            message = "Your sum is " + sum + ". Press 'NEW CARD' for another card, or stay.";
        }

        renderGame();
    }
}
