<template>
  <section class="new-post">
    <h2>Make an announcement</h2>
    <form action="submit" @submit.prevent>
      <FInput
        lazy
        type="text"
        scale="y"
        :size="formConfig.size"
        :rounded="formConfig.rounded"
        :outlined="formConfig.buttonOutlined"
        v-model="topic"
        placeholder="Provide a descriptive topic for the announcement"
      />
      <FInput
        lazy
        type="textarea"
        :size="formConfig.size"
        :rounded="formConfig.rounded"
        :outlined="formConfig.buttonOutlined"
        scale="y"
        v-model="content"
        placeholder="Add additional details."
      />
      <!-- Attach item -->

      <div class="buttons">
        <FButton
          size="sm"
          @click="isImportant = !isImportant"
          :rounded="formConfig.rounded"
          :label="isImporantComputed"
          :type="computedType"
          :outlined="!isImportant"
        />
        <FButton
          label="Create Post"
          type="primary"
          :size="formConfig.size"
          :rounded="formConfig.rounded"
          :outlined="formConfig.buttonOutlined"
          @click="createPost"
        />
      </div>
    </form>
  </section>
</template>

<script setup>
import formConfig from "@/utils/formConfig.js";
import FInput from "@/components/input/FInput.vue";
import FContainer from "@/components/container/FContainer.vue";
import FButton from "@/components/button/FButton.vue";
import { ref } from "vue";
import { computed } from "@vue/reactivity";
import processRequest from "@/utils/processRequest";

const token = JSON.parse(localStorage.getItem("token"));
const emits = defineEmits("newPost");

const props = defineProps({
  projectId: {
    type: Number,
    default: null,
  },
});

console.log(props.projectId);

const topic = ref("");
const content = ref("");
const isImportant = ref(false);

function createPost() {
  processRequest(
    "post",
    "post",
    {
      topic: topic.value,
      content: content.value,
      isImportant: isImportant.value,
      projectId: props.projectId,
    },
    token
  )
    .then((res) => {
      console.log(res.data);
      emits("newPost", res.data.post);
    })
    .catch((err) => {
      console.log(err);
    });
}

const isImporantComputed = computed(() => {
  return isImportant.value ? "Important Announcement" : "Mark as important";
});

const computedType = computed(() => {
  return isImportant.value ? "danger" : "secondary";
});
</script>

<style lang="scss" scoped>
.new-post {
  margin-top: 5px;
  margin-bottom: 35px;

  .control {
    margin-bottom: 4px;
  }

  h2 {
    margin-bottom: 10px;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button:nth-child(2) {
      margin-left: 4px;
    }
    button {
      margin-top: 4px;
    }
  }
}
</style>
