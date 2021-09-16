<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Login</router-link>
      <!-- | <router-link to="/task">Task</router-link> -->
      <!-- <router-link to="/completed">Completed</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  background-color: #5271ff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

  height: 100%;
  .about {
    margin: 0 auto;
    width: 400px;
    text-align: center;
  }
}

#nav {
  padding: 30px;
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
