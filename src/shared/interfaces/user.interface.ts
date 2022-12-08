export interface User {
token(token: any): unknown;
name: string;
  email: string;
  password: string;
  createdAt?: string;
  _id?: string;
}
//Cela correspond à notre utilisateur sauf que tous les champs vont être optionnels


//interface pour le Login

export interface LoginForm {
    email: string;
    password: string;
}
