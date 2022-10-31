<script setup lang="ts">
import type { LoginForm } from './../shared/interfaces';
import { defineStore } from "pinia";
import { useForm, useField } from "vee-validate";
import { reactive } from "vue";


//Si l'utilisateur a été créer on rajoute _id
interface User {
  name: string;
  email: string;
  password: string;
  createdAt?: string;
  _id?: string;
}
//on a besoin de recuperer des users avec la mmethode reactive

const state = reactive<{
  users: User[];
  message: string;
  email: string;
}>({
  users: [],
  message: " ",
  email: " ",
});
//Pour configurer le formulaire on utilise useForm.

const { handleSubmit, resetForm } = useForm();
//HandleSubmmit va nous permettre de gerer la soumission du formulaire
//On evoque handleSubmit et on lui passe la fonction de callback qui va nous permettre d'envoyer une requete http a notre serveur
const mySubmit = handleSubmit(async (value) => {
  try {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      //information que l on envoi au travers de requete post
      //L'objet js est converti au formatjson
      body: JSON.stringify(value),
      //On definie dans headers le type d'info que l'on envoi
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    state.message = result.message;
    resetForm();
  } catch (err) {
    console.error(err);
  }

});



//proprietes reactive que l'on va binder avec v-model
const { value: emailValue } = useField("email");
const { value: passwordValue } = useField("password");

</script>
<template>
  <div class="container d-flex flex-row p-20 justify-content-center align-items-start">
    <form
      @submit="mySubmit"
      class="card"
    >
      <h2 class="mb-20">Connexion</h2>
      <div class="d-flex flex-column mb-10">
        <label
          for="email"
          class="mb-5"
        >Email*</label>
          <input
            v-model="emailValue"
            id="email"
            type="text"
          />
      </div>
      <div class="d-flex flex-column mb-10">
        <label
          for="password"
          class="mb-5"
        >Mot de passe</label>
          <input
            v-model="passwordValue"
            id="password"
            type="password"
          />
      </div>
      <div>
        <button class="btn btn-primary">Connexion</button>
      </div>
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
