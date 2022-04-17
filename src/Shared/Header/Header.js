import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import CustomLink from '../../components/CustomLink/CustomLink';
import auth from '../../firebase.init';
import logo from '../../images/Super-Lawyers-logo.png'


const Header = () => {
    const [user] = useAuthState(auth);
    return (
       <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="header-logo" className='mw-100 w-25' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={CustomLink} to="/home">Home </Nav.Link>
                            <Nav.Link as={CustomLink} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={CustomLink} to="/About">About</Nav.Link>
                            {user ? <button className='rounded-pill bg-danger  text-white border-0 px-2' onClick={()=>{signOut(auth);}}>Sign Out</button> : <Nav.Link as={CustomLink} to="/login">Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
       </div>
    );
};

export default Header;