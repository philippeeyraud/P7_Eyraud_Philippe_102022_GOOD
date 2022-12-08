

//Dans ce fichier, nous créons la fonction pour faire une requête à notre serveur pour créer un utilisateur :

import { pushScopeId } from "vue";
import { never } from "zod";
import type { User, UserForm } from "../user.interface";


export async function createUser(userForm: UserForm) {
    try {
        const response = await fetch('http://localhost:3000/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify(userForm),
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
}
   
    
    export async function fetchCurrentUser(): Promise<User | null> {
    //Récupérer sous forme d'objet les données du localstorage
        const user = JSON.parse (localStorage.getItem("user"));
        const token = user.token;
console.log(user)
    return await (await fetch('http://localhost:3000/api/auth/current', {

        method: 'GET',
        
        headers: {
            'Content-Type': 'application/JSON',
            'Authorization':"BEARER "+token,
        }
 
    })).json()

}








