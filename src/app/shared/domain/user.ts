export class User {
    email: string;
    password: string;
    rememberMe: boolean;

    constructor(email: string,
        password: string) {
        this.email = email;
        this.password = password;
        this.rememberMe = false;
    }
}