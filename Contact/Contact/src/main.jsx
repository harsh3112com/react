import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contact from './Contact.jsx'


let senddata = createContext()
let ob= {name:"Global data",age:89,Contact:123}

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <senddata.Provider value={ob}>
    <App />
    </senddata.Provider>
  </StrictMode>,
)

export {senddata}