import { store } from "react-easy-state";

let taskId = 0;

const defaultTodo = {
  title: "",
  finished: false
};

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
    ...defaultTodo
  },

  todos: [...Todo],

  findIndex(id) {
    const { todos } = storeList;
    return todos.findIndex(record => record.id === id);
  },

  update(record) {
    storeList.todo = { ...record };
  },

  onChange(e) {
    storeList.todo.title = e.target.value;
  },

  unfinished() {
    const { todos } = storeList;
    return todos.filter(todo => !todo.finished).length;
  },

  onSubmit(e) {
    e.preventDefault();
    const { todo, todos } = storeList;
    if (todo.id) {
      console.log("inside if");
      const index = this.findIndex(todo.id);
      console.log("index", index);
      todos[index] = todo;
    } else {
      console.log("inside else");
      todo.id = ++taskId;
      todos.push({ ...todo });
    }
    storeList.todo = { ...defaultTodo };
    return { todos };
  }
});

export default storeList;
