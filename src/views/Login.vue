<template>
  <div class="login">
    <div class="containerTask">
      <h2 style="margin-top: 50px">Login TO DO APP</h2>
      <div class="input">
        <input
          id="user"
          type="text"
          v-model="user"
          @keyup.enter="add"
          placeholder="Inserisci il tuo nome"
        />

        <router-link id="link" v-if="user != ''" to="/task"
          ><a @click="add" id="a" href="">Entra</a></router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      user: "",
    };
  },
  methods: {
    add() {
      this.$store.state.userState = this.user;
    },
  },
};
</script>
<style lang="scss">
.login {
  width: 100%;
  display: flex;
  justify-content: center;

  .containerTask {
    width: 400px;
    min-height: 350px;
    border-radius: 15px;
    background-color: #ffffff;
    text-align: center;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 30px;
    .input {
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      #user {
        margin-top: 20px;
        width: 55%;
        border: none;
        padding: 5px 15px;
        font-size: 18px;
        font-weight: 500;
        opacity: 0.5;
        border: 1px solid #b9b9b9;
        border-radius: 5px;
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
        margin-top: 15px;
      }
    }
  }
}
</style>
