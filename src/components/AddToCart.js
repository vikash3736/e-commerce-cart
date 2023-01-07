import React, {useEffect, useState} from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {REMOVE} from '../redux/actions/action.js';
import EmptyCart from './EmptyCart.js';

const AddToCart = () => {

  const dispatch = useDispatch();

  const remove =(id)=>{
    dispatch(REMOVE(id));
  }

  const getdata = useSelector((state) => state.cartReducer.carts);
  console.log(getdata);

  const [price,setPrice] = useState(0);
  console.log(price);

  const total =() =>{
    let price = 0;
    getdata.map((ele,k)=>{
      price = price + ele.price;
    })
    setPrice(price);
  }

  useEffect(()=>{
    total();
  },[total])

  return (
    <>{
      getdata.length ?
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
              getdata.map((e) => {
                return (
                  <>
                    <tr>
                      <td>
                        <NavLink to={`/cart/${e.id}`}>
                          <img src={e.imgdata} style={{ height: "6rem", width: "10rem" }} alt="" />
                        </NavLink>
                      </td>
                      <td>
                        <p>{e.rname}</p>
                        <p>Price : {e.price}</p>
                        <p>Quantity : {e.qnty}</p>
                        <p onClick={()=>remove(e.id)}><i className='fas fa-trash text-danger' style={{ cursor: "pointer" }}></i></p>
                      </td>
                    </tr>
                  </>
                )
              })
            }
            <p className='text-center mt-3'>Total Price : <b>₹ {price}</b></p>
          </tbody>
        </Table>
      </div>
       : 
      <EmptyCart />
    }
      

    </>
  )
}

export default AddToCart