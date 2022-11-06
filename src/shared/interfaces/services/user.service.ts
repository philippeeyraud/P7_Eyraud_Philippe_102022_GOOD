//Dans ce fichier, nous créons la fonction pour faire une requête à notre serveur pour créer un utilisateur :

import type { User, UserForm } from "../user.interface";
const BASE_URL_S = "http://localhost:3000/api/auth/signup";

export async function createUser(userForm: UserForm) {
    try {
        const response = await fetch(BASE_URL_S, {
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
    return await (await fetch('${BASE_URL_S}/current')).json();
}