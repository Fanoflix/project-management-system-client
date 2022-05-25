<template>
  <FNavbar @toggleSidebar="toggleSidebar" filled />
  <FSidebar ref="sidebar" :isVisible="isSideBarVisible" filled />

  <!-- Make this a component later-->
  <RouterView v-slot="{ Component }">
    <div class="current-view">
      <Transition name="fade" mode="out-in">
        <component :is="Component"> </component>
      </Transition>
    </div>
  </RouterView>
</template>

<script setup>
import { RouterView } from "vue-router";
import { useThemeStore } from "./stores/theme.js";
import { onBeforeMount, ref } from "vue";
import FNavbar from "./components/navbar/FNavbar.vue";
import FSidebar from "./components/sidebar/FSidebar.vue";
import { useUserStore } from "@/stores/user.js";

const { setUserInfo } = useUserStore();
let body = document.querySelector("body");
const themeStore = useThemeStore();
const { setIsDark } = themeStore; // same thing as the above line
const sidebar = ref(null);
const isSideBarVisible = ref(false);

onBeforeMount(() => {
  let storedIsDark = JSON.parse(localStorage.getItem("isDark"));
  if (storedIsDark) {
    body.classList.add("dark");
    setIsDark(storedIsDark);
  }

  let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
  if (isLoggedIn) {
    let user = {
      token: JSON.parse(localStorage.getItem("token")),
      isLoggedIn: true,
    };
    setUserInfo(user);
  }
});

function toggleSidebar() {
  isSideBarVisible.value = !isSideBarVisible.value;
}

// changing Body's background color according to isDark in store theme.js
themeStore.$subscribe((_, state) => {
  if (state.isDark) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});
</script>

<style lang="scss">
@import "@/assets/variables.scss";
@import "@/assets/base-styling.scss";
@include base-styling;

.nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 5vh;

  .left {
    display: flex;

    button {
      margin-right: 6px;
    }
  }

  .right {
    display: flex;
    button {
      margin-left: 6px;
    }
  }
}

.current-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;

  padding: 15px;

  min-height: calc(98vh - ($nav-height + (3 * $global-aesthetic-margin)));
  margin: 0px $global-aesthetic-margin;
  margin-top: $global-aesthetic-margin;
  margin-bottom: (2 * $global-aesthetic-margin);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-enter-active,
.fade-leave-active {
  // transition: transform 0.075s linear, opacity 0.1s ease-out;
  transition: transform 0.12s cubic-bezier(0.42, 0.34, 0, 1.89),
    opacity 0.05s cubic-bezier(0.55, -0.7, 0.66, 1.5);
}
</style>
