import { useState } from "react"
import Change from "./Change"

function App() {
  let [name,setName]=useState("JavaScript ")
  let [age,setAge]=useState(20)

  function fun(){
    setName("React Class")
  }
  function fun2(){
    setName("Contact")
  }
  function fun3(){
    setName("About")
  }
  function fun4(){
    setAge(10)
  }


  return (
    <>

    <h1>Welcome to {name}</h1>
    <h1>my age is {age}</h1>

    <button onClick={fun}>Change Name</button>
    <button onClick={fun2}>Change Name</button>
    <button onClick={fun3}>Change Name</button>
    <button onClick={fun4}>Change age</button>
    <button onClick={ ()=>setAge(19)}>Age</button>
    

    <Change/>
    

      
    </>
  )
}

export default App
