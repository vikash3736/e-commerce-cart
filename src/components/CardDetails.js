import React from 'react'
import { Table } from 'react-bootstrap'

const CardDetails = () => {
  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Card Details Page</h2>
      <div className='container mt-3 d-flex justify-content-center align-items-center shadow p-3 mb-5 bg-white rounded'>
        <div className='p-2'>
          <img src='https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp'style={{height:"45vh",width:"30vw"}} />
        </div>
        <div className='p-2'>
          <Table>
            <tr>
              <td>
                <p><strong>Restaurant : </strong>Massala Theoryy</p>
                <p><strong>Price : </strong>350</p>
                <p><strong>Details : </strong>North Indian, Biryani, Mughlai</p>
                <p><strong>Total : </strong>350</p>
              </td>
              <td>
                <p><strong>Ratings : </strong><span className='bg-success text-light p-1'>3.6★</span></p>
                <p><strong>Order Review : </strong>1175 + order placed from here recently</p>
                <p><strong>Remove : </strong><i className='fas fa-trash text-danger' style={{cursor:"pointer"}}></i></p>
              </td>
            </tr>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default CardDetails