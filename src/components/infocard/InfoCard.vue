<template>
  <FContainer
    rounded
    padding="1"
    maxHeight="500px"
    :heading="heading"
    overflowYAuto
    class="info-card"
    :emptyText="emptyText"
    v-if="tasks"
  >
    <TaskItem
      class="task"
      v-for="task in tasks"
      :key="task.id"
      :task="task"
    ></TaskItem>
  </FContainer>

  <FContainer
    rounded
    padding="1"
    maxHeight="400px"
    :heading="heading"
    overflowYAuto
    class="info-card"
    :emptyText="emptyText"
    v-else
  >
    <FContainer
      class="task"
      rounded
      v-for="important in important"
      :key="important.id"
    ></FContainer>
  </FContainer>
</template>

<script setup>
import FContainer from "@/components/container/FContainer.vue";
import TaskItem from "@/components/task/TaskItem.vue";

defineProps({
  updates: {
    type: Array,
  },
  tasks: {
    type: Array,
  },
  heading: {
    type: String,
    required: true,
    default: null,
  },
  emptyText: {
    type: String,
    default: "Empty",
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.info-card {
  width: 65%;
  margin-bottom: $post-margin-btm;

  .task {
    margin-bottom: 5px;
  }
}
</style>
