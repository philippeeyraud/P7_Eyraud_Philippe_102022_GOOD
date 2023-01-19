<script setup lang="ts">
import TheHeader from "@/components/Header.vue";
import { useRouter } from "vue-router";
import { useMessage } from "./stores/messageStore";
import { useUser } from "./stores/userStore";


//on récupère notre userStore 
const messageStore= useMessage();
console.log(messageStore.$state)
const userStore = useUser();

const router = useRouter();

async function logout() {
  await userStore.logout();
  router.push("/Connexion");
}

</script>

<template>
  <div class="d-flex flex-column app-container">
    <TheHeader :isAuthenticated="userStore.isAuthenticated"  @logout="logout" />
    <router-view class="flex-fill"></router-view>
  </div>
 
  
</template>

<style lang="scss">
@import "./assets/scss/base.scss";
.app-container {
  height: 100vh;
}
</style>
