export default function TodoLayout({ children, handleClearCompleted }) {
  return (
    <section className="todos">
      <div className="todo-wrapper">{children}</div>
      <div className="todo-button link" onClick={handleClearCompleted}>
        <span>Clear To Do list project</span>
      </div>
    </section>
  );
}
