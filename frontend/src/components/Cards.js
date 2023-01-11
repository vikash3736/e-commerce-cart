import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import CardData from './CardData.js';
import {ADD} from '../redux/actions/action.js';

const Cards = () => {

  const dispatch = useDispatch();

  const send = (e)=>{
    // console.log(e);
    dispatch(ADD(e));
  }

  const [data, setData] = useState(CardData);

  return (
    <div className='container mt-3'>
      {/* <h2 style={{textAlign:"center"}}>Add To Cart Project</h2> */}
      <div className='row d-flex justify-content-center align-items-center'>
        {
          data.map((element, id) => {
            return (
              <>
                <Card style={{ width: '18rem', border:"none"}} className="p-2">
                  <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                      Price : ₹ {element.price}
                    </Card.Text>
                    <Button onClick={()=>send(element)} variant="primary" style={{width:"100%"}}>Add To Cart</Button>
                  </Card.Body>
                </Card>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cards