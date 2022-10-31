<script setup lang="ts">
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
  name: string;
  email: string;
}>({
  users: [],
  message: " ",
  name: " ",
  email: " ",
});
//Pour configurer le formulaire on utilise useForm.

const { handleSubmit, resetForm } = useForm();
//HandleSubmmit va nous permettre de gerer la soumission du formulaire
//On evoque handleSubmit et on lui passe la fonction de callback qui va nous permettre d'envoyer une requete http a notre serveur
const mySubmit = handleSubmit(async (value) => {
  try {
    const response = await fetch("http://localhost:3000/api/auth/signup", {
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
//On configure les trois champs
//trois proprietes reactive que l'on va binder avec v-model
const { value: emailValue } = useField("email");
const { value: passwordValue } = useField("password");
const { value: nameValue } = useField("name");
</script>
<template>
  <div class="container d-flex flex-row p-20 justify-content-center align-items-start">
    <form @submit="mySubmit" class="card">
      <h2 class="mb-20">Inscription</h2>
      <div class="d-flex flex-column mb-10">
        <label for="name" class="mb-5">Nom*</label>
        <input v-model="nameValue" class="mr-10" type="text" placeholder="Prénom" />
      </div>
      <h3 class="mb-20"></h3>
      <div class="d-flex flex-column mb-10">
        <label for="email" class="mb-5">Email*</label>
        <input v-model="emailValue" class="mr-10" type="text" placeholder="Email" />
      </div>
      <h3 class="mb-20"></h3>
      <div class="d-flex flex-column mb-10">
        <label for="password" class="mb-5">Password*</label>
        <input
          v-model="passwordValue"
          class="mr-10"
          type="Password"
          placeholder="Password"
        />
      </div>
      <button class="btn btn-primary">Sauvegarder</button>
    </form>
  </div>

  <h3>Liste des utilisateurs</h3>
  <div class="d-flex flex-column mb-10">
    <ul>
      <li v-for="user in state.users">
        <p>{{ nameValue }}-{{ emailValue }}</p>
      </li>
    </ul>
    <p>{{ state.message }}-{{ state.name }}-{{ state.email }}</p>
    <div class="d-flex flex-column mb-10"></div>
  </div>
</template>
<style lang="scss">
.card {
  width: 100%;
  width: 500px;
  padding: 20px;
}
</style>
