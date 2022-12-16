import type { Message } from './../message.interface';
import type { User, UserForm } from "../user.interface";
import type { MessageForm, Message } from "../message.interface";

export async function createMessage(messageForm: MessageForm) {
    try {
        const test = JSON.parse(localStorage.getItem("user"));
        const token = test.token;
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
export async function fetchActualMessage(): Promise<Message | null> {
   

    return await (await fetch('http://localhost:3000/api/messages/actual', {

        method: 'GET',
        
        headers: {
            'Content-Type': 'application/json',
      
        }

    })).json()
   
}
