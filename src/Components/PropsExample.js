import React from 'react'

const PropsExample = ({name,add}) => {
  return (
    <>
    <div className='name'>My name is {name}</div>
    <h1>my address is {add} </h1>
    </>
  )
}

export default PropsExample