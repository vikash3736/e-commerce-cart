import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <>
      <div className='container mt-5 d-flex justify-content-center align-item-center'>
        <div className='shadow-lg p-5 mb-5 bg-white rounded'>
          <h2 style={{fontSize:"32px"}} className='text-danger'>Cart is Empty<i class="fa-solid fa-cart-shopping mx-3" style={{ fontSize:"32px" }}></i></h2>
          <NavLink to="/"><Button className='m-3' variant='outline-primary'>Home</Button></NavLink>
        </div>
      </div>
    </>
  )
}

export default EmptyCart