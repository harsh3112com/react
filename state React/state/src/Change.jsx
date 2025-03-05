import { useState } from "react"




function Change() {

    let [color,setColor]=useState("lightblue")
  
  


  return (
    <>

    <div style={{height:"100vh",width:"100vh",backgroundColor:color}}>

    <button onClick={()=>setColor("red")}>Change Color</button>

   
    

    </div>
    

      
    </>
  )
}

export default Change
