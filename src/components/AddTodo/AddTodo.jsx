import { useContext, useState } from "react";
import TodoDispatchContext from "../../context/TodoDispatchContext";

function AddTodo() {
  const [inputText, setInputText] = useState("");
  const {dispatch} = useContext(TodoDispatchContext)

  return (
    <>
      <input
        type="text"
        placeholder="Add todo here..."
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <button onClick={() => {
               dispatch({type: 'add_todo', payload: {todoText: inputText}})
                setInputText("")
            }
            }
             >Add</button>
    </>
  );
}

export default AddTodo;
