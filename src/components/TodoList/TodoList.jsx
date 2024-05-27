import { useContext, useState } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";

function TodoList({}){
    const {list, setList} = useContext(TodoContext);


    function onFinished(todo, isFinished) {
        
                const updateList = list.map(t => {
                    if(t.id == todo.id) {
                        todo.finished = isFinished; 
                    }
                    return t;
                })
                setList(updateList)
    };

    function onDelete(todo) {
        const updatedList = list.filter(t => t.id != todo.id)
        setList(updatedList);
    }

    function onEdit(todo, todoText) {
        const updatedList = list.map(t => {
            if(t.id == todo.id) {
                todo.todoData = todoText;
            }
            return t;
        });
        setList(updatedList);
    }


    return (
        <div>
            { list.length > 0 && list.map(todo => <Todo
                                                        key={todo.id} 
                                                        isFinished= {todo.finished} 
                                                        todoData = {todo.todoData} 
                                                        id={todo.id}
                                                        changeFinished={(isFinished) => onFinished(todo, isFinished)}
                                                        onDelete={() => {onDelete(todo)}}
                                                        onEdit={(todoText) => {onEdit(todo, todoText)}}
                                                  />)}
        </div>
    )
}

export default TodoList;