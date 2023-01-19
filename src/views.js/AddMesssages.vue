<script setup lang="ts">
import type { MessageForm, Message } from "../shared/interfaces/message.interface";
import { toFormValidator } from "@vee-validate/zod";
import { useField, useForm } from "vee-validate";


import { RouterLink, useRouter } from "vue-router";
import  { z, string} from "zod";

import { createMessage} from "../shared/interfaces/services/message.service";


const router = useRouter();
const validationSchema = toFormValidator(
  z.object({
    description: z.string({ required_error: "Vous devez renseigner ce champ" }),
  })
);

const { handleSubmit } = useForm<{ description: string }>({
  validationSchema,
});

const submit = handleSubmit(async (formValue: MessageForm) => {
  try {
    await createMessage(formValue);
     router.push("/messagesList");

  } catch (e) {
    console.log(e);
  }



});
const { value: descriptionValue, errorMessage: descriptionError } = useField(
  "description"

);


</script>

<template>
  <div class="container d-flex flex-row p-20 justify-content-center align-items-start">
    <form @submit="submit" class="card">
      <h1>Messages</h1>
      <li class="mr-20">
        <router-link to="/messagesList">List des Messages</router-link>
      </li>
      <div class="d-flex flex-column mb-10">
        <label for="decription" class="mb-5">Description </label>
        <input v-model="descriptionValue" id="description " type="text" class="height-1" />

        <p v-if="descriptionError" class="form-error">{{ descriptionError }}</p>
      </div>
      <div>
        <button class="btn btn-primary">AddMessages</button>
      </div>

      <h1>FileUpload</h1>

      <div>
        <label>File
          <input type="file" id="file" ref="file" v-on:change="onChangeFileUpload()" />
        </label>
        <button v-on:click="submitForm()">Upload</button>
      </div>





      <!-- <button class="d-flex flex-column mb-10">
        <span class="mat-button-wrapper">ADD MESSAGE</span>
        <span class="mat-button-focus-overlay"></span>
      </button>-->
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
