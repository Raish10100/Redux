import { useContext, useState } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";

function TodoList({}){

    const {list, setList} = useContext(TodoContext)
  

    return (
        <div>
            { list.length > 0 && list.map(todo => <Todo
                                                        key={todo.id} 
                                                        isFinished= {todo.finished} 
                                                        todoData = {todo.todoData} 
                                                        id={todo.id}
                                                        changeFinished={(isFinished) => {
                                                            const updateList = list.map(t => {
                                                                if(t.id == todo.id) {
                                                                    todo.finished = isFinished; 
                                                                }
                                                                return t;
                                                            })
                                                            setList(updateList)
                                                        }}
                                                        onDelete={() => {
                                                            const updatedList = list.filter(t => t.id != todo.id);
                                                            setList(updatedList);
                                                        }}
                                                        onEdit={(todoText) => {
                                                            const updatedList = list.map(t => {
                                                                if(t.id == todo.id) {
                                                                    todo.todoData = todoText;
                                                                }
                                                                return t;
                                                            });
                                                            setList(updatedList);
                                                        }}
                                                  />)}
        </div>
    )
}

export default TodoList;