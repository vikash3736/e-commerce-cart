import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import { useSelector } from 'react-redux';
// import MenuItem from '@mui/material/MenuItem';

const Header = () => {

    const getdata = useSelector((state)=>state.cartReducer.carts);
    // console.log(getdata)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Navbar bg="primary" variant="dark" style={{ height: "10vh" }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-3">E-Comm</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light mx-3">Home</NavLink>
                        <NavLink to="/cart" className="text-decoration-none text-light mx-3">Cart Details</NavLink>
                        <NavLink to="/addtocart" className="text-decoration-none text-light mx-3">Add To Cart</NavLink>
                    </Nav>
                    <Badge badgeContent={getdata.length} color="warning"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 22, cursor: "pointer" }}></i>
                    </Badge>
                </Container>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    >

                    {
                        getdata.length ? 
                        <div style={{width:"8vw"}} className="text-center">
                            <NavLink to='/addtocart' onClick={handleClose}>
                                <Button variant="outline-primary">View Cart</Button>
                            </NavLink>
                        </div>
                        :
                        <div className='d-flex justify-content-center align-items-center' style={{width:"15vw",position:"relative",padding:"3px"}}>
                        <i className='fas fa-close' style={{position:"absolute",top:9,right:20,fontSize:22,cursor:"pointer"}}
                        onClick={handleClose}></i>
                        <p style={{fontSize:20,color:"red"}}>Cart is Empty</p>
                    </div>
                    }                
                    
                </Menu>
            </Navbar>
        </>
    )
}

export default Header