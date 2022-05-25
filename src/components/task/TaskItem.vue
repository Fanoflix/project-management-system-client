<template>
  <FContainer filled :class="{ dark: isDark }" rounded>
    <div class="task-header">
      <h5>
        {{ task.topic }}
      </h5>

      <div class="status-icon" :class="statusColor">
        {{ task.status }}
      </div>
    </div>
    <p class="timestamp">
      <strong>{{ task.author }}</strong>
      &nbsp; | &nbsp;
      {{ convertDateTime(task.createdAt) }}
    </p>

    <p class="description">
      {{ task.description }}
    </p>

    <!-- maybe remove later? -->
    <div class="attached-item">
      <slot name="attached-item"></slot>
    </div>
  </FContainer>
</template>

<script setup>
// Imports
import FContainer from "@/components/container/FContainer.vue";
import convertDateTime from "@/utils/datetime.js";
import taskStatuses from "@/utils/taskStatuses.js";
import { computed } from "@vue/reactivity";
import { storeToRefs } from "pinia";
import { useAttrs } from "vue";
import { useThemeStore } from "../../stores/theme.js";

// Reactive State
const themeStore = useThemeStore();
const { isDark } = storeToRefs(themeStore);
const attrs = useAttrs();

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const statusColor = computed(() => {
  if (
    props.task.status === "backlog" ||
    !taskStatuses.includes(props.task.status)
  ) {
    return "gray";
  } else if (props.task.status === "in progress") {
    return "orange";
  } else if (props.task.status === "approved") {
    return "green";
  } else if (props.task.status === "under review") {
    return "red";
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/timestamp-styling.scss";
@include timestamp-styling;
.f-container {
  cursor: pointer;

  .task-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .status-icon {
      padding: 0px 5px;
      font-variant: small-caps;
      font-size: 14px;
      color: white;
      font-weight: 600;
      border-radius: 5px;
    }
  }

  &:hover {
    background-color: rgb(225, 225, 225) !important;
  }

  .description {
    margin-top: 10px;
  }

  &.dark {
    &:hover {
      background-color: rgb(51, 51, 51) !important;
    }
  }
}

.red {
  background-color: rgba(255, 0, 0, 0.65);
}

.orange {
  background-color: rgba(197, 128, 0, 0.65);
}

.red {
  background-color: rgba(184, 0, 0, 0.65);
}
.gray {
  background-color: rgba(128, 128, 128, 0.65);
}

.green {
  background-color: rgba(0, 223, 45, 0.65);
}
</style>
