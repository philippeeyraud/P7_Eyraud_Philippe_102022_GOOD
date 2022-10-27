import type { UserForm } from './../user.interface';

const BASE_URL = 'http://localhost:3000/api/user';

export async function createUser(userForm: UserForm) {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify(userForm),
            headers: {
                'Content-Type': 'appplication/json'
            }

        });
        if (response.ok) {
            return response.json();
        } else {
            throw await response.json()
        }
    } catch (e) {
        throw e;
    }    
}
