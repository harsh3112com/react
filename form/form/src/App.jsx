import { useState } from "react";

import Form1 from "./Form1";
 const App=()=> {
//   let [framdata,setFrmdata]=useState()
//   let [framdata1,setFrmdata1]=useState()
//   let [framdata2,setFrmdata2]=useState()
//   let [framdata3,setFrmdata3]=useState()
//   function Inputvalue(e){
//     console.log(e.target.value);
//     setFrmdata(e.target.value)
//   }
//   function Inputvalue1(e){
//     console.log(e.target.value);
//     setFrmdata1(e.target.value)
//   }
//   function Inputvalue2(e){
//     console.log(e.target.value);
//     setFrmdata2(e.target.value)
//   }
//   function Inputvalue3(e){
//     console.log(e.target.value);
//     setFrmdata3(e.target.value)
//   }


   return (
    <>
      {/* <h1>Name : {framdata}</h1> 
   
     <form action="">
        <label htmlFor="">Name</label>
        <input type="text" onChange={Inputvalue} /><br></br><br></br>
        <h1>Last name : {framdata1}</h1>
        <label htmlFor="">Last name</label>
        <input type="text" onChange={Inputvalue1} /><br></br><br></br>
           
      <h1>Number : {framdata2}</h1>

        <label htmlFor="">Number</label>
        <input type="text" onChange={Inputvalue2} /><br></br><br></br>
        

        <h1>Address : {framdata3}</h1>

        <label htmlFor="">Address</label>
        <input type="text" onChange={Inputvalue3} />

      </form> */}

      <Form1/>
    </>
  )
}

export default App
