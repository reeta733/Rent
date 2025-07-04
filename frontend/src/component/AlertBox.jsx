import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const AlertBox = ({show, title, body, closeAlert, lable, nav}) => {
  let navigate = useNavigate();
  // demo(true)
  return (
    <Modal show={show} >
            <Modal.Header>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            <Modal.Footer>
              <Button onClick={()=>closeAlert(false)} variant="secondary">
                Close
              </Button>
              <Button onClick={()=>navigate(nav)} variant="primary" >
                {lable}
              </Button>
            </Modal.Footer>
          </Modal>
  )
}

export default AlertBox