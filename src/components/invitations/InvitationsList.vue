<template>
  <section class="invitations-wrapper">
    <div class="create-invitation">
      <form action="submit" @submit.prevent>
        <FInput
          lazy
          type="text"
          :size="formConfig.size"
          :rounded="formConfig.rounded"
          :outlined="formConfig.buttonOutlined"
          v-model="projectName"
          placeholder="User's Email"
        />
        <!-- Attach item -->

        <FButton
          label="Invite User"
          caps
          expanded
          type="primary"
          :size="formConfig.size"
          :rounded="formConfig.rounded"
          :outlined="formConfig.buttonOutlined"
          @click="createProject"
        />
      </form>
    </div>

    <div class="projects-list"></div>
  </section>
</template>

<script setup>
import formConfig from "@/utils/formConfig.js";
import FContainer from "@/components/container/FContainer.vue";
import FInput from "@/components/input/FInput.vue";
import FButton from "@/components/button/FButton.vue";
import processRequest from "@/utils/processRequest";
import { ref } from "vue";

const projectName = ref("");
const projectDescription = ref("");

function createProject() {
  processRequest("project", "post", {
    topic: projectName.value,
    content: projectDescription.value,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
</script>

<style lang="scss" setup>
@import "@/assets/variables.scss";

.invitations-wrapper {
  .create-invitation {
    form {
      display: flex;
      flex-flow: column;
      align-items: flex-end;
      justify-content: center;

      input {
        margin-bottom: 5px;
      }
    }
  }
}
</style>
