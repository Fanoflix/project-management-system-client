<template>
  <FContainer rounded :class="{ dark: isDark }">
    <h4 class="post-topic">
      {{ post.topic }}
    </h4>
    <p class="timestamp">
      <strong>{{ post.author }} </strong>
      &nbsp; | &nbsp;
      {{ convertDateTime(post.createdAt) }}
    </p>

    <p class="content">
      {{ post.content }}
    </p>

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
  post: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/timestamp-styling.scss";
@include timestamp-styling;
.post-topic {
  font-weight: 600;
}

.content {
  margin-top: 10px;
}
</style>
