const main = () => {
  let suits = [‘hearts’, ‘diamonds’, ‘clubs’, ‘spades’]
  let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, ‘Jack’, ‘Queen’, ‘King’, ‘Ace’]
 
  let deck = []
 
  // make a function that creates a deck
  const makeDeck = () => {
    //deck = []
 
    // for each type of suit
    for (let i = 0; i < suits.length; i++) {
      // and for each rank
      for (let j = 0; j < ranks.length; j++) {
        // make a card
        let card = {}
        card.suit = suits[i]
        card.rank = ranks[j]
 
        deck.push(card)
      }
    }
    console.log(deck)
  }
 
  const shuffleDeck = () => {
    // Shuffle the deck
  }
 
  const drawCard = () => {
    if (deck.length > 0) {
      let card = deck.shift()
      console.log(card)
 
      // put the card on the screen
      // - first find the “deck” div
      const element = document.querySelector(‘.deck’)
      console.log(element)
      // - create elelment
      // - set textContent and classes
      // - append to the element
    }
  }
 
  makeDeck()
  shuffleDeck()
  drawCard()
 
  // let randIndex = Math.floor(Math.random() * deck.length)
  // $(‘#drawbtn’).click(function() {
  //   let myCard = drawCard()
 
  //   if (myCard) {
  //     makeCard(myCard.suit, myCard.rank)
  //   } else {
  //     alert(‘no more cards in the deck’)
  //   }
  // })
 
  // console.log(‘Deck of Cards ‘, deck.length, ’ CARDS’)
  // console.log(deck)
 }
 
 // function makeCard(suit, rank) {
 //   let card = $(‘.card.template’).clone()
 
 //   card.removeClass(‘template’)
 
 //   card.find(‘.rank’).html(rank)
 //   card.find(‘.suit’).html(‘&’ + suit + ‘;’)
 
 //   if (suit === ‘hearts’ || suit === ‘diams’) {
 //     card.addClass(‘red’)
 //   }
 
 //   $(‘body’).append(card)
 // }
 
 document.addEventListener(‘DOMContentLoaded’, console.log('testing'))
 
 // function newFunction(makeDeck) {
 //   makeDeck()
 // }













/*let cardSelection;
const cardSelectionClubs=() => {
  cardSelection= 'Clubs'
  console.log(cardSelection)
  document.querySelector('card-pick').textContent= cardSelection
}

let cards = [
'Ace',
'2' ,
'3' ,
'4' ,
'5' ,
'6' ,
'7' ,
'8' ,
'9' ,
'10' ,
'Jack' ,
'Queen' ,
'King' ,
]

let suit = ['Clubs', 'Diamonds', 'Hearts', 'Spades']

const buildDeck= () =>{
for cardSelection (let i;)
}

const shuffleDeck=()=> {

}

const dealCard= (event) => {

}

const main = () => {
  buildDeck ()
  shuffleDeck ()
  //Deal cards in deck
  const button =document.querySelector('button')
  button.addEventListener('click, dealCard')


  if (document.querySelector('h1.deck-of-cards')) {
    document.querySelector('h1.deck-of-cards').textContent = 'Do the Shuffle!'
  }

  document.addEventListener('DOMContentLoaded', main)

  document
    .querySelector('#clubsButton')
    .addEventListener('click', playerSelectedClubs)
    .querySelector('#diamondsButton')
    .addEventListener('click', playerSelectedDiamonds)
    .querySelector('#heartsButton')
    .addEventListener('click', playerSelectedHearts)
    .querySelector('#spadesButton')
    .addEventListener('click', playerSelectedSpades)




  
  /*function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
}