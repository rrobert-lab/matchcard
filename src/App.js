import React from "react"
import {nanoid} from "nanoid"
import Card from "./card"
import Confetti from "react-confetti"
let matchcard=[]
let idrecord=[]



export default function App() {
 
  const[cardDeck, setCardDeck]=React.useState(NewCard())
 
  const [win, setwin] = React.useState(false)
  React.useEffect(() => {

const allSameValue = cardDeck.every(die => die.match === true)
  if (allSameValue) {
    setwin(true)
  }    

}, [cardDeck])

const [cardymatch, setcardymatch] = React.useState(matchcardst())
React.useEffect(() => {

if ((cardymatch.valuea===cardymatch.valueb) && (cardymatch.ida!==cardymatch.idb))
{
  setCardDeck(oldCard => oldCard.map(Cards => {
      
    return  (Cards.id ===cardymatch.ida) ||(Cards.id ===cardymatch.idb)? 
    {...Cards, match:  true}:
        Cards
  }))

}

if (cardymatch.turn>1)
setTimeout(function() {

setCardDeck(oldCard => oldCard.map(card=>( {...card, clicky:  false})))
setcardymatch(card => ( {...card,  turn:0,
    valuea:0,
    valueb:0,
    ida:0,
    idb:0}))


}, 500);


}, [cardymatch])


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
  

  if(idrecord[0]===idrecord[1] || idrecord.length<1){
idrecord=[]

  }



 setcardymatch(eee=> ({...eee, 
  ida:eee.turn===0?id:eee.ida,idb: eee.turn===1?id:eee.idb, 
  valuea:eee.turn===0?value:eee.valuea,
  valueb: (eee.turn===1)?value:eee.valueb, 
  turn:eee.turn>1?0:eee.turn+1,score:eee.turn===0?eee.score+1:eee.score}))
  console.log(cardymatch.score)




  
  setCardDeck(oldCard => oldCard.map(Cards => {
      
    return  Cards.id ===id? 
    {...Cards,  clicky:  !Cards.clicky}:
        Cards
  }))
console.log(cardDeck)

  
  
if(idrecord[0]!==idrecord[1]){
  

matchcard.push(value)




    }
     

}



function matchcardst() {
  let turn=0;
  let ida="";
  let idb="";
  let valuea="";
  let valueb="";
  let score=0;
 

  
  return {
 
    turn,
    valuea,
    valueb,
    ida,
    idb,
    score
}

}
function generateNewCards(value) {
          return {
          
          value: value,
          id: nanoid(),
          match:false,
          clicky:false,
          score:0
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
     {win && <Confetti />}
  <div className="Card-container">
      {CardElements}
      <section className="scoreBox" >Turns:{cardymatch.score}</section>
  </div>
</main> 
)
}