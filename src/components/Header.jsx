import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar className="bg-dark ">
        <Container>
          <Navbar.Brand href="#home" className='text-white'>
          <i className="fa-brands fa-medium fa-fade fa-xl me-3"></i>
           {' '}
              MEDIA PLAYER
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header