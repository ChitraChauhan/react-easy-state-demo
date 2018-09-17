import { store } from "react-easy-state";
let taskId = 0;

const Todo = [
  {
    id: ++taskId,
    title: "taskA",
    finished: false
  },
  {
    id: ++taskId,
    title: "taskB",
    finished: false
  }
];

const storeList = store({
  todo: {
    title: ""
  },
  todos: [...Todo],
  get unfinished() {
    const { todos } = storeList;
    return todos.filter(todo => !todo.finished).length;
  },
  findIndex(id) {
    const { todos } = storeList;
    return todos.findIndex(record => record.id === id);
  },

  update(record) {
    storeList.todo = record;
  },

  onSubmit(e) {
    e.preventDefault();
    const { todo, todos } = storeList;
    if (todo.id) {
      const index = this.findIndex(todo.id);
      todos[index] = todo;
    } else {
      todo.id = ++taskId;
      todos.push({ ...todo });
    }
    storeList.todo = { title: "" };
    return { todos };
  }
});

export default storeList;
