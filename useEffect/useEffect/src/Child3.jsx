import { createContext } from "react"
import Child4 from "./Child4"

  let chdata=createContext()
  let city ="Bhopal"

const Child3 = () => {

    return (
        <>
        <h1>child 3</h1>
        <chdata.Provider value={city}>
            <Child4/>

        </chdata.Provider>

        </>
    )
   
  }
  
export default Child3
export {chdata}