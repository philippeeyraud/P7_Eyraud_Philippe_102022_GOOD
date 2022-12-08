
import type { MessageForm, Message } from "../message.interface";

export async function createMessage(messageForm: MessageForm) {
    try {
        const response = await fetch('http://localhost:3000/api/messages/messages', {
            method: 'POST',
            body: JSON.stringify(messageForm),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            return response.json();
        } else {
            throw await response.json();
        }
    } catch (e) {
        throw e;
    }
    console. log(createMessage)
}
//nous créons la fonction pour faire une requête message à notre serveur
export async function fetchActualMessages(): Promise<Message | null> {
   
        const message = JSON.parse (localStorage.getItem("message"));
        const token = message.token;
    console.log(`token=${token}`);
    return await (await fetch('http://localhost:3000/api/messages/actual', {

        method: 'GET',
        
        headers: {
            'Content-Type': 'application/JSON',
            'Authorization':"BEARER "+token,
        }
 
    })).json()
    
}