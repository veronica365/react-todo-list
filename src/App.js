import { useState } from "react";
import Todos from "./logic/todos";
import TodoLayout from "./components/hoc";
import TodoHeader from "./components/ui/TodoHeader";
import TodoForm from "./components/ui/TodoForm";
import TodoItem from "./components/ui/TodoItem";

function App() {
  const [todos, setTodos] = useState(Todos.listData());
  const handleSetTodos = (newTodos) => setTodos(newTodos);
  const clearCompleted = () => {
    Todos.removeData("", true);
    setTodos(Todos.listData());
  };
  return (
    <TodoLayout handleClearCompleted={clearCompleted}>
      <TodoHeader />
      <TodoForm update={handleSetTodos} />
      {todos.map((task) => (
        <TodoItem key={task.index} task={task} update={handleSetTodos} />
      ))}
    </TodoLayout>
  );
}

export default App;
