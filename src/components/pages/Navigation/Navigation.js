import React from "react";
import {Link, NavLink} from "react-router-dom";
import {Navbar, Container, Nav /* NavDropdown */} from "react-bootstrap";
import logo from "../../../img/logo/logo.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>
            {/* <img
             
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
              alt='React Bootstrap logo'
            /> */}
            <div className='App'>
              <header>
                <Link to='/'>
                  <img src={logo} className='App-logo logo-sizing' alt='logo' />
                </Link>
              </header>
            </div>
          </Navbar.Brand>
          <Link to='/' style={{textDecoration: "none"}}>
            <Navbar.Brand>Block of Stack</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              {/* <Nav.Link href='#features'>One</Nav.Link>
              <Nav.Link href='#pricing'>Tow</Nav.Link>
              <NavDropdown title='More link' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Drop 1</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>Drop 2</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>Drop 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  importent link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link>
                <NavLink
                  to='/courses'
                  className={({isActive}) =>
                    isActive ? "active" : "nonActive"
                  } style={{textDecoration: "none"}}
                >
                  Courses
                </NavLink>
              </Nav.Link>
              <Nav.Link eventKey={2}>
                <NavLink
                  to='resources'
                  className={({isActive}) =>
                    isActive ? "active" : "nonActive"
                  } style={{textDecoration: "none"}}
                >
                  Resources
                </NavLink>
              </Nav.Link>
              <Nav.Link eventKey={3}>App</Nav.Link>
            </Nav>
            <img
              src='https://scontent.fdac5-2.fna.fbcdn.net/v/t1.6435-9/179147689_1191143821334064_332752836185178183_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=S4fFKQaULQUAX8-G3hG&tn=otq2IQjy5H9wdSX3&_nc_ht=scontent.fdac5-2.fna&oh=00_AT93FEw4DARfA0tCLsMBNE5uhEYzUOcmJZK4oCMRCDUcpA&oe=62CB9451'
              width='40'
              height='40'
              className='d-inline-block align-top, border rounded-circle'
              alt='React Bootstrap logo'
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
