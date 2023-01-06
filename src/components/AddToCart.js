import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const AddToCart = () => {

  const getdata = useSelector((state)=>state.cartReducer.carts);
  console.log(getdata);

  return (
    <>
        <div className='container mt-3'>
          <Table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Restaurant</th>
              </tr>
            </thead>
            <tbody>
              {
                getdata.map((e)=>{
                  return(
                    <>
                    <tr>
                      <td>
                        <img src={e.imgdata} style={{height:"6rem",width:"10rem"}} />
                      </td>
                      <td>
                        <p>{e.rname}</p>
                        <p>Price : {e.price}</p>
                        <p>Quantity : {e.qnty}</p>
                        <p><i className='fas fa-trash text-danger' style={{cursor:"pointer"}}></i></p>
                      </td>
                    </tr>
                    </>
                  )
                })
              }
            </tbody>
          </Table>
        </div>
        
    </>
  )
}

export default AddToCart