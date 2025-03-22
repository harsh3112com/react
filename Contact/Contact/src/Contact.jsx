import { useContext } from "react"
import { senddata } from "./main"



const Contact = () => {

    let acceptdatab= useContext(senddata)
 

    return (
      <>

           <h1>contact {acceptdatab.name}</h1>


      {/* <h1>contact</h1>
      <appdata.Consumer>
        {
            (data)=>{return <h1>{data}</h1>}
        }

 
      </appdata.Consumer> */}

      </>
    )
  }
  
  export default Contact