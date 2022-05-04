import User from '../models/User';
import Api from './index';

export const Login = async (email: string, password: string): Promise<string> => {
    const { data } = await Api.post("/login", { email, password });
    return data.token;
}

export const Validate = async (): Promise<User> => {
    const { data } = await Api.post("/validate", {});

    console.log('het')

    return User.fromJson(data);
}

export const Register = async (username: string, email: string, password: string): Promise<User> => {
    const { data } = await Api.post("/register", {
        username,
        email,
        password
    });

    return User.fromJson(data)
}