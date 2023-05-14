import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './Review.css'

function Review({reviewList}) {
  return (
    <div className='my-4'>
        <Accordion defaultActiveKey="0">
    <Accordion.Item className='text-start'  eventKey="0">
      <Accordion.Header ><h5> Reviews</h5></Accordion.Header>
      <Accordion.Body>
       {
        reviewList.map(i=>
            <div>
    <h6>{i.name}</h6>
     <p>{i.date}</p>
     <h4>{i.rating}</h4>
    <p>{i.comments}</p> 
<hr  />
            </div> )
       }
      </Accordion.Body>
    </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default Review