<template>
  <section class="new-post">
    <FContainer
      bordered
      rounded
      heading="Share an update"
      headingCenter
      padding="2"
    >
      <form action="submit" @submit.prevent="createPost"></form>
      <FInput
        rounded
        lazy
        type="text"
        scale="y"
        size="sm"
        v-model="topic"
        placeholder="Provide a descriptive topic for the update"
      />
      <FInput
        rounded
        lazy
        type="textarea"
        size="sm"
        scale="y"
        v-model="content"
        placeholder="Update your colleauges."
      />
    </FContainer>
  </section>
</template>

<script setup>
import FInput from "@/components/input/FInput.vue";
import FContainer from "@/components/container/FContainer.vue";
import { ref } from "vue";

// const props = defineProps({});
const topic = ref("");
const content = ref("");

function createPost() {}
</script>

<style lang="scss" scoped>
.new-post {
  margin-bottom: 15px;

  .control {
    margin-bottom: 4px;
  }
}
</style>
