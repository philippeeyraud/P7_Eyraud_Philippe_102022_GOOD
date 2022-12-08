<script setup lang="ts">
import { useUser } from "@/stores/userStore";
//Je récupère le store
const userStore = useUser();
//Je récupère le user
const user = userStore.currentUser;
</script>

<template>
  <h1>Profil</h1>

  <div class="d-flex flex-row align-items-center justify-content-center">
    <div class="card">
      <pre>{{ userStore.currentUser }}</pre>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 100%;
  max-width: 300px;
}
</style>
