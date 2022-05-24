<template class="login">
  <section class="login">
    <main>
      <h1>Login</h1>
    </main>
    <form @submit.prevent>
      <div class="inputs">
        <FInput
          type="email"
          label="Email"
          placeholder="user@email.com"
          required
          minlength="3"
          size="md"
          validation-message="Email should be of correct format."
          success-message="Valid!"
          rounded
        />
        <FInput
          type="password"
          minlength="3"
          label="Password"
          rounded
          required
          size="md"
        />
      </div>
      <div class="buttons">
        <FButton label="Login" size="md" outlined rounded />
      </div>
    </form>
  </section>
</template>

<script setup>
import { useThemeStore } from "../stores/theme.js";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import FButton from "../components/button/FButton.vue";
import FInput from "../components/input/FInput.vue";

const themeStore = useThemeStore();
const { isDark } = storeToRefs(themeStore);

onMounted(() => {
  console.log("Login mounted");
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.login {
  // margin-top: 15px;
  // padding: 15px;

  width: $global-center-content-width;

  display: flex;
  align-items: center;
  flex-direction: column;
  
  form {
    width: 100%;
    .inputs {
      margin-top: 10px;
      display: flex;
      align-items: center;
      flex-flow: nowrap column;

      .control {
        margin: 10px 0px;
      }
    }

    .buttons {
      margin-top: 10px;
      display: flex;
      flex-flow: nowrap column;

      button {
        margin: 2px 0px;
      }
    }
  }
}
</style>
