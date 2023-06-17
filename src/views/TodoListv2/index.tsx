import { createContext, useState } from "react";
import List from "./List";
import ListAdd from "./ListAdd";
import TestList from "./TestList";
export const TodoListContext = createContext<{
  inputVal: string;
  setInputVal(val: string): void;
  todoList: string[];
  handleAddTodo(): void;
  handleRemove(todo: string): void;
} | null>(null);

const TodoListv2 = () => {
  const [inputVal, setInputVal] = useState("");

  const [todoList, setTodoList] = useState<string[]>([]);

  const handleAddTodo = () => {
    setTodoList([...todoList, inputVal]);
  };

  const handleRemove = (todo: string) => {
    const newTodoList = todoList.filter((list) => list !== todo);
    setTodoList(newTodoList);
  };

  return (
    <TodoListContext.Provider
      value={{ todoList, inputVal, setInputVal, handleAddTodo, handleRemove }}
    >
      <ListAdd />
      <List />
      <TestList />
    </TodoListContext.Provider>
  );
};
export default TodoListv2;
