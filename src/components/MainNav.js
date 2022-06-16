import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap';
import { Navbar, Nav, NavDropdown, Container, Modal, Tab } from 'react-bootstrap';
import '../css/MainNav.css';

const navStyle = {
    backgroundColor: '#063049',
    height: 100,
    fontSize: 20,
    width: '1vp',
}


const MainNav = () => {

    return (
            <Navbar expand="lg"  variant="dark" style={ navStyle }>

                <Container >
                    <Navbar.Brand href="#home" class="ml-5 textWhite" style={{fontSize: 25}}>Ben Powell's Coding Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto lm-5" >
                            <Link to="/"><Nav.Link href="#home" >Home</Nav.Link></Link>
                            <Link to="/aboutMe"><Nav.Link href="#link">About Me</Nav.Link></Link>
                            <Link to="/projects"><Nav.Link href="#link">My Projects</Nav.Link></Link>
                            <Link to="/resume"><Nav.Link href="#link">Resume</Nav.Link></Link>
                            <Link to="/contactInfo"><Nav.Link href="#link">Contact Info</Nav.Link></Link>
                            {/* If I need a dropdown later:
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default MainNav;