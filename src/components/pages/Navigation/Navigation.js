import React from "react";
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>
            <img
              src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
              width='30'
              height='30'
              className='d-inline-block align-top'
              alt='React Bootstrap logo'
            />
          </Navbar.Brand>
          <Navbar.Brand href='#home'>Block of Stack</Navbar.Brand>
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
              <Nav.Link href='#deets'>More deets</Nav.Link>
              <Nav.Link eventKey={2} href='#memes'>
                Dank memes
              </Nav.Link>
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
