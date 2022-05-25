<template>
  <div class="task-view">
    <pre></pre>
  </div>
</template>

<script setup>
import FContainer from "../components/container/FContainer.vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

console.log(route.params);
</script>

<style lang="scss" scoped></style>
