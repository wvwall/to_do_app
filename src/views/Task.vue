<template>
  <div class="task">
    <ToDoList />
  </div>
</template>

<script>
// @ is an alias to /src
import ToDoList from "@/components/ToDoList.vue";

export default {
  name: "Task",
  components: {
    ToDoList,
  },
};
</script>
<style scoped lang="scss">
.task {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
