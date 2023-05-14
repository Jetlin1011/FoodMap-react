import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Restaurant.css'
import { Link } from 'react-router-dom';

function Restaurant() {

  const [restList, setRest] = useState([])
  const getData = async () => {
    const result = await fetch('/restaurants.json')
    result.json().then(data => setRest(data.restaurants))
  }
  console.log(restList)
  // calling funtion at the start of the component loading
  useEffect(() => {
    getData();
  }, [])

  return (
 <div className='d-flex align-items-center justify-content-evenly mt-5'>
      <Row className='container me-2 text-center my-3 '>
  
        {
          restList.map(data => (
            <Col id='col' className='my-4 ' lg={4} md={6}>
             <Link id="link" to={`/view/${data.id}`}>
                <Card className='bg-light shadow-lg' style={{ width: '18rem' }}>
                  <Card.Img style={{height:'350px'}} variant="top" src={data.photograph} />
                  <Card.Body className='bg-light'>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>
                     {data.address}
                    </Card.Text>
                  </Card.Body>
                </Card>
             </Link>
            </Col>
          ))
        }
      </Row>
 </div>

  )
}

export default Restaurant