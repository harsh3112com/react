import React from "react"
import { appdata } from "./App"
import Child3 from "./Child3"


const Child2 = () => {
 

    return (
      <>
      <h1>Child 2 here</h1>
      <appdata.Consumer>
        {
            (data)=>{return <h1>{data}</h1>}
        }

 
      </appdata.Consumer>
  
      <Child3/>
      </>
    )
  }
  
  export default Child2