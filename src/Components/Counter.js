import React, { useState } from 'react'



const Counter = () => {

    let [count, setCount]=useState(0);

    
        const Counter=()=>{
            setCount(count+1);
        }
 const Counter2=()=>{
    setCount(count-1);
 }

  return (
    <>
    <div>Counter</div>
    <p>{count}</p>
    <button onClick={()=>Counter()} > Increase Counter</button>
    <button onMouseMove={()=>Counter2()}>Decrese Counter</button>
    </>
  )
}

export default Counter