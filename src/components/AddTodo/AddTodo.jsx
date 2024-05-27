import { useState } from "react";

function AddTodo({ updateList }) {
  const [inputText, setInputText] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Add todo here..."
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <button onClick={() =>
               { updateList(inputText)
                setInputText("")}
            }
             >Add</button>
    </>
  );
}

export default AddTodo;
