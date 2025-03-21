import { createContext } from "react"
import Child1 from "./Child1"



  let appdata=createContext()
  let name ="from app component"

function App() {

  return (
    <>
    <h1>Hello</h1>
    <appdata.Provider value={name}>
    <Child1/>
 
    </appdata.Provider>

    </>
  )
}

export default App
export {appdata}
