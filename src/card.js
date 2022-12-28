import React from "react"

export default function Card(props) {
  return (
      <div className=" card-face "
      onClick={
        
        ()=>props.holdCard(props.id, props.value)
       }
      
       > 
     
          <h2 className="card-num " >{props.value}</h2>
         
      </div>
  )
  
}