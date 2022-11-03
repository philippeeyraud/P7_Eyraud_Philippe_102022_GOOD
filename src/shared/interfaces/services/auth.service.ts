//nous créons le fichier auth.service.ts pour les requêtes relatives à l'authentification :
import type { LoginForm, User } from "../user.interface";


const BASE_URL_L = "http://localhost:3000/api/auth/login";

export async function login(loginForm: LoginForm): Promise<User> {
    const response = await fetch(BASE_URL_L, {
        method: "POST",
        body: JSON.stringify(loginForm),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        return await response.json();
    } else {
        throw await response.json();
      
    }
}