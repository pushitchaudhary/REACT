import React from 'react'
import {useState} from 'react'

function Hookss() {

  const [getNumber , setNumber ] = useState(0)

  const increment = ()=>{
    setNumber(getNumber+1)
  }

  const descrement = ()=>{
    setNumber(getNumber)
  }

  return (
    <div>
      <div style={{fontSize:'40px'}}>{getNumber}</div>
      <button onClick={increment} style={{height:'60px', width:'100px', fontSize:'30px'}}>+</button>
      <button onClick={descrement}  style={{height:'60px',width:'100px', fontSize:'30px', marginLeft:'50px'}}>-</button> 
      
    </div>
  )
}

export default Hookss
