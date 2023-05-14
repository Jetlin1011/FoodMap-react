import React, { useEffect, useState } from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import OperatingTime from './OperatingTime';
import Review from './Review';


function ViewRest() {

    //create object for useparams
    const params=useParams();

const [restList, setRest]=useState([])


const getData=async()=>{
    const result= await fetch('/restaurants.json')
    result.json().then(i=>setRest(i.restaurants))
 
}
const viewRest= restList.find(i=>i.id==params.id)
console.log(viewRest)

// console.log(restList)
useEffect(()=>{
    getData();
},[])



  return (
    <div>
        {
            viewRest?(
                <Row className='m-0'>
            <Col className='' lg={5} md={6} sm={12}>
                 <img className='  my-5' style={{height:'600px',width:'100%',padding:'5p'}}  src={viewRest.photograph} alt="" />
            </Col>
            <Col className='d-flex align-items-center justify-content-center ' lg={5} md={5} sm={12}>
            <ListGroup className='bg-light' style={{ width:'90%'}} >
      <ListGroup.Item  className='d-flex align-items-center justify-content-center  my-3 text-center'><h1 className='text-danger fw-bolder '>{viewRest.name}</h1></ListGroup.Item>
      <ListGroup.Item>Address: <strong>{viewRest.address}</strong></ListGroup.Item>
      <ListGroup.Item>Neighborhood: <strong>{viewRest.neighborhood}</strong></ListGroup.Item>
      <ListGroup.Item>Cuisine Type: <strong>{viewRest.cuisine_type}</strong></ListGroup.Item>
      <ListGroup.Item className='text-center'>
                <OperatingTime timing={viewRest.operating_hours}/>
                <Review reviewList={viewRest.reviews}/>
      </ListGroup.Item>
    </ListGroup>
            </Col>
        </Row>
            ):""
        }
    </div>
  )
}

export default ViewRest