
import React from 'react';
import './Navbar.css';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
//import Button from 'react-bootstrap/lib/Button';
//import ProfilePic from '../../assets/images/ProPicture.jpg';


const NavBar = (props) =>



  <Navbar className="Navbar" inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a className='brand' href="/#/">Melinda Russell</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} className='link' href="/#/portfolio">
          Portfolio
      </NavItem>
        <NavItem eventKey={2} className='link' href="/#/resume">
          Resume
      </NavItem>
        <NavItem eventKey={3} className='link' href="/#/about">
          About
      </NavItem>
        <NavItem eventKey={4} className='link' href="/#/contact">
          Contact
      </NavItem>

      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="https://github.com/MelRuss0714">
          <i className="fab fa-github"></i>
        </NavItem>
        <NavItem eventKey={2} href="www.linkedin.com/in/melinda-russell-webdeveloper">
          <i className="fab fa-linkedin"></i>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>



export default NavBar;