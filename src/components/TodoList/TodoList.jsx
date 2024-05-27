import { useState } from "react";
import Todo from "../Todo/Todo";

function TodoList({list}){

  

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
                                                        }}
                                                  />)}
        </div>
    )
}

export default TodoList;