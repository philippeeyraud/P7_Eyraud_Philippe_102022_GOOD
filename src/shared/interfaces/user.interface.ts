export interface User {
name: string;
  email: string;
  password: string;
  createdAt?: string;
  _id?: string;
}
//Cela correspond à notre utilisateur sauf que tous les champs vont être optionnels
export interface UserForm extends Partial<User> { }

//iterface pour le Login

export interface LoginForm {
    email: string;
    password: string;
}