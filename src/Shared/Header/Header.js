import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../../components/CustomLink/CustomLink';

const Header = () => {
    return (
       <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand href="/">
                        <img src="images/logo.png" alt="header-logo" className='mw-100 w-75' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={CustomLink} to="/home">Home </Nav.Link>
                            <Nav.Link as={CustomLink} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={CustomLink} to="/profile">Profile</Nav.Link>
                            <Nav.Link as={CustomLink} to="/login">Login</Nav.Link>
                            {/* {user ? <button className='btn btn-link' onClick={}>Sign Out</button> : <Nav.Link as={CustomLink} to="/login">Login</Nav.Link>} */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
       </div>
    );
};

export default Header;