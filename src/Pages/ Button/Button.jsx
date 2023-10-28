import React from 'react'

const Button = (props)=> {
  return (
    <div>
      <button style={{color:'red'}}>{props.title}</button>
    </div>
  )
}

export default Button
