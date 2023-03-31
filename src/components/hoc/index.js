export default function TodoLayout({ children }) {
  return (
    <section className="todos">
      <div className="todo-wrapper">{children}</div>
      <div className="todo-button link">
        <span>Clear To Do list project</span>
      </div>
    </section>
  );
}
