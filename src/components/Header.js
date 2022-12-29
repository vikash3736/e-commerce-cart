import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';

const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">E-Comm</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#home">Add To Cart</Nav.Link>
                    </Nav>
                    <Badge badgeContent={4} color="warning">
                    <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 22, cursor: "pointer" }}></i>
                    </Badge>
                </Container>
            </Navbar>
        </>
    )
}

export default Header