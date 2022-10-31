import { defineStore } from 'pinia';
import type { LoginForm, User } from '../interfaces';


interface UserState {
    currentUser: User | null,
    loaded: boolean
}

export const useUser = defineStore('user', {
    state: (): UserState => ({
        currentUser: null,
        loaded: false
    }),
    getters: {
        isAuthenticated(state): boolean | null {
            if (state.currentUser) {
                return true;
            } else if (!state.currentUser && state.loaded) {
                return false;
            } else {
                return null;
            }
        }
    },
    actions: {
        async login(loginForm: LoginForm) {
            try {
                this.currentUser = await login(loginForm);
            } catch (e) {
                throw e;
            }
        },
       
    }
});