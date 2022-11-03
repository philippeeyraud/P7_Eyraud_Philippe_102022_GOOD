import type { LoginForm, User } from "@/shared/interfaces/user.interface";
import { defineStore } from "pinia";
import { login } from "../shared/interfaces";

interface UserState {
  User: User | null;
  loaded: boolean;
}
//Si le User est null et que loaded passe à true l utilisateur est déconnecté
//si loaded passe a false c'est qu'on est entrain de vérifier
export const useUser = defineStore("user", {
  state: (): UserState => ({
    User: null,
    loaded: false,
  }),
  //Le getter permet de voir si l'utilisateur est connecté

  getters: {
    isAuthenticated(state): boolean | null {
      //If state User return true,cela veut dire que nous sommes connecté
      if (state.User) {
        return true;
        //La on est sur que l utilisateur n est pas connecté
      } else if (!state.User && state.loaded) {
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
        this.User = await login(loginForm);
      } catch (e) {
        throw e;
      }
    },
    //Action qui va nous permettre de récupérer l utilsateur si il est connecté
    async fetchUser() {
     this. User = useUser();
      //on a déja essayé de récupérer le User utilisateur
      this.loaded = true;
    },
  },
});

//Récuperer les données de l utilisateur dans le local storage,création de l utilisateur partir de cette fonction

function getUser() {
  const useUser = localStorage.getItem("User");
  if (User == null) {
    return [];
  } else {
    return JSON.parse(User);
  }
}
//Stocker les utilisateurs dans le localstorage

function saveUser(User: any) {
  localStorage.setItem("User", JSON.stringify(User));
}
