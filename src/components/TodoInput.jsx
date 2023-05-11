import React, { useRef, useState } from "react";
import { Table, Button, Form, Row, Col, Container } from "react-bootstrap";

function TodoInput() {
  const [todo, setTodo] = useState([]);
  const todoRef = useRef(null);

  const setTask = (e) => {
    e.preventDefault();
    setTodo([...todo, { id: todo.length + 1, name: todoRef.current.value }]);
    todoRef.current.value = "";
  };

  const removeTask = (id) => {
    const newTodo = todo.filter((task) => task.id !== id);
    setTodo(newTodo);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Form onSubmit={setTask}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Enter Your Task"
                  required
                  ref={todoRef}
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((task, index) => {
            return (
              <tr>
                <td>{task.id}</td>
                <td>{task.name}</td>
                <td>
                  <Button variant="danger" onClick={() => removeTask(task.id)}>
                    Remove
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default TodoInput;
