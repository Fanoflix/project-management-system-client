<template>
  <section class="new-task">
    <form action="submit" @submit.prevent="createPost"></form>
    <FInput
      rounded
      lazy
      type="text"
      scale="y"
      size="sm"
      v-model="title"
      placeholder="Create a new task."
    />
    <FInput
      rounded
      lazy
      type="textarea"
      size="sm"
      scale="y"
      v-model="description"
      placeholder="Provide a short description of the task."
    />
    <!-- Attach item -->

    <div class="buttons">
      <FButton
        label="Create Task"
        expanded
        type="primary"
        :size="formConfig.size"
        :rounded="formConfig.rounded"
      />
    </div>
  </section>
</template>

<script setup>
import formConfig from "@/utils/formConfig.js";
import FInput from "@/components/input/FInput.vue";
import FButton from "@/components/button/FButton.vue";
import FContainer from "@/components/container/FContainer.vue";
import { ref } from "vue";
import processRequest from "@/utils/processRequest";

const token = JSON.parse(localStorage.getItem("token"));

// const props = defineProps({});
const title = ref("");
const description = ref("");

function createTask() {
  processRequest(
    "task",
    "post",
    {
      title: title.value,
      description: description.value,
    },
    token
  );
}
</script>

<style lang="scss" scoped>
.new-task {
  margin-bottom: 25px;

  h1 {
    .f-container {
      font-size: 5px;
    }
  }

  .control {
    margin-bottom: 4px;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button {
      margin-top: 4px;
    }
  }
}
</style>
