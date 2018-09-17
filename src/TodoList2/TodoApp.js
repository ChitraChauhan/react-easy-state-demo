import React, { Component } from "react";
import storeList from "./StoreList";
import { view } from "react-easy-state";

class TodoEditor extends Component {
  render() {
    return (
      <form>
        <input
          type="text"
          name="title"
          value={storeList.todo.title}
          onChange={e => storeList.onChange(e)}
        />
        <button onClick={e => storeList.onSubmit(e)}>Add</button>
      </form>
    );
  }
}

TodoEditor = view(TodoEditor);

const TodoList = view(() => (
  <ul>
    {storeList.todos.map(todo => {
      return <TodoItem key={todo.id} todo={todo} />;
    })}
  </ul>
));

const TodoItem = ({ todo }) => (
  <li onClick={() => storeList.update(todo)} key={todo.id}>
    <input
      type="checkbox"
      defaultChecked={todo.finished}
      onChange={e => (todo.finished = !todo.finished)}
    />{" "}
    {todo.title}
  </li>
);

class TodoApp extends Component {
  render() {
    return (
      <div>
        <TodoEditor />
        <TodoList />
        <div>Pending tasks: {storeList.unfinished()}</div>
      </div>
    );
  }
}

export default view(TodoApp);
