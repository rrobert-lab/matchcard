import React from "react"

export default function Card(props) {
  const styles = {
   
    backgroundColor: props.clicky ? "white" : props.match?"green":"gray"
}

  return (
      <div className=" card-face "
      
    
     
      
       > 
     
          <h2 
          
          onClick={
            ()=>props.holdCard(props.id, props.value)
           }
          className="card-num "   style={styles} >{props.value}</h2>
         
      </div>
  )
  
}