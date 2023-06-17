import { useState } from "react";
import Home from "./views/Home";
import TodoList from "./views/TodoList";
import TodoListv2 from "./views/TodoListv2";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Home />
      <TodoList />
      <TodoListv2 />
    </div>
  );
}

export default App;
