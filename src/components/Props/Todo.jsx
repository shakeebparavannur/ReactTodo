import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AddTask from "./AddTask";
import ListTasks from "./ListTask";
// import ListTasks from "./ListTasks";
// import ListTask from "../ListTask";
import "./Todo.css";

const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = [...tasks, { title }];
    console.log(title)
    setTasks(newTask);
  };

  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };

  return (
    <>
      <div className="todo-container">
        <div className="header">TODO APP</div>
        <div className="add-task">
          <AddTask addTask={addTask} />
        </div>
        <div className="tasks">
          {tasks.map((task, index) => (
            <ListTasks
              task={task}
              removeTask={removeTask}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;