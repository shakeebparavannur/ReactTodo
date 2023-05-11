import React, { useReducer, useRef } from "react";
import ListTask from "./ListTask";
import AddTask from "./AddTask";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const reducer = (state, action) => {
  switch (action.action) {
    case "addTask":
      return [...state, createTask(action.target)];
    case "removeTask":
      return state.filter((t) => action.id !== t.id);
    case "complete":
      state.map((t) => {
        if (t.id === action.id) {
          t.status = !t.status;
          return t;
        }
      });
      return [...state];
    default:
      return state;
  }
};
function createTask(name) {
  const newTask = { id: Date.now(), name: name, status: false };
  return newTask;
}
const Todo = () => {
  const [task, dispatch] = useReducer(reducer, []);
  const inputRef = useRef(null);
  const addTasks = (name) => {
    dispatch({ action: "addTask", target: name });
  };
  const removeTasks = (id) => {
    dispatch({ action: "removeTask", id: id });
  };
  const completeTask = (id) => {
    dispatch({ action: "complete", id: id });
  };

  return (
  <Container className="my-5">
    <Row>
        <Col>
        <h1 className="text-center mb-5">Todo List</h1>
        <AddTask inputRef={inputRef} addTasks={addTasks} />
        </Col>
    </Row>
    <Row className="mt-5">
        <Col>
    <ListTask removeTasks={removeTasks} completeTask={completeTask} task= {task}  />
        </Col>
    </Row>
  </Container>
)};

export default Todo;
