import React from "react"

export default function Card(props) {
  const styles = {
   
    backgroundColor: props.clicky ? "orange" : props.match?"gold":""
}

  return (
      <div className=" card-face "
      
      onClick={
        ()=>props.holdCard(props.id, props.value)
       }> 
     
          <h2 className="card-num "   style={styles} >     
          <img className="cards" src={(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/${(props.clicky&&("pokemon/"+props.value)) || (props.match&&("pokemon/"+props.value)) ||(!props.match&&("items/dream-world/dive-ball")) }.png`)} alt=""/> 
          {/* <img class="cardsalt" src=".\background.jpg" alt=""></img> */}
         
          </h2>
          
     
      </div>
  )
  
}