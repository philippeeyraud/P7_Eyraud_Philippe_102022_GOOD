import { login, logout } from '../shared/interfaces';

import type { LoginForm, User } from "@/shared/interfaces/user.interface";
import { defineStore } from "pinia";
import { string } from "zod";
import { fetchCurrentUser,  } from "../shared/interfaces/services/user.service";


interface UserState {
  currentUser: User | null;
 
  // userm: Message | null;
  //Si le User est null et que loaded passe à true l utilisateur est déconnecté
  //si loaded passe a false c'est qu'on est entrain de vérifier si il est connecté
  loaded: boolean;
}

export const useUser = defineStore("user", {
  state: (): UserState => ({
    currentUser: null,
    loaded: false,
  }),
  //Le getter permet de voir si l'utilisateur est connecté

  getters: {
    isAuthenticated(state): boolean | null {
      //If state User return true,cela veut dire que nous sommes connecté
      if (state.currentUser) {
        return true;
        //else on est sur que l utilisateur n'est pas connecté
      } else if (!state.currentUser && state.loaded) {
        return false;

      } else {
        return null;
      }
    },
  },

  //Nous créons l'action pour la connexion :
  actions: {
    async login(loginForm: LoginForm) {
      try {
        this.currentUser = await login(loginForm)
        const back = await login(loginForm);
        console.log(back.token);
        localStorage.setItem("user", JSON.stringify(back));
      } catch (e) {
        throw e;
      }

    },

    async logout() {
      await logout();
      this.currentUser = null;

    },


    //Action qui va nous permettre de récupérer l utilsateur qui est actuelementconnecté
    async fetchCurrentUser() {
      this.currentUser = await fetchCurrentUser();
      //Loaded =  avons nous  déja essayé de récupérer l utilisateur connecté
      this.loaded = true;
    },

    
  }

});


