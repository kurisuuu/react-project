import { useContext } from "react";
import { TodoListContext } from "./index";
const List = () => {
  console.log("list render");
  const listCtx = useContext(TodoListContext);
  return (
    <>
      <div>
        {listCtx?.todoList.map((list) => {
          return (
            <div key={list}>
              {list}{" "}
              <button onClick={() => listCtx.handleRemove(list)}>删除</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default List;
