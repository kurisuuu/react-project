import React, { useContext } from "react";
import { TodoListContext } from "./index";
const ListAdd = () => {
  console.log("listAdd render");

  const listCtx = useContext(TodoListContext);

  const handleValChange = (e: React.FormEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    listCtx?.setInputVal(val);
  };

  const handleAdd = () => {
    listCtx?.handleAddTodo();
    listCtx?.setInputVal("");
  };

  return (
    <>
      <div>
        <div>
          <input
            type="text"
            value={listCtx?.inputVal}
            onChange={(e) => handleValChange(e)}
          />
          <button onClick={handleAdd}>添加</button>
        </div>
      </div>
    </>
  );
};
export default ListAdd;
