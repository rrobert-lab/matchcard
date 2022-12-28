import React from "react"
import {nanoid} from "nanoid"
import Card from "./card"


export default function App() {
  const[cardDeck, setCardDeck]=React.useState(NewCard())
  let matchcard=[]
  let idrecord=[]


//generate cards
function NewCard() {
  var oldNum = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]
  var newNum=[]

  for (let i = 0; i < 20; i++) {
    const random = oldNum[Math.floor(Math.random() * oldNum.length)];
    removeFirst(oldNum, random)
    
      newNum.push(generateNewCards(random))
  }
  return newNum
}

function removeFirst(arr, target) {
  var idx = arr.indexOf(target);
  if (idx > -1) {
    arr.splice(idx, 1);
  }
  return arr;
}

function holdCard(id, value) {

console.log(idrecord)


if(idrecord[0]!==id){
idrecord.push(id)
matchcard.push(value)
matchcard[0]===matchcard[1]?

setCardDeck(oldCard => oldCard.map(Cards => {
    
  return Cards.id ===id? 
  {...Cards, match: true}:
      Cards
}))



:console.log("not match")
}
matchcard.length>2?matchcard=idrecord=[]
:console.log(cardDeck);

 
  // setCardDeck(oldCard => oldCard.map(Cards => {
    
  //     return Cards.id === id ? 
  //         {...Cards, isHeld: !Cards.isHeld} :
  //         Cards
  // }))

  
  
}

function generateNewCards(value) {
          return {
          
          value: value,
          id: nanoid(),
          match:false
        }
     
}



const CardElements =  cardDeck.map(card => (
<Card 
  key={card.id} 
  value={card.value} 
  match={card.match}
  holdCard={() => holdCard(card.id, card.value)}
  />))


return (
  <main>
  <div className="Card-container">
      {CardElements}
  </div>
</main> 
)
}