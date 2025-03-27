import { useState } from "react";


const Form1=()=> {
  let [framdata,setFrmdata]=useState(
    {name:"",age:"",contact:"",address:""}
  )

  function Inputvalue(e){

    const {name,value}=e.target
    setFrmdata({...framdata,[name]:value})
   
  }

  function finalsubmit(e){
    e.preventDefault()
    console.log(framdata)

    localStorage.setItem("userdata",JSON.stringify(framdata))
  }
  


  return (
    <>
    
   
     <form onSubmit={finalsubmit}>

        <label htmlFor="">Name</label>
        <input type="text" name="name" onChange={Inputvalue} /><br></br><br></br>
        
        <label htmlFor="">Age</label>
        <input type="text" name="age" onChange={Inputvalue} /><br></br><br></br>
           
 

        <label htmlFor="">Contact</label>
        <input type="text" name="contact" onChange={Inputvalue} /><br></br><br></br>

        <label htmlFor="">Address</label>
        <input type="text" name="address" onChange={Inputvalue} /><br></br><br></br>
        
        
        <input type="submit" />

      </form>
    </>
  )
}

export default Form1
