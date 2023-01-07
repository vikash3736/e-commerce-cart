import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <>
    <div className='container mt-3'>
        <h2>Cart is Empty</h2>
        <NavLink to="/"><Button>Home</Button></NavLink>
    </div>
    </>
  )
}

export default EmptyCart