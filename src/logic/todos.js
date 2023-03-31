export default class Todos {
  static todo = "todos-todo-list-react-veronica365-2023";

  static setTodo(todos) {
    const newTodos = JSON.stringify(todos);
    localStorage.setItem(this.todo, newTodos);
  }

  static addData(todo) {
    const todos = this.listData();
    todos.push(todo);
    this.setTodo(todos);
  }

  static listData() {
    const todos = JSON.parse(localStorage.getItem(this.todo));
    return todos || [];
  }

  static removeData(id = "", allCompleted = false) {
    let todos = this.listData();
    if (allCompleted) {
      todos = todos.filter((todo) => !todo.completed);
      todos = todos.map((item, counter) => ({ ...item, index: counter + 1 }));
      return this.setTodo(todos);
    }

    todos = todos.filter((todo) => String(todo.index) !== id);
    todos = todos.map((item, counter) => ({ ...item, index: counter + 1 }));
    return this.setTodo(todos);
  }

  static updateData(counter, newDetails) {
    let todos = this.listData();
    todos = todos.map((item) => {
      if (item.index === counter) {
        item = { ...item, ...newDetails };
      }
      return item;
    });
    this.setTodo(todos);
  }
}
