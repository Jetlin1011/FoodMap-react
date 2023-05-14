import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';


function OperatingTime({timing}) {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
         <Button className='fixed-bottom text-center' variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header className='text-center' closeButton>
          <Modal.Title>Restaurant Timings</Modal.Title>
        </Modal.Header>
        <Modal.Body>  </Modal.Body>
        <ListGroup>
      <ListGroup.Item>Monday: {timing.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday: {timing.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday:{timing.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursaday: {timing.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday: {timing.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday: {timing.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday: {timing.Sunday}</ListGroup.Item>

    </ListGroup>
      </Modal>
    </div>
  )
}

export default OperatingTime