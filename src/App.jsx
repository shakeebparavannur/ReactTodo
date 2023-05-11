import { useState } from 'react'
import Navbar from './components/Navbar'
import TodoInput from './components/TodoInput'
// import ToDo from './components/ToDo'
// import Todo from './components/Props/Todo'
// import ListTask from './components/ListTask'
import './App.css'
import Todo from './components/Reducer/Todo'
import 'bootstrap/dist/css/bootstrap.min.css';
import Reducer from './components/Reducer'
import ReducerTodo from './components/ReducerTodo'
// import ToDo from './components/ToDo'
// import ReducerTask from './components/Reducer/ReducerTask'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Todo/> */}
    {/* <ReducerTask/> */}
    <ReducerTodo/>
    {/* <ToDo/> */}
    {/* <Reducer/> */}
      {/* <Navbar/> */}
      {/* <ToDo/> */}
      {/* <TodoInput/> */}
      {/* <ListTask/> */}
        
    </>
  )
}

export default App
