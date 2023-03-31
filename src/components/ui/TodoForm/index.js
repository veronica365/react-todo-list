import Todos from "../../../logic/todos";

export default function TodoForm({update}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const description = e.target.elements[0].value;
    if (description) Todos.insert(description);
    update(Todos.listData());
    e.target.reset();
  };

  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <label>
        <input type="text" placeholder="Add to your list..." />
        <button type="submit" className="link">
          <svg
            fill="#000000"
            width="25px"
            height="25px"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <path d="M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 0 0 0 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z" />
          </svg>
        </button>
      </label>
    </form>
  );
}
