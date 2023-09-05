import React from 'react'
import { Container,  Nav,  Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const cart = useSelector((state)=>state.cart)

return (
    <Navbar sticky='top' expand="lg" className="bg-body-tertiary">
    <Container >
    <Link to='/'className='navbar-brand fw-bold fs-4' >ABOELNASR STORE</Link>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
		<Nav
      className="ms-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll>
      <Link to='/' className=' btn btn-outline-dark'>Home</Link>
      <Link to='/about' className='btn btn-outline-dark mx-2' >About</Link>
			<Link to='/cart' className=' btn btn-outline-dark ' >Cart-( {cart.length} )</Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>

    )
}

export default NavBar