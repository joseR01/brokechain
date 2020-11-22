import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

// import logo from '../img/logop.png'
const Menu = () => {
  return (
    <div className="Menu-page">
      <Navbar bg="primary" expand="lg" >
      <Navbar.Brand href="#home" className={"text-white font-weight-bold "}>
      {/* <img
        src={logo}
        width="150"
        height="80"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> */}Brokechain
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav "/>

  <Navbar.Collapse id="basic-navbar-nav " >
  <Nav className="ml-auto">
          <Nav.Link as={NavLink} to={"/chat"}>Chat</Nav.Link>
          <Nav.Link as={NavLink} to={"/cambios"}>Cambios</Nav.Link>
          <Button id="loginButton" className="text-white" variant="secondary">Acceder</Button>
  </Nav>
  </Navbar.Collapse>

</Navbar>
    </div>
  )
}

export default Menu
