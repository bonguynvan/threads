import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    posts: [],
    isMenuOverlay: false,
    isLogoutOverlay: false,
  }),
  actions: {
    async getAllPosts() {
      try {
        let res = await useFetch('/api/get-all-posts')
        this.posts = res.data
        return res.data
      } catch (e) {
        console.log(e);
      }
    }
  }
});
