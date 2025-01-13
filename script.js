const rollBtnEl = document.querySelector('button');
// const diceNumberEl = document.querySelector('h2');
const diceNumberEl = document.querySelector('.dice-num')


function rollDice() {
    const random = Math.floor(Math.random() * (7 - 1) + 1);
    console.log(random)
    const diceImg = "images/dice-" + random + ".png";
    console.log(diceImg)
    diceNumberEl.setAttribute('src', diceImg);
}




console.log("Shubham")
rollBtnEl.addEventListener('click', rollDice);
// diceNumberEl.onclick = rollDice