<script lang="ts" setup>
defineProps<{
  isLoggedin: boolean | null;
}>();
const emit = defineEmits<{
  (e: "logout"): void;
}>();
</script>

<template>
  <nav class="header-container d-flex flex-row align-items px-20">
    <div class="flex-fill d-flex flex-row align-items-center">
      <router-link to="/">
        <h1>Application</h1>
      </router-link>
    </div>

    <ul class="d-flex flex-row align-items-center">
      <!--Si l utilisateur est connecté on affiche mon profil et deconnexion, si il n'est pas connecté on affiche connexion et inscription-->
      <template v-if="isLoggedin">
        <li clas="'mr-20">
          <router-link to="/profil">Mon profil</router-link>
        </li>
        <li @click="emit('logout')">Deconnexion</li>
      </template>
      <template v-else>
        <li class="mr-20">
          <router-link to="/connexion">Connexion</router-link>
        </li>

        <li>
          <router-link to="/inscription">Inscription</router-link>
        </li>
      </template>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.header-container {
  background-color: var(--primary-1);

  a,
  li {
    color: white;
    cursor: pointer;
  }
}
</style>
