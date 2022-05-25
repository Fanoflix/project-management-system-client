<template>
  <section class="signup">
    <main>
      <h1>Signup</h1>
    </main>
    <form @submit.prevent>
      <div class="inputs">
        <FInput
          type="text"
          label="Fullname"
          v-model="name"
          placeholder="Full name"
          required
          minlength="3"
          ref="signupFirstInput"
          :size="formConfig.size"
          :rounded="formConfig.rounded"
        />
        <FInput
          type="email"
          label="Email"
          v-model="email"
          placeholder="user@email.com"
          required
          minlength="3"
          :size="formConfig.size"
          :rounded="formConfig.rounded"
        />
        <FInput
          type="password"
          v-model="password"
          minlength="3"
          label="Password"
          required
          :size="formConfig.size"
          :rounded="formConfig.rounded"
        />
        <FInput
          type="password"
          v-model="confirmPassword"
          minlength="3"
          label="Confirm Password"
          required
          :size="formConfig.size"
          :rounded="formConfig.rounded"
        />
      </div>
      <div class="buttons">
        <FButton
          label="Create Account"
          :type="formConfig.buttonType"
          :size="formConfig.size"
          :rounded="formConfig.rounded"
          :outlined="formConfig.buttonOutlined"
          @click.prevent="submit"
        />
      </div>
    </form>
  </section>
</template>

<script setup>
/*
  imports
*/
import { onMounted, ref } from "vue";
import formConfig from "@/utils/formConfig.js";
import processRequest from "@/utils/processRequest.js";
import { useRouter } from "vue-router";
import FButton from "../components/button/FButton.vue";
import FInput from "../components/input/FInput.vue";

const router = useRouter();

// Reactive State
const signupFirstInput = ref(null);
const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

function submit() {
  if (password.value === confirmPassword.value) {
    processRequest("user/", "post", {
      name: name.value,
      email: email.value,
      password: password.value,
    })
      .then(() => {
        router.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

// Lifecycle Hooks
onMounted(() => {
  signupFirstInput.value.input.focus();
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
@import "@/assets/form-styling.scss";

.signup {
  width: $global-center-content-width;

  display: flex;
  align-items: center;
  flex-direction: column;
  @include form-styling;
}
</style>
