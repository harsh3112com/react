import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from 'react';


// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/col'; 
// import Container from 'react-bootstrap/Container';



import Sliderr from './Slider';

import './App.css'



function App() {

  let [valu,setValu]=useState(0)
 
  useEffect(()=>{alert("working")},[valu])
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<h1>{valu}</h1>
<button onClick={()=>setValu(valu+1)}>inc</button>
<button onClick={()=>setValu(valu-1)}>inc</button>

{/* <Container>
  <Row>
    <Col>
    <h1>First Colum</h1>
    </Col>
    <Col>
    <h1>First Colum</h1>
    </Col>
  </Row>
</Container> */}

    <Sliderr/>
    {/* <FormExample/> */}
    
    </>
  )
    
}

export default App
