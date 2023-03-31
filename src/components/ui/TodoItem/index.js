import DeleteICon from "../../../assets/icons/DeleteIcon";
import MoveIcon from "../../../assets/icons/MoveIcon";
import Todos from "../../../logic/todos";

export default function TodoItem({ task, update }) {
  const completed = task.completed ? " completed" : "";
  const removeTodo = () => {
    Todos.removeData(String(task.index), false);
    update(Todos.listData());
  };
  const handleChange = (e) => {
    Todos.updateData(task.index, { completed: !task.completed });
    update(Todos.listData());
  };
  const onEdit = (e) => {
    if (e.code !== "Enter") return;
    e.target.innerText = e.target.textContent;
    const todoText = window.getSelection();
    todoText.selectAllChildren(e.target);
    todoText.collapseToEnd();
    Todos.updateData(task.index, { description: e.target.innerText });
    update(Todos.listData());
  };
  return (
    <article className={`todo-item${completed}`}>
      <div className="item-wrapper">
        <div className="todo">
          <label className="todo-check">
            <input
              type="checkbox"
              data-id={task.index}
              onChange={handleChange}
              defaultChecked={task.completed || task.selected ? "" : false}
            />
            <span className="checkmark"></span>
          </label>
          <div
            contentEditable
            className="todo-title"
            onInput={onEdit}
            onPaste={onEdit}
            onKeyUp={onEdit}
            onBlur={onEdit}
            suppressContentEditableWarning
          >
            {task.description}
          </div>
        </div>
        <div className="more">
          <div className="move link">
            <MoveIcon />
          </div>
          <div className="delete link" onClick={removeTodo}>
            <DeleteICon />
          </div>
        </div>
      </div>
    </article>
  );
}
