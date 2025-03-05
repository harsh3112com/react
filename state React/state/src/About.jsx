import { useState } from "react";

function About(){
    let [ar,setAr]=useState({
        name:"Harsh",contact:1234
    })


let[data,setData]=useState(["Cybrom","laptop"])

function change(){
    setAr({name:"aryan",contact:1225})
}
function change2(){
    setData(["happy"])
}

let [color,setColor]=useState("")

return(
    <>
    <h1>About {ar.name}</h1>
    <h1>Array {data[0]}</h1>

    <button onClick={change}>change odjact</button><br></br>
    <button onClick={change2}>change Array</button>


<div style={{height:"100vh",width:"100vh",backgroundColor:color}}>

<button onClick={()=>setColor("black")}>Dark</button>
<button onClick={()=>setColor("white")}>light</button>




</div>

   <h1>Happy Birthday</h1>
   <button >Hide</button>
   <button>Show</button>

    </>
)
}
export default About