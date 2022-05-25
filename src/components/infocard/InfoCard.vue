<template>
  <FContainer
    rounded
    maxHeight="900px"
    transparent
    :heading="heading"
    overflowYAuto
    class="info-card"
    :emptyText="emptyText"
    v-if="tasks"
  >
    <CreateTask />
    <TaskItem
      class="task"
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @click="
        $router.push({
          name: `task`,
          params: { id: task.id, ...task },
        })
      "
    ></TaskItem>
  </FContainer>

  <FContainer
    rounded
    maxHeight="400px"
    transparent
    :heading="heading"
    overflowYAuto
    class="info-card"
    :emptyText="emptyText"
    v-else
  >
    <FContainer
      class="task"
      rounded
      v-for="important in importantAnnouncements"
      :key="important.id"
    ></FContainer>
  </FContainer>
</template>

<script setup>
import FContainer from "@/components/container/FContainer.vue";
import TaskItem from "@/components/task/TaskItem.vue";
import CreateTask from "@/components/task/CreateTask.vue";

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
