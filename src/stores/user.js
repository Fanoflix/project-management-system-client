import { defineStore } from "pinia";
export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    token: null,
    isLoggedIn: false,
  }),
  getters: {},
  actions: {
    setLocalStorage(token) {
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
    },
    setUserInfo(user) {
      this.token = user.token;
      this.isLoggedIn = true;
      this.setLocalStorage(user.token);
    },
    logoutUser() {
      this.token = null;
      this.isLoggedIn = false;
      localStorage.removeItem("token");
      localStorage.setItem("isLoggedIn", JSON.stringify(false));
    },
  },
});
