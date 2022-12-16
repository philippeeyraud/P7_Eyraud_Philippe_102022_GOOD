
//nous créons le fichier auth.service.ts pour les requêtes relatives à l'authentification :
import type { LoginForm, User,} from "../user.interface";




export async function login(loginForm: LoginForm): Promise<User> {
   
    const response = await fetch('http://localhost:3000/api/auth/login', {
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
 
     

export async function logout(): Promise<void> {  
       const logout =() => {
       localStorage.removeItem('token')}  
   
const response =   await fetch('http://localhost:3000/api/auth/current', {
     method:'DELETE',
    });
   
}

