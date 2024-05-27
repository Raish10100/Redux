import { useEffect, useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

function App() {

  const [list, setList] = useState([
    { id: 1, todoData: "todo 1", finished: false },
    { id: 2, todoData: "todo 2", finished: true },
])


  return (
    <>
        <AddTodo  updateList={(todo) => setList([...list, {id: list.length + 1, todoData: todo, finished: false }])} />
        <TodoList list={list} updateList={setList} />
    </>
  )
}

export default App
