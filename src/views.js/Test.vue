<script setup lang="ts">
import { fetchtest } from "@/shared/interfaces/services/test.service";
</script>

<template>
  <h1>TEST</h1>
  <div class="container d-flex flex-row p-20 justify-content-center align-items-start">
    <div>
      <button v-on:click="fetchtest()" class="btn btn-primary">Test</button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
