import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div> <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://i.postimg.cc/PxChJrY8/kisspng-catering-food-computer-icons-logo-event-management-catering-5abf487c9d1d37-44156468152248537.png"
          width="90"
          height="50"
          className="d-inline-block align-top"
        />{' '}
       
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header