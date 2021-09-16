<template>
  <div>
    <ul class="containerTask">
      <div class="header_task">
        <h1 class="title">To Do App</h1>
        <h3><i class="fas fa-user-circle"></i> {{ user }}</h3>
      </div>
      <div class="plus">
        <input
          v-model="inputTodo"
          id="inputTitolo"
          placeholder="Nuovo Task"
          @keyup.enter="add"
        />
        <i @click="add" class="far fa-plus-square"></i>
      </div>

      <div style="margin: 30px 0">
        <li v-for="(todo, index) in todosComputato" :key="index.id">
          <!-- <span class="name">{{ todo.name }}</span> -->
          <span v-if="todo.status != 'done'" class="check" @click="check(todo)">
            <i class="far fa-check-square"></i
          ></span>

          <span class="titolo" :class="todo.status == 'done' ? 'strike' : ''">{{
            todo.title
          }}</span>

          <span v-if="todo.status != 'done'" class="edit" @click="edit(todo)"
            ><i class="far fa-edit"></i
          ></span>
          <!-- <span v-if="todo.status == 'done'" @click="remove(todo)"
            ><i class="far fa-minus-square"></i
          ></span> -->
        </li>
      </div>

      <router-link id="to" to="/completed"
        ><a id="link" @click="loadingState" href="">ARCHIVIATI</a></router-link
      >
    </ul>
  </div>
</template>

<script>
export default {
  name: "ToDoList",
  props: {
    Todo: Array,
  },
  data() {
    return {
      user: this.$store.state.userState,
      inputTodo: "",
      todos: [
        { name: "Vue", title: "Milestone 1", status: "done" },

        { name: "Vue", title: "Milestone 2", status: "done" },

        { name: "Vue", title: "Milestone 3  ", status: "done" },

        { name: "Vue", title: "4 Milestone Select", status: "todo" },

        { name: "Vue", title: "5 Milestone Filter", status: "todo" },
      ],
    };
  },
  computed: {
    todosComputato: function () {
      // let todosDone = this.todos.filter((todo) => todo.status == "done");
      let todosTodo = this.todos.filter((todo) => todo.status == "todo");

      return todosTodo;
    },
    // todosComputato() {
    //   let todosDone = this.$store.state.todos.filter(
    //     (todo) => todo.status == "done"
    //   );
    //   let todosTodo = this.$store.state.todos.filter(
    //     (todo) => todo.status == "todo"
    //   );

    //   return [...todosTodo, ...todosDone];
    // },
  },
  methods: {
    loadingState() {
      this.$store.state.todosState = this.todos;
      console.log(this.$store.state.todosState);
    },
    add() {
      if (this.inputTodo != "") {
        let obj = {
          name: this.user,
          title: this.inputTodo,
          status: "todo",
        };
        this.todos.push(obj);
        this.inputTodo = "";
        console.log(this.todos);
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.containerTask {
  width: 400px;
  min-height: 550px;
  border-radius: 15px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
}
.header_task {
  text-align: center;
}
.title {
  width: 100%;
  text-align: center;
  font-size: 28px;
  margin-top: 40px;
}
.plus {
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
#link {
  text-align: center;
  background-color: #ffda00;
  color: #000;
  width: 70px;
  border: 0;
  border-radius: 5px;
  padding: 8px 10px;
  font-weight: 600;
  margin-bottom: 10px;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 25px;
  text-decoration: none;
}
#to {
  text-decoration: none;
}
#text {
  display: none;
  width: 70px;
  margin: 0 auto;
  margin-left: 5px;
  border-radius: 5px;
  border: 2px solid #458ef4;
  margin-bottom: 10px;
  padding: 5px 10px;
}
#inputTitolo {
  margin-top: 20px;
  width: 75%;
  border: none;
  padding: 5px 15px;
  font-size: 18px;
  font-weight: 500;
  opacity: 0.5;
  border: 1px solid #b9b9b9;
  border-radius: 5px;
}

li {
  text-transform: uppercase;
  margin-top: 10px;
  font-size: 16px;
  list-style: none;
  font-weight: 500;
  padding: 10px 0;
  width: 350px;
  border-top: 2px solid #f9f9f9f9;
  display: flex;
  justify-content: space-between;
  position: relative;
  .titolo {
    position: absolute;
    left: 50px;
  }
}

.fa-check-square {
  margin-right: 15px;
  color: #00c853;
  cursor: pointer;
  font-size: 25px;
}
.fa-edit {
  margin-left: 15px;
  color: orange;
  cursor: pointer;
  font-size: 20px;
}
.fa-minus-square {
  color: tomato;

  cursor: pointer;
  font-size: 25px;
}

.titolo.strike {
  text-decoration: line-through;
}
.fa-plus-square {
  cursor: pointer;
  margin-top: 20px;
  font-size: 38px;
  color: #458ef4;
}
</style>
