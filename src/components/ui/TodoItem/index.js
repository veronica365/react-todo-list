import PropTypes from 'prop-types';
import DeleteICon from '../../../assets/icons/DeleteIcon';
import MoveIcon from '../../../assets/icons/MoveIcon';
import Todos from '../../../logic/todos';

export default function TodoItem({ task, update }) {
  const completed = task.completed ? ' completed' : '';
  const removeTodo = () => {
    Todos.removeData(String(task.index), false);
    update(Todos.listData());
  };
  const handleChange = () => {
    Todos.updateData(task.index, { completed: !task.completed });
    update(Todos.listData());
  };
  const onEdit = (e) => {
    if (e.code !== 'Enter') return;
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
          <label className="todo-check" htmlFor={`checkbox-${task.index}`}>
            <input
              type="checkbox"
              data-id={task.index}
              onChange={handleChange}
              id={`checkbox-${task.index}`}
              defaultChecked={task.completed || task.selected ? '' : false}
            />
            <span className="checkmark" />
          </label>
          <div
            contentEditable
            className="todo-title"
            role="presentation"
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
          <div className="delete link" role="presentation" onClick={removeTodo}>
            <DeleteICon />
          </div>
        </div>
      </div>
    </article>
  );
}

TodoItem.propTypes = {
  task: PropTypes.shape({
    index: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    selected: PropTypes.bool.isRequired,
  }).isRequired,
  update: PropTypes.func.isRequired,
};
