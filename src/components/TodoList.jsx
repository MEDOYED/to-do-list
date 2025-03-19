import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodoCompleted, removeTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          toggleTodoCompleted={toggleTodoCompleted}
          removeTodo={removeTodo}
          {...todo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
