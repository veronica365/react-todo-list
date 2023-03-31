import PropTypes from 'prop-types';

export default function TodoLayout({ children, handleClearCompleted }) {
  return (
    <section className="todos">
      <div className="todo-wrapper">{children}</div>
      <div className="todo-button link" role="presentation" onClick={handleClearCompleted}>
        <span>Clear To Do list project</span>
      </div>
    </section>
  );
}

TodoLayout.propTypes = {
  children: PropTypes.node.isRequired,
  handleClearCompleted: PropTypes.func.isRequired,
};
