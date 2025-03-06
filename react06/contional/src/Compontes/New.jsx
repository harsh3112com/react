import { useState } from "react"

function Neww(){
    let [st,setSt]=useState(true)
    let [st1,setSt1]=useState(false)

    let [number,setNumber] =useState(0)

    function decrement(){
        if(number!=0){
            setNumber(number-1)
        }
    }



    return(
        <>
        {st ? <h1>Welcome</h1> : ""}
        {st1 ? "hide" :"show"}

        <button onClick={()=>setSt(false)}>Hide</button>
        <button onClick={()=>setSt(true)}>Show</button>
        <button onClick={()=>setSt(!st)}>Toggle</button>

    <h1>Increment and Decrement Number</h1>
    <h1>{number}</h1>
    <button onClick={()=>setNumber(number+1)}>Increment</button>
    <button onClick={decrement}>Decrement</button>
        
        <h1>This is New file</h1>
        </>
    )
}
export default Neww