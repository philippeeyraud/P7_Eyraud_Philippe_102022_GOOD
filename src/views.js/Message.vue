<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="container d-flex flex-row p-20 justify-content-center align-items-start">
    <form @submit="submit" class="card">
      <h1>Messages</h1>
      <li class="mr-20">
        <router-link to="/messagesList">Liste des Messages</router-link>
      </li>
      <li class="mr-20">
        <router-link to="/addMessages">Add a message</router-link>
      </li>
    </form>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 100%;
  width: 500px;
  padding: 20px;
}
</style>
