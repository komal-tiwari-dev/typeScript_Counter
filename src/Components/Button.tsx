import React from 'react'

interface IButtonFunction{
    label:string,
    handelFunction:()=>void
}
const Button = ({label,handelFunction}:IButtonFunction) => {
  return (
    <div>
        <button onClick={handelFunction}>{label}</button>
    </div>
  )
}

export default Button