import { Link } from "react-router-dom"
function Navbar(){
    return(
        <>

        <nav>
            <h1>LOGO</h1>
        </nav>
        <ul>
            <li><Link to="/" >home</Link></li>
            <li><Link to="/about" >about</Link></li>
            <li><Link to="/services" > services </Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>


        </>
    )
}
export default Navbar