import React, { useReducer, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { BsFillClipboardCheckFill,BsFillCheckSquareFill } from 'react-icons/bs';

const reducer = (state, action) => {
  switch (action.action) {
    case 'addTask':
      return [...state, createTask(action.target)];
    case 'removeTask':
      return state.filter((t) => action.id !== t.id);
    case 'complete':
      state.map((t) => {
        if (t.id === action.id) {
          t.status = !t.status;
          return t;
        }
      });
      return [...state]
    default:
      return state;
  }
};

function createTask(name) {
  const newTask = { id: Date.now(), name: name, status: false };
  return newTask;
}

function ReducerTodo() {
  const [task, dispatch] = useReducer(reducer, []);
  const inputRef = useRef(null);

  const setTask = (e) => {
    e.preventDefault();
    dispatch({ action: 'addTask', target: inputRef.current.value });
    inputRef.current.value = '';
  };

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center mb-5">Todo List</h1>
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
          </Form>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
        {task.map((t) => {
  return (
    <div key={t.id} className="my-3 py-3 px-4 bg-white shadow-sm rounded d-flex align-items-center justify-content-between">
      <h4 className={`mb-0 ${t.status ? 'text-success' : 'text-danger'}`}>
        {t.status && <BsFillCheckSquareFill className="bi bi-check2-circle me-2"/> }
        {t.name}
      </h4>
      <div>
        <Button variant="danger" onClick={() => dispatch({ action: 'removeTask', id: t.id })}>
          Remove
        </Button>
        <Button variant= {t.status?"primary":"success"}  className="ms-2" onClick={() => dispatch({ action: 'complete', id: t.id })}>
          {t.status ? 'Incomplete' : 'Complete'}
        </Button>
      </div>
    </div>
  );
})}
        </Col>
      </Row>
    </Container>
  );
}

export default ReducerTodo;
// 1580402323