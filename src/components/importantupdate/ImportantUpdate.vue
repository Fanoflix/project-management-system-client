<template>
  <FContainer filled :class="{ dark: isDark }" rounded>
    <h5>
      {{ task.topic }}
    </h5>
    <p class="timestamp">
      <strong>{{ task.author }}</strong>
      &nbsp; | &nbsp;
      {{ convertDateTime(task.createdAt) }}
    </p>

    <p>
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
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.timestamp {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
  line-height: 0.4;
  margin-bottom: $post-margin-btm;
}

.f-container {
  cursor: pointer;

  &:hover {
    background-color: rgb(225, 225, 225) !important;
  }

  &.dark {
    &:hover {
      background-color: rgb(51, 51, 51) !important;
    }
  }
}
</style>
