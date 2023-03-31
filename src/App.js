import TodoLayout from "./components/hoc";
import TodoHeader from "./components/ui/TodoHeader";
import TodoForm from "./components/ui/TodoForm";
import TodoItem from "./components/ui/TodoItem";

function App() {
  return (
    <TodoLayout>
      <TodoHeader />
      <TodoForm />
      <TodoItem task={{}} />
    </TodoLayout>
  );
}

export default App;
