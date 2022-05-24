<template>
  <FContainer :class="{ dark: isDark }">
    <h4>
      {{ post.topic }}
    </h4>
    <p class="timestamp">
      <strong>{{ post.author }} </strong> - {{ post.createdAt }}
    </p>

    <p>
      {{ post.content }}
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
.timestamp {
  font-size: 12px;
  color: #999;
  margin-top: 5px;
  line-height: 0.4;
  margin-bottom: $post-margin-btm;
}
</style>
