import React from "react"
import {nanoid} from "nanoid"
import Card from "./card"
let matchcard=[]
let idrecord=[]

export default function App() {
  const[cardDeck, setCardDeck]=React.useState(NewCard())

  
  React.useEffect(() => {
   
    
}, [cardDeck])


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
  console.log(id)
 idrecord.push(id)
 
 
  setCardDeck(oldCard => oldCard.map(Cards => {
      
    return  Cards.id ===id? 
    {...Cards,  clicky:  true}:
        Cards
  }))

 
  
  
if(idrecord[0]!==idrecord[1]){
  

matchcard.push(value)
}
if (matchcard[0]===matchcard[1]){
 
  setCardDeck(oldCard => oldCard.map(Cards => {
      
    return  Cards.id ===idrecord[1]? 
    {...Cards, match:  !Cards.match}:
        Cards
  }))}
  if (matchcard[0]===matchcard[1]){
    
     setCardDeck(oldCard => oldCard.map(Cards => {
         
       return Cards.id ===idrecord[0]? 
       {...Cards, match:  !Cards.match}:
           Cards
     }))}



     



if(matchcard.length>2){


setCardDeck(oldCard => oldCard.map(card=>( {...card, clicky:  false}))
)
idrecord=[];
matchcard=[];
}




  
}

function generateNewCards(value) {
          return {
          
          value: value,
          id: nanoid(),
          match:false,
          clicky:false
        }
     
}



const CardElements =  cardDeck.map(card => (
<Card 
  key={card.id} 
  value={card.value} 
  match={card.match}
  isHeld={card.isHeld}
  accRecord={card.accRecord}
  clicky={card.clicky}
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