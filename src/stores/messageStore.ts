

import type { MessageForm , Message} from "@/shared/interfaces/message.interface";
import { defineStore } from "pinia";
import { defineComponent, ref } from "vue";

import {  useFetchMessages,  } from "../shared/interfaces/services/message.service";

export interface MessageState {
    messages: Message | null;
    loaded: boolean
}
//Objectif , récupérer un état directement depuis un composant
//State prend une fonction en valeur qui va retourner un objet messages
export const useMessage = defineStore('Message', {
    state: (): MessageState => ({
        messages: null,
        loaded: false,
    }),
    getters: {
        isAuthenticated(state): boolean | null {
            if (state.messages) {
                return true;
            } else if (!state.messages && state.loaded) {
                return false;
            } else {
                return null;
            }
        
        },
    },
    actions: {
    async messages(_messageForm: MessageForm) {
         try {
            this.messages = await this.messages(_messageForm);
               
               
            } catch (e) {
                throw e;
            }

        },

        async useFetchMessages() {   
            this.messages = await useFetchMessages();
            //Loaded =  avons nous  déja essayé de récupérer l utilisateur connecté
            this.loaded = true;
        },
    }

}); 



export default defineComponent({

    name: "FileUpload",

    setup() {
        const file = ref<File | null>();
        const form = ref<HTMLFormElement>();

        function onFileChanged($event: Event) {
            const target = $event.target as HTMLInputElement;
            if (target && target.files) {
                file.value = target.files[0];
            }
        }

        async function saveImage() {
            if (file.value) {
                try {
                // save file.value
                } catch (error) {
                    console.error(error);
                    form.value?.reset();
                    file.value = null;
                } finally {
                }
            }
        };

        return {
            saveImage,
            onFileChanged,
        }
    }
});

            
    


















