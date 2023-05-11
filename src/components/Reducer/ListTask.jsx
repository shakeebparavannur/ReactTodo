import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { BsFillClipboardCheckFill,BsFillCheckSquareFill } from 'react-icons/bs';

const ListTask = ({ task, removeTasks, completeTask }) => {
  return (
    <div>
      {task.map((t) => {
        return (
          <div
            key={t.id}
            className="my-3 py-3 px-4 bg-white shadow-sm rounded d-flex align-items-center justify-content-between"
          >
            <h4 className={`mb-0 ${t.status ? "text-success" : "text-danger"}`}>
              {t.status && (
                <BsFillCheckSquareFill className="bi bi-check2-circle me-2" />
              )}
              {t.name}
            </h4>
            <Button variant= {t.status?"primary":"success"} 
              onClick={() => {
                completeTask(t.id);
              }}
            >
               {t.status ? 'Incomplete' : 'Complete'}
            </Button>
            <Button variant="danger"
            className="ms-2"
              onClick={() => {
                removeTasks(t.id);
              }}
            >
              remove
            </Button>
          </div>
        );
      })}
    </div>
  );
};
export default ListTask;
