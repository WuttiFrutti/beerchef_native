import { Action, action, thunk, Thunk } from "easy-peasy";
import User from "../models/User";
import { retrieveToken, saveToken } from "../persistence/token";
import { performRequest } from "../requests";
import { Login, Logout, Register, Validate } from "../requests/Auth";
import { LoadingStatus } from "../types/LoadingStatus";
import { removeToken } from './../persistence/token';


export interface UserStateModel {
    user: User | LoadingStatus,
    setUser: Action<UserStateModel, User | LoadingStatus>;
    login: Thunk<UserStateModel, { email: string, password: string }>;
    validate: Thunk<UserStateModel, undefined>;
    register: Thunk<UserStateModel, { username: string, email: string, password: string }>;
    logout: Thunk<UserStateModel, undefined>;
}

const UserState: UserStateModel = {
    user: LoadingStatus.NOT_STARTED,
    setUser: action((state, payload) => {
        state.user = payload;
    }),
    login: thunk(async (actions, payload) => {
        await removeToken()
        const token = await performRequest(() => Login(payload.email, payload.password))
        await saveToken(token);
        await actions.validate();
    }),
    validate: thunk(async (actions) => {
        try {
            if (await retrieveToken() != "") {
                const user = await performRequest(Validate)
                actions.setUser(user)
            } else {
                actions.setUser(LoadingStatus.NULL)
            }
        } catch (e) {
            actions.setUser(LoadingStatus.NULL)
        }

    }),
    register: thunk(async (actions, payload) => {
        await performRequest(() => Register(payload.username, payload.email, payload.password));
        await actions.login({ email: payload.email, password: payload.password })
    }),
    logout: thunk(async (actions) => {
        await performRequest(Logout)
        await removeToken();
        actions.setUser(LoadingStatus.NULL)
    }),
}


export default UserState;