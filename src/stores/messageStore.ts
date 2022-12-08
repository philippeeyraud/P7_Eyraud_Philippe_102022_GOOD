
import type { Message } from "@/shared/interfaces/message.interface";
import type { MessageForm } from "@/shared/interfaces/message.interface";
import { defineStore } from "pinia";
import { promise, string } from "zod";
import { fetchActualMessages,  } from "../shared/interfaces/services/message.service";


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
                this.actualMessage = await promise (messageForm)
                const back = await promise (messageForm);
                console.log(back.token);
                localStorage.setItem("message", JSON.stringify(back));
            } catch (e) {
                throw e;
            }

        },

        async fetchActualMessages() {
            this.actualMessage = await fetchActualMessages();
            //Loaded =  avons nous  déja essayé de récupérer l utilisateur connecté
            this.loaded = true;
        },
    }

}); 



            
    


















