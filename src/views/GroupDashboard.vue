<template>
  <section class="dashboard">
    <!-- Work items side info -->
    <div class="left">
      <InfoCard
        :importantAnnouncements="importantAnnouncements"
        emptyText="Important announcements will be shown here."
        heading="Important"
      />
    </div>

    <div class="center">
      <GroupFeed :projectId="$route.params.id"></GroupFeed>
    </div>

    <div class="right">
      <InfoCard
        :tasks="tasks"
        emptyText="You're all caught up!"
        heading="Tasks"
      />
    </div>
  </section>
</template>

<script setup>
import GroupFeed from "@/components/feed/GroupFeed.vue";
import FContainer from "@/components/container/FContainer.vue";
import InfoCard from "@/components/infocard/InfoCard.vue";
import { useRoute } from "vue-router";

const route = useRoute();

console.log(route.params);

const tasks = [
  {
    id: 1,
    author: "Abdul Rehman",
    topic: "Fix navbar",
    status: "backlog",
    createdAt: new Date(),
    description: "Fix the navbar",
  },
  {
    id: 1,
    author: "Abdul Rehman",
    topic: "E2E test jinx",
    status: "under review",
    createdAt: new Date(),
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  {
    id: 1,
    author: "Abdul Rehman",
    topic: "Make routing in pkamps",
    status: "approved",
    createdAt: new Date(),
    description: "Fix that shit",
  },
  {
    id: 1,
    author: "Abdul Rehman",
    topic: "Fix navbar",
    status: "approved",
    createdAt: new Date(),
    description: "Complete the cycle of fixing the navbar",
  },
];
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.dashboard {
  display: flex;
  width: 100%;
  justify-content: center;

  .center {
    width: 40%;
  }

  .right {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: $post-margin-btm;
  }

  .left {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: $post-margin-btm;
  }
}
</style>
