import {defineStore} from "pinia";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: true,
    user: {
      email: null,
      password: null,
    },
    token: null,
  }),
  getters: {
    user: (state) => state.user,
    token: (state) => state.token,
  },
  actions: {
    async login() {
      // const user = await ApiService.login(state.user())
    }
  }
});
