import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Headers.css'

function Header() {
  return (
    <div>
        <Navbar className='nav' variant="dark">
        <Container>
          <Navbar.Brand color-dark href="#home">
            <img
              alt=""
              src="https://www.freeiconspng.com/thumbs/restaurant-icon-png/pink-restaurants-icon-19.png "
              width="45"
              height="45"
              className="d-inline-block align-top "
            />{' '}
<span className="title-name">
                Food Map
    
</span>          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header