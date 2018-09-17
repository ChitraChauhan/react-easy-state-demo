import React, { Component } from "react";
import { view } from "react-easy-state";
import storeList from "./StoreList";

const ListView = ({ todo }) => (
  <li onClick={() => storeList.update(todo)} key={todo.id}>
    <input
      type="checkbox"
      checked={todo.finished}
      onChange={e => (todo.finished = !todo.finished)}
    />{" "}
    {todo.title}
  </li>
);

class TodoList extends Component {
  onChange = e => (storeList.todo.title = e.target.value);

  render() {
    return (
      <div>
        <h3>TodoList in React Easy State</h3>
        <form>
          <input
            type="text"
            value={storeList.todo.title}
            onChange={e => this.onChange(e)}
          />
          <button onClick={e => storeList.onSubmit(e)}>Add</button>
        </form>
        <ul>
          {storeList.todos.map(todo => (
            <ListView key={todo.id} todo={todo} />
            // <li onClick={() => storeList.update(todo)} key={todo.id}>
            //   {todo.title}
            // </li>
          ))}
        </ul>
        <div>Pending tasks: {storeList.unfinished}</div>
      </div>
    );
  }
}

export default view(TodoList);
