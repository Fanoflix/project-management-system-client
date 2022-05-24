<template>
  <section class="dashboard">
    <!-- Work items side info -->
    <div class="left">
      <InfoCard
        :updates="updates"
        emptyText="No recent updates!"
        heading="Updates"
      />
    </div>

    <div class="center">
      <GroupFeed></GroupFeed>
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

const tasks = [
  {
    id: 1,
    author: "Abdul Rehman",
    topic: "Fix navbar",
    createdAt: "2020-01-01",
    description: "Fix that shit",
  },
  {
    id: 1,
    author: "Abdul Rehman",
    topic: "Fix navbar",
    createdAt: "2020-01-01",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  // {
  //   id: 1,
  //   author: "Abdul Rehman",
  //   topic: "Fix navbar",
  //   createdAt: "2020-01-01",
  //   description: "Fix that shit",
  // },
  // {
  //   id: 1,
  //   author: "Abdul Rehman",
  //   topic: "Fix navbar",
  //   createdAt: "2020-01-01",
  //   description: "Fix that shit",
  // },
  // {
  //   id: 1,
  //   author: "Abdul Rehman",
  //   topic: "Fix navbar",
  //   createdAt: "2020-01-01",
  //   description: "Fix that shit",
  // },
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
