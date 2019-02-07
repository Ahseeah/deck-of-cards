let suits = ['hearts', 'diamonds', 'clubs', 'spades']
let ranks = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King',
  'Ace'
]

let deck = []

// make a function that creates a deck
const makeDeck = () => {
  // for each type of suit
  for (let i = 0; i < suits.length; i++) {
    // and for each rank
    for (let j = 0; j < ranks.length; j++) {
      // make a card
      let card = suits[i] + ' of ' + ranks[j]
      deck.push(card)
    }
  }
  console.log(deck)
}

const shuffleDeck = () => {
  for (let i = deck.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const cardJ = deck[j]
    const cardI = deck[i]
    deck[j] = cardI
    deck[i] = cardJ
  }
  // Shuffle the deck
}

const drawCard = () => {
  let card = deck.shift()
  if (deck.length > 0) {
    const _li = document.createElement('li')
    _li.textContent = card
    document.querySelector('ul').appendChild(_li)
    console.log(card)

    // put the card on the screen
    // - first find the “deck” div
    // - create elelment
    // - set textContent and classes
    // - append to the element
  }
}

const main = () => {
  makeDeck()
  shuffleDeck()
  console.log(deck)
  const button = document.querySelector('.dealCard')
  button.addEventListener('click', drawCard)
  // drawCard()
}

document.addEventListener('DOMContentLoaded', main)
