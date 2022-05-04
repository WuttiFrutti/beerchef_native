import { Action, action, createTypedHooks, thunk, Thunk } from "easy-peasy";
import User from "../models/User";
import { performRequest } from "../requests";
import { Login, Register, Validate } from "../requests/Auth";
import { Platform } from 'react-native';
import { retrieveToken } from "../persistence/token";
import { saveToken } from './../persistence/token';

export interface UserStateModel {
    user: User | null,
    setUser: Action<UserStateModel, User>;
    login: Thunk<UserStateModel, { email: string, password: string }>;
    validate: Thunk<UserStateModel, undefined>;
    register: Thunk<UserStateModel, { username: string, email: string, password: string }>;
}

const UserState: UserStateModel = {
    user: null as User | null,
    setUser: action((state, payload) => {
        state.user = payload;
    }),
    login: thunk(async (actions, payload) => {
        const token = await performRequest(() => Login(payload.email, payload.password))
        await saveToken(token);
        actions.validate()
    }),
    validate: thunk(async (actions) => {
        actions.setUser(await performRequest(Validate))
    }),
    register: thunk(async (actions, payload) => {
        actions.setUser(await performRequest(() => Register(payload.username, payload.email, payload.password)));
    }),
}


export default UserState;