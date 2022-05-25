<template>
  <section class="projects-wrapper">
    <div class="create-project">
      <form action="submit" @submit.prevent>
        <FInput
          lazy
          type="text"
          :size="formConfig.size"
          :rounded="formConfig.rounded"
          :outlined="formConfig.buttonOutlined"
          v-model="projectName"
          placeholder="Project Name"
        />
        <FInput
          lazy
          type="text"
          :size="formConfig.size"
          :rounded="formConfig.rounded"
          :outlined="formConfig.buttonOutlined"
          v-model="projectDescription"
          placeholder="Add a short description"
        />
        <!-- Attach item -->

        <FButton
          label="Create Project"
          caps
          expanded
          type="primary"
          :size="formConfig.size"
          :rounded="formConfig.rounded"
          :outlined="formConfig.buttonOutlined"
          @click="createProject"
        />
      </form>
    </div>

    <br />

    <div class="projects-list">
      <!-- <em v-if="noProjects"
        >You have not joined any projects yet. Create one or ask a colleague for
        an invite.
      </em> -->

      <div class="project-item" v-for="project in projects" :key="project.id">
        <FContainer
          rounded
          padding="1"
          @click="
            $router.push({
              name: `dashboard`,
              params: { id: project.id, ...project },
            })
          "
        >
          <h5>{{ project.name }}</h5>
          <p>{{ project.description }}</p>
          <br />
          <em> Go to project </em>
        </FContainer>
      </div>
    </div>
  </section>
</template>

<script setup>
import formConfig from "@/utils/formConfig.js";
import FContainer from "@/components/container/FContainer.vue";
import FInput from "@/components/input/FInput.vue";
import FButton from "@/components/button/FButton.vue";
import processRequest from "@/utils/processRequest";
import { ref } from "vue";

const projectName = ref("");
const projectDescription = ref("");
const projects = ref([]);
const token = JSON.parse(localStorage.getItem("token"));

processRequest("project", "get", {}, token)
  .then((res) => {
    console.log(res.data);
    projects.value = res.data.projects;
  })
  .catch((err) => {
    console.log(err);
  });

function createProject() {
  processRequest(
    "project",
    "post",
    {
      name: projectName.value,
      description: projectDescription.value,
    },
    token
  )
    .then((res) => {
      console.log(res.data);
      projects.value.push(res.data.project);
    })
    .catch((err) => {
      console.log(err);
    });
}
</script>

<style lang="scss" setup>
@import "@/assets/variables.scss";

.projects-wrapper {
  .create-project {
    form {
      display: flex;
      flex-flow: column;
      align-items: flex-end;
      justify-content: center;

      input {
        margin-bottom: 5px;
      }
    }
  }

  .projects-list {
    display: flex;
    flex-flow: column wrap;

    .f-container {
      cursor: pointer;
      &:hover {
        background-color: rgb(210, 210, 210);
      }

      &.dark:hover {
        background-color: rgb(40, 40, 40);
      }

      em {
        font-size: 12px;
        color: $primary;
      }
    }
  }
}
</style>
