<template>
  <div class="home-container">
    <div v-if="!isLoggedIn">
      <h1 class="landing-title">
        <span>Project</span> Management System<span>.</span>
      </h1>
      <p>
        Simple Project tracking and management solution. A one stop for
        university students to manage their semester projects or even Final Year
        Projects (FYPs) with our moderated projects.
      </p>

      <h4>Create Projects</h4>
      <p>
        Add members to your <span>Project</span>. Choose whether the project is
        <span>moderated</span> or not.
      </p>

      <h4>Create Announcements and Tasks</h4>
      <p>
        Keep your project members updated with <span>announcements</span>, and
        create
        <span> tasks </span>
        with varying priorities, deadlines and completion status.
      </p>

      <div class="buttons">
        <!-- v-if not logged in -->
        <FButton
          label="Register"
          type="primary"
          size="md"
          :rounded="formConfig.rounded"
          caps
          @click="$router.push('/signup')"
        />
        <FButton
          label="Login"
          type="primary"
          size="md"
          caps
          outlined
          @click="$router.push('/login')"
          :rounded="formConfig.rounded"
        />
      </div>
    </div>

    <div v-else class="projects-list">
      <FContainer
        heading="Projects"
        padding="3"
        emptyText="You have not joined any projects yet. Create one or ask a colleague for an invite."
        rounded
      >
        <ProjectsList />
      </FContainer>
      <br />

      <FContainer
        heading="Invitations"
        padding="3"
        emptyText="You have not joined any projects yet. Create one or ask a colleague for an invite."
        rounded
      >
        <InvitationsList />
      </FContainer>

      <br />

      <!-- 
      <FContainer
        padding="3"
        emptyText="You have not joined any project. Create one or ask a colleague for an invite."
        rounded
      >
        <FButton
          label="Create Project"
          rounded
          type="primary"
          outlined
          caps
          size="md"
        />
      </FContainer> -->
    </div>
  </div>
</template>

<script setup>
import formConfig from "@/utils/formConfig.js";
import FContainer from "../components/container/FContainer.vue";
import FButton from "../components/button/FButton.vue";
import ProjectsList from "@/components/projects/ProjectsList.vue";
import InvitationsList from "@/components/invitations/InvitationsList.vue";
import { storeToRefs } from "pinia";

import { useUserStore } from "@/stores/user.js";
const userStore = useUserStore();
const { isLoggedIn } = storeToRefs(userStore);
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.home-container {
  margin-top: 100px;
  width: $global-center-content-width + 150px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: $primary;
  }
  .landing-title {
    font-size: 42px;
    font-weight: 700;
    text-align: left;
    line-height: 1;

    margin-bottom: 12px;
  }

  h4 {
    margin-top: 20px;
  }
  p {
    margin-top: 3px;

    span {
      color: $primary;
      font-weight: 500;
    }
  }

  .buttons {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 45px;

    button {
      margin-top: 4px;
    }
    button:nth-child(2) {
      margin-left: 10px;
    }
  }
}

.home-container {
  .projects-list {
    width: $global-center-content-width + 50px;
  }
}
</style>
