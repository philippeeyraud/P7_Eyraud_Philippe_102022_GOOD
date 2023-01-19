
<script setup lang="ts">
import { useFetchMessages } from '../shared/interfaces/services/message.service';

const { messages,loading, error} = useFetchMessages();
</script>

<template>
  <h1>Liste des messages</h1>
 <h3 v-if="error">Ily a une erreur</h3>
  <h3 v-else-if="loading">chargement...</h3>

  <ul v-else>
    <li  class="d-flex flex-row align-items-center"
    v-for="message of messages"
     :key="message._id">
    <span class="flex-fill">{{message.description}}</span>
    <button class="btn btn-primary">Modify</button>
    <button class="btn btn-primary">Delete</button>
    </li>
  </ul>


</template>

<style scoped lang="scss">
.container {
  width: 100%;
}

li {
  border: var(--border);
  border-radius: var(--border-radius);
  padding: 5px 15px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: var(--gray-1);
  }
}
</style>


