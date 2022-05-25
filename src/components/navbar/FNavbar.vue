<template>
  <section :class="navbarClasses">
    <FButton
      size="sm"
      label=">"
      type="secondary"
      rounded
      outlined
      @click.prevent="openSideBar"
    />

    <div class="nav-item links">
      <FLink type="primary" to="/"> Home </FLink>

      <FLink type="primary" to="/signup" v-if="!isLoggedIn"> Signup </FLink>

      <FLink type="primary" to="/login" v-if="!isLoggedIn"> Login </FLink>

      <!-- <FLink type="secondary" to="/dashboard" v-if="isLoggedIn">
        Dashboard
      </FLink> -->
    </div>

    <FButton
      size="sm"
      label="Logout"
      type="danger"
      v-if="isLoggedIn"
      caps
      @click.prevent="logout"
      rounded
    />
    <div v-else style="width: 80px"></div>
  </section>
</template>

<script setup>
import FLink from "../link/FLink.vue";
import FButton from "../button/FButton.vue";
import { useThemeStore } from "../../stores/theme.js";
import { useRouter } from "vue-router";
import { useUserStore } from "../../stores/user.js";
import { computed } from "vue";
import { storeToRefs } from "pinia";

const router = useRouter();
const userStore = useUserStore();
const themeStore = useThemeStore();
const { isDark } = storeToRefs(themeStore); // same thing as the above line
const { isLoggedIn } = storeToRefs(userStore);

const { logoutUser } = useUserStore();

function logout() {
  logoutUser();
  router.push("/");
}

// Props
const props = defineProps({
  filled: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["toggleSidebar"]);

function openSideBar() {
  emits("toggleSidebar");
}

const navbarClasses = computed(() => {
  return [
    "navbar",
    { filled: props.filled, rounded: props.rounded, dark: isDark.value },
  ];
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.navbar {
  z-index: $z-top;
  position: sticky;
  top: 0;
  margin: 0;
  padding: $global-padding;
  min-width: 300px;

  display: flex;
  justify-content: space-between;
  height: $nav-height;

  &.filled {
    background-color: $panel-bg-color-light;
    border: none;
  }

  &:not(.filled) {
    background-color: $color-background;
    border-bottom: 1px solid $white-soft;
  }

  &.rounded {
    border-radius: $global-border-radius;
  }

  .nav-item {
    display: flex;
    align-items: center;
    justify-content: center;

    .links {
      margin: $global-aesthetic-margin;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid transparent;
      transition: background-color $element-trans-time ease-in;
      height: $nav-height;
      min-width: $nav-item-width;
      &.router-link-active {
        border-bottom: 1px solid $primary;
        background-color: $white;
        color: $primary;
      }
    }
  }
}

.dark.navbar {
  a {
    &.router-link-active {
      border-bottom: 1px solid $primary;
      background-color: $secondary-dark;
      color: $primary;
    }
  }
  &.filled {
    background-color: $panel-bg-color-dark;
    border: none;
  }

  &:not(.filled) {
    background-color: $color-background-dark;
    border-bottom: 1px solid $black-soft;
  }
}
</style>
