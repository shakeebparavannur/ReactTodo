import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const AddTask = ({inputRef,addTasks}) => {
    const setTask = (e) => {
        e.preventDefault();
        addTasks(inputRef.current.value);
        inputRef.current.value = '';
      };
  return (
    <div>
        <Form onSubmit={setTask}>
            <Row>
            <Col md={8}>
                <Form.Control type="text" required name="task" placeholder="Enter task" ref={inputRef} />
              </Col>
              <Col md={4}>
                <Button variant="primary" type="submit" className="w-100">
                  Add
                </Button>
              </Col>
            </Row>
      {/* <input type = 'text' required ref={inputRef}></input>
      <button type = 'submit' >Submit</button> */}
        </Form>
    </div>
  )
}

export default AddTask
