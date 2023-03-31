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
    console.log("handleChange", e.target.value);
  }
  return (
    <article className={`todo-item${completed}`}>
      <div className="item-wrapper">
        <div className="todo">
          <label className="todo-check">
            <input
              type="checkbox"
              data-id={task.index}
              onChange={handleChange}
              checked={task.completed || task.selected ? "checked" : ""}
            />
            <span className="checkmark"></span>
          </label>
          <div className="todo-title" data-id={task.index} contentEditable>
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
