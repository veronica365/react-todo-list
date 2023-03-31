import Todos from "./logic/todos";
import TodoLayout from "./components/hoc";
import TodoHeader from "./components/ui/TodoHeader";
import TodoForm from "./components/ui/TodoForm";
import TodoItem from "./components/ui/TodoItem";

function App() {
  const todos = Todos.listData();
  return (
    <TodoLayout>
      <TodoHeader />
      <TodoForm />
      {todos.map((task) => (
        <TodoItem key={task.inde} task={task} />
      ))}
    </TodoLayout>
  );
}

export default App;
