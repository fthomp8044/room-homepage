import React from 'react'
import { Navbar, Nav, Container, Row, NavDropdown} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


function Header() {
    return (
        <header>
            <Nav defaultActiveKey="/" as="ul">
                <Nav.Item as="li">
                <LinkContainer to='/'>
                    <Nav.Link>Active</Nav.Link>
                </LinkContainer>
                </Nav.Item>
                <Nav.Item as="li">
                <LinkContainer to='/'>
                     <Nav.Link>home</Nav.Link>
                </LinkContainer>
                </Nav.Item>        
                <Nav.Item as="li">
                <LinkContainer to='/shop'>
                    <Nav.Link>shop</Nav.Link>
                </LinkContainer>
                </Nav.Item>
                <Nav.Item as="li">
                <LinkContainer to='/about'>
                    <Nav.Link>about</Nav.Link>
                </LinkContainer>
                </Nav.Item>
                <Nav.Item as="li">
                <LinkContainer to='/contact'>
                     <Nav.Link>contact</Nav.Link>
                </LinkContainer>
                </Nav.Item>
            </Nav>             
        </header>
    )
}

export default Header;
