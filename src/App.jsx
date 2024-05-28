import './App.css'
import AddTodo from './components/AddTodo/AddTodo'

import TodoList from './components/TodoList/TodoList'

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, deleteTodo, editTodo, finishTodo} from './slices/todoSlice';
function App() {
  const dispatch = useDispatch();
  const actions = bindActionCreators({ addTodo, deleteTodo, editTodo, finishTodo}, dispatch);
  return (
   <>
        <AddTodo addTodo={actions.addTodo} />
        <TodoList deleteTodo={actions.deleteTodo} editTodo={actions.editTodo} finishTodo={actions.finishTodo} />
   </>
  ) 
}

export default App
