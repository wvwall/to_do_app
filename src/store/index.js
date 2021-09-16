import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userState: "",
    inputTodo: "",
    todosState: [],
  },
  mutations: {
    add() {
      if (this.inputTodo != "") {
        let obj = {
          title: this.inputTodo,
          status: "todo",
        };
        this.todos.push(obj);
        this.inputTodo = "";
      }
    },
    check(todo) {
      let i = this.todos.indexOf(todo);
      this.todos[i].status = "done";
    },
    remove(todo) {
      let i = this.todos.indexOf(todo);
      this.todos.splice(i, 1);
    },
    edit(todo) {
      let i = this.todos.indexOf(todo);
      this.inputTodo = this.todos[i].title;
      this.todos.splice(i, 1);
    },
  },
  actions: {},
  modules: {},
  getters: {
    todosComputato: function () {
      let todosDone = this.todos.filter((todo) => todo.status == "done");
      let todosTodo = this.todos.filter((todo) => todo.status == "todo");

      return [...todosTodo, ...todosDone];
    },
  },
});
