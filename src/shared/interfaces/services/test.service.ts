

//nous créons la fonction pour faire une requête test à notre serveur
import type { Test } from "@/views.js/Test.vue";


export async function fetchtest(): Promise<Test| null> {
   
        const test = JSON.parse (localStorage.getItem("user"));
        const token = test.token;
    console.log(`token=${token}`);
    return await (await fetch('http://localhost:3000/api/test', {

        method: 'GET',
        
        headers: {
            'Content-Type': 'application/JSON',
            'Authorization':"BEARER "+token,
        }
 
    })).json()
    console.log(test)
}