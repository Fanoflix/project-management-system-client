<template>
  <section>
    <CreateNewPost :projectId="projectId" @new-post="appendPost" />

    <em v-if="posts === []">
      Looks empty, make an announcement to kick off the conversation!
    </em>

    <FContainer
      rounded
      padding="0"
      class="post-container"
      v-for="post in posts"
      :key="post.id"
    >
      <PostCard class="post" :post="post"> </PostCard>
      <!-- if there is a work item, display that inside the post with a v-if -->
    </FContainer>
  </section>
</template>

<script setup>
import FContainer from "@/components/container/FContainer.vue";
import PostCard from "@/components/post/PostCard.vue";
import CreateNewPost from "@/components/post/CreateNewPost.vue";
import processRequest from "@/utils/processRequest";
import { ref } from "vue";

const token = JSON.parse(localStorage.getItem("token"));

const posts = ref([]);

processRequest(`post/all/${props.projectId}`, "get", {}, token)
  .then((res) => {
    console.log(res.data);
    posts.value = res.data.posts;
  })
  .catch((err) => {
    console.log(err);
  });

const props = defineProps({
  projectId: {
    type: Number,
    default: null,
  },
});
function appendPost(post) {
  console.log(post);
  posts.value.push(post);
}

// const posts = [
//   {
//     id: 1,
//     topic: "About the UI",
//     author: "Ammar",
//     content:
//       "test test test test test test test testtesttesttesttesttesttesttesttesttesttesttesttest test test test ",
//     createdAt: new Date(),
//   },
//   {
//     id: 2,
//     topic: "About the UI",
//     author: "Mahad",
//     content: "test2",
//     createdAt: new Date(),
//   },
//   {
//     id: 1,
//     topic: "About the UI",
//     author: "Ammar",
//     content:
//       "test test test test test test test testtesttesttesttesttesttesttesttesttesttesttesttest test test test ",
//     createdAt: new Date(),
//   },
//   {
//     id: 1,
//     topic: "About the UI",
//     author: "Ammar",
//     content:
//       "test test test test test test test testtesttesttesttesttesttesttesttesttesttesttesttest test test test ",
//     createdAt: new Date(),
//   },
//   {
//     id: 1,
//     author: "Ammar",
//     topic: "About the UI",
//     content:
//       "test test test test test test test testtesttesttesttesttesttesttesttesttesttesttesttest test test test ",
//     createdAt: new Date(),
//   },
// ];
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
