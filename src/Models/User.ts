import { RegisterOptions } from "react-hook-form";

class User {
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public role: string // user or admin

    public static nameValidation: RegisterOptions<User> = {
        required: { value: true, message: 'missing field' }
    };
}

export default User;
