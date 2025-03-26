import { useNavigate } from "react-router-dom"


function About() {

  let navigator=useNavigate()
  function Servicess(){
    navigator('/services')
  }
      


    return (
      <>
             <h1>This is About Page </h1>
             <button onClick={Servicess}>services page</button>
      </>
    )
  }
  
  export default About