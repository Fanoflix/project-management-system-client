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
          v-model="email"
          placeholder="user@email.com"
          required
          minlength="3"
          validation-message="Email should be of correct format."
          success-message="Valid!"
          ref="loginFirstInputRef"
          :size="formConfig.size"
          :rounded="formConfig.rounded"
        />
        <FInput
          type="password"
          label="Password"
          v-model="password"
          minlength="3"
          required
          :size="formConfig.size"
          :rounded="formConfig.rounded"
        />
      </div>
      <div class="buttons">
        <FButton
          label="Login"
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
import { useUserStore } from "@/stores/user.js";
import { onMounted, ref } from "vue";
import formConfig from "@/utils/formConfig.js";
import { useRouter } from "vue-router";
import processRequest from "@/utils/processRequest.js";
import FButton from "../components/button/FButton.vue";
import FInput from "../components/input/FInput.vue";

const loginFirstInputRef = ref(null);
const email = ref("");
const password = ref("");

const { setUserInfo } = useUserStore();
const router = useRouter();

function submit() {
  processRequest("auth/login", "post", {
    email: email.value,
    password: password.value,
  })
    .then((res) => {
      console.log(res.data);
      setUserInfo({ ...res.data.user, token: res.data.token });
      router.push("/");
    })
    .catch((err) => {
      console.log(err);
    });
}
// Lifecycle Hooks
onMounted(() => {
  loginFirstInputRef.value.input.focus();
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
@import "@/assets/form-styling.scss";
.login {
  width: $global-center-content-width;

  display: flex;
  align-items: center;
  flex-direction: column;
  @include form-styling;
}
</style>
