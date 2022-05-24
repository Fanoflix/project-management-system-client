<template>
  <CreateNewPost />

  <FContainer
    rounded
    class="post-container"
    v-for="post in posts"
    :key="post.id"
  >
    <PostCard class="post" :post="post"> </PostCard>
    <!-- if there is a work item, display that inside the post with a v-if -->
  </FContainer>
</template>

<script setup>
import FContainer from "@/components/container/FContainer.vue";
import PostCard from "@/components/post/PostCard.vue";
import CreateNewPost from "@/components/post/CreateNewPost.vue";

const posts = [
  {
    id: 1,
    topic: "About the UI",
    author: "Ammar",
    content:
      "test test test test test test test testtesttesttesttesttesttesttesttesttesttesttesttest test test test ",
    createdAt: "2020-01-01",
  },
  {
    id: 2,
    topic: "About the UI",
    author: "Mahad",
    content: "test2",
    createdAt: "2020-01-01",
  },
  {
    id: 1,
    topic: "About the UI",
    author: "Ammar",
    content:
      "test test test test test test test testtesttesttesttesttesttesttesttesttesttesttesttest test test test ",
    createdAt: "2020-01-01",
  },
  {
    id: 1,
    topic: "About the UI",
    author: "Ammar",
    content:
      "test test test test test test test testtesttesttesttesttesttesttesttesttesttesttesttest test test test ",
    createdAt: "2020-01-01",
  },
  {
    id: 1,
    author: "Ammar",
    topic: "About the UI",
    content:
      "test test test test test test test testtesttesttesttesttesttesttesttesttesttesttesttest test test test ",
    createdAt: "2020-01-01",
  },
];
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.feed-container {
  width: 100%;
  min-width: 315px;
}

.post-container {
  margin-bottom: $post-margin-btm;
}
</style>
