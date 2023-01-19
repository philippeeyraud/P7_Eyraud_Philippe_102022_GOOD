

import { ref, type Ref } from "vue";
import { boolean } from "zod";
import type { MessageForm, Message } from "../message.interface";

export async function createMessage(messageForm: MessageForm) {
    try {
        const mes = JSON.parse(localStorage.getItem("user"));
        const token = mes.token;
        const response = await fetch('http://localhost:3000/api/messages', {
            method: 'POST',
            body: JSON.stringify(messageForm),
            headers: {
                'Content-Type': 'application/json',
                  'Authorization':"BEARER "+token,
            }
         
        });
        if (response.ok) {
            return await response.json();
        } else {
            throw await response.json();
        }
    } catch (e) {
        throw e;
    }
}


//nous créons la fonction pour faire une requête message à notre serveur
/*export async function fetchMessages(): Promise<Message | null> {
   

    return  (await fetch('http://localhost:3000/api/messages', {

        method: 'GET',
       
        headers: {
            'Content-Type': 'application/json',
         }
})).json()


}*/





export function useFetchMessages(): { messages: Ref<Message []| null>, loading: Ref<boolean>,error: Ref<any>}
{const messages = ref<Message[ ]| null>(null)
const loading = ref<boolean>(true);
const error = ref<any>(null);

(async ()=>{

    try {
        const mes = JSON.parse(localStorage.getItem("user"));
        const token = mes.token;
        messages.value = await (await fetch ('http://localhost:3000/api/messages',{

    method: 'GET',
   
    headers: {
        'Content-Type': 'application/json',
        'Authorization':"BEARER "+token,
     }
}) ).json()}
    catch(e){
        error.value = e;

    }finally {
        loading.value = false;
    }
})();
return{
messages,
loading,
error

}

}