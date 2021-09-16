<template>
  <div>
    <div class="about">
      <h1>ARCHIVIATI</h1>
      <ul class="containerTask">
        <div class="header_task">
          <div class="titolo_task"></div>
        </div>
        <!-- <select name="" v-model="select" id="">
          <option
            v-for="(todo, index) in todosComputato"
            :key="index.id"
            value=""
          >
            {{ todo.name }}
          </option>
        </select> -->
        <li v-for="(todo, index) in todosComputato" :key="index.id">
          <p class="name"><i class="fas fa-user-circle"></i> {{ todo.name }}</p>

          <span class="titolo" :class="todo.status == 'done' ? 'strike' : ''">{{
            todo.title
          }}</span>
        </li>
      </ul>
      <router-link id="link" v-if="user != ''" to="/task">TASK</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Completed",
  data() {
    return {
      select: "",
    };
  },
  computed: {
    // todosComputato: function () {
    //   let todosDone = this.todos.filter((todo) => todo.status == "done");
    //   let todosTodo = this.todos.filter((todo) => todo.status == "todo");

    //   return [...todosTodo, ...todosDone];
    // },
    todosComputato() {
      let todosDone = this.$store.state.todosState.filter(
        (todo) => todo.status == "done"
      );

      return todosDone;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.about {
  width: 400px;
  min-height: 550px;
  border-radius: 15px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.titolo_task {
  width: 100%;
  text-align: center;
  font-size: 18px;
}
.plus {
  width: 40%;
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
li {
  margin-top: 10px;
  font-size: 18px;
  list-style: none;
  font-weight: 500;
  padding: 10px 0;
  width: 350px;
  color: tomato;
  border-bottom: 1px solid #b9b9b9;
  display: flex;
  justify-content: space-between;
}

.titolo.strike {
  text-decoration: line-through;
}
.name {
  margin-right: 20px;
}
</style>
