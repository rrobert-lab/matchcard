import React from "react"
import {nanoid} from "nanoid"
import Card from "./card"


export default function App() {
  const[cardDeck, setCardDeck]=React.useState(NewCard())

//generate cards
function NewCard() {
  const newDice = []
  for (let i = 0; i < 20; i++) {
      newDice.push(generateNewCards())
  }
  return newDice
}


function holdCard(id) {
  setCardDeck(oldCard => oldCard.map(Cards => {
      return Cards.id === id ? 
          {...Cards, isHeld: !Cards.isHeld} :
          Cards
  }))
}

function generateNewCards() {
          return {
          value: Math.ceil(Math.random() * 6),
          id: nanoid(),
          match:false
        }
     
}



const CardElements =  cardDeck.map(card => (
<Card 
  key={card.id} 
  value={card.value} 
  match={card.match}
  holdDice={() => holdCard(die.id)}
  />))


return (
  <main>
  <div className="Card-container">
      {CardElements}
  </div>
</main> 
)
}