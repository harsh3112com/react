import {Route,Routes} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Navbar from "./Navbar"
import Services from "./Services"
import Contact from "./Contact"


function App() {


  return (
    <>

<Navbar/>

    <Routes>
      <Route >
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}></Route>
      <Route  path="/contact" element={<Contact/>}></Route>
      </Route>
    </Routes>
  
    </>
  )
}

export default App
