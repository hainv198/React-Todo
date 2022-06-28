import React from 'react';
import './layout.css'
import { Outlet } from 'react-router-dom';
import {  NavLink } from 'react-router-dom';
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//     <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="me-auto">
//                 <Nav.Link href="#features">Features</Nav.Link>
//                 <Nav.Link href="#pricing">Pricing</Nav.Link>
//                 <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                     <NavDropdown.Item href="#action/3.2">
//                         Another action
//                     </NavDropdown.Item>
//                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="#action/3.4">
//                         Separated link
//                     </NavDropdown.Item>
//                 </NavDropdown>
//             </Nav>
//             <Nav>
//                 <Nav.Link href="#deets">More deets</Nav.Link>
//                 <Nav.Link eventKey={2} href="#memes">
//                     Dank memes
//                 </Nav.Link>
//             </Nav>
//         </Navbar.Collapse>
//     </Container>
// </Navbar>



const Layout = () => {
    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <div>
                        <img src={'<img src={\'\'} alt=""/>\n'} alt=""/>
                    </div>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{width:'100%'}}>
                        <Nav >
                            <Nav.Link as={NavLink} to="/" exact>
                                Home
                            </Nav.Link>

                            <Nav.Link as={NavLink} to="/new">
                                New
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/" exact>
                                Products
                            </Nav.Link>

                            <Nav.Link as={NavLink} to="/contact">
                                Contact
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/about" exact>
                                About
                            </Nav.Link>
                        </Nav>
                    </Navbar>
                </Col>

            </Row>
            <Outlet />

        </Container>
    );
};

export default Layout;
