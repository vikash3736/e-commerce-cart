import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {REMOVE} from '../redux/actions/action.js';

const CardDetails = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const remove = (id)=>{
    dispatch(REMOVE(id));
    navigate('/addtocart');
  }

  const [data, setData] = useState([]);

  const {id} = useParams();

  const getdata = useSelector((state) => state.cartReducer.carts);

  const compData = () => {
    let compFinalData = getdata.filter((e) => {
      return e.id == id
    });
    setData(compFinalData)
  };

  useEffect(()=>{
    compData();
  },[id]);

  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Card Details Page</h2>
      {
        data.map((ele) => {
          return (
            <>
              <div key={ele.id} className='container mt-3 d-flex justify-content-center align-items-center shadow p-3 mb-5 bg-white rounded'>
                <div className='p-2'>
                  <img src={`${ele.imgdata}`} style={{ height: "45vh", width: "30vw" }} alt="" />
                </div>
                <div className='p-2'>
                  <Table>
                    <tr>
                      <td>
                        <p><strong>Restaurant : </strong>{ele.rname}</p>
                        <p><strong>Price : </strong>{ele.price}</p>
                        <p><strong>Details : </strong>{ele.address}</p>
                        <p><strong>Total : </strong>350</p>
                      </td>
                      <td>
                        <p><strong>Ratings : </strong><span className='bg-success text-light p-1'>{ele.rating}★</span></p>
                        <p><strong>Order Review : </strong>{ele.somedata}</p>
                        <p onClick={()=>remove(ele.id)}><strong>Remove : </strong><i className='fas fa-trash text-danger' style={{ cursor: "pointer" }}></i></p>
                      </td>
                    </tr>
                  </Table>
                </div>
              </div>
            </>
          )
        })
      }
    </div>
  )
}

export default CardDetails