import React from 'react'
interface IheaderData{
    label?:string
}
const Header = ({label}:IheaderData) => {
  return (
    <div>
        <h1>{label}</h1>
    </div>
  )
}

export default Header