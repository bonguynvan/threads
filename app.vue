<template>
  <div class="bg-black fixed w-[calc(100%+1px)] h-full">
    <NuxtPage />
    <CreatePost
      :class="[
          {'max-h-[100vh] transition-all duration-200 ease-in visible': userStore.isMenuOverlay},
          {'max-h-0 transition-all duration-200 ease-in invisible': !userStore.isMenuOverlay}
      ]"
    />
    <Modal
      :class="[
          {'max-h-[100vh] transition-all duration-200 ease-in visible': userStore.isLogoutOverlay},
          {'max-h-0 transition-all duration-200 ease-in invisible': !userStore.isLogoutOverlay}
      ]"
    />
  </div>
</template>
<script setup>
import { useUserStore } from "~/stores/user";
import CreatePost from "./components/CreatePost.vue";
const userStore = useUserStore();

</script>
