

import type { MessageForm , Message} from "@/shared/interfaces/message.interface";
import { defineStore } from "pinia";

import { fetchActualMessage,  } from "../shared/interfaces/services/message.service";

export interface MessageState {
    actualMessage: Message | null;
    loaded: boolean
}
//Objectif , récupérer un état directement depuis un composant
//State prend une fonction en valeur qui va retourner un objet messages
export const useMessage = defineStore('Message', {
    state: (): MessageState => ({
        actualMessage: null,
        loaded: false,
    }),
    getters: {
        isAuthenticated(state): boolean | null {
            if (state.actualMessage) {
                return true;
            } else if (!state.actualMessage && state.loaded) {
                return false;
            } else {
                return null;
            }
        },
    },
    actions: {
    async message(messageForm: MessageForm) {
         try {
           //  this.actualMessage = await this.message(messageForm);
               
               
            } catch (e) {
                throw e;
            }

        },

        async fetchActualMessage() {   
            this.actualMessage = await fetchActualMessage();
            //Loaded =  avons nous  déja essayé de récupérer l utilisateur connecté
            this.loaded = true;
        },
    }

}); 



            
    


















