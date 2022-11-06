import type { LoginForm, User } from "@/shared/interfaces/user.interface";
import { defineStore, type PiniaCustomStateProperties, type StoreDefinition } from "pinia";
import { fetchCurrentUser, login } from "../shared/interfaces";

interface UserState {
  currentUser: User | null;
  loaded: boolean;
}
//Si le User est null et que loaded passe à true l utilisateur est déconnecté
//si loaded passe a false c'est qu'on est entrain de vérifier si il est connecté
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
        //La on est sur que l utilisateur n est pas connecté
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
      try {this.currentUser=await login(loginForm)
        const back = await login(loginForm);
        console.log(back.token);
             localStorage.setItem("user", JSON.stringify(back));
      } catch (e) {
        throw e;
      }
    },
    //Action qui va nous permettre de récupérer l utilsateur si il est connecté
    async fetchcurrentUser() {
      this.currentUser = await fetchCurrentUser();
      //Loaded =  avons nous  déja essayé de récupérer l utilisateur connecté
      this.loaded = true;
    },
  },
});

//Stocker les données dans le localstorage
   //         function saveCart(cart) {
 //               localStorage.setItem("cart", JSON.stringify(cart));
//            }
/* function getCart() {
                let cart = localStorage.getItem("cart");
                if (cart == null) {
                    return [];
                }
                else {
                    return JSON.parse(cart);
                }  
            }
            //  ajout au panier , c'est ce produit(productCart)que je veux ajouter au panier
            function addCart(productCart) {
                let cart = getCart();   
                //on récupère l'Id et la couleur

                let foundProduct = cart.find(p => p.id == productCart.id && p.color == productCart.color);

                if (foundProduct != undefined) {
                    //Gérer une quantité, si le produit existe  on lui ajoute une quantité sous forme de nombre.
                    //parseInt analyse une chaine de caractères et renvoie un nombre.  
                    //la quantité est recalculé à chaque ajout de produit
                    let newQuantity = parseInt(foundProduct.quantity) + parseInt(productCart.quantity);
                     foundProduct.quantity = newQuantity;

                } else {

                    cart.push(productCart);
                }

                saveCart(cart);
            }
            //product Cart objet  qui permet de recupérer les éléments suivant, pour pouvoir les envoyer sur le localstorage.

            let productCartObj = {
                id: productId,
                quantity: quantityElement.value,
                color: productColor.value,


            };

            addCart(productCartObj);*/
//function saveUser(User: any) {
 // localStorage.setItem("user", JSON.stringify(User));
//localStorage.setItem('user',JSON.stringify({useUser :"_id"}))


