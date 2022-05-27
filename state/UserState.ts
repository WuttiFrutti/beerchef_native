import { Action, action, thunk, Thunk } from "easy-peasy";
import User from "../models/User";
import { saveToken } from "../persistence/token";
import { performRequest } from "../requests";
import { Login, Register, Validate } from "../requests/Auth";
import { LoadingStatus } from "../types/LoadingStatus";


export interface UserStateModel {
    user: User | LoadingStatus,
    setUser: Action<UserStateModel, User | LoadingStatus>;
    login: Thunk<UserStateModel, { email: string, password: string }>;
    validate: Thunk<UserStateModel, undefined>;
    register: Thunk<UserStateModel, { username: string, email: string, password: string }>;
}

const UserState: UserStateModel = {
    user: LoadingStatus.NOT_STARTED,
    setUser: action((state, payload) => {
        state.user = payload;
    }),
    login: thunk(async (actions, payload) => {
        const token = await performRequest(() => Login(payload.email, payload.password))
        await saveToken(token);
        await actions.validate();
    }),
    validate: thunk(async (actions) => {
        try {
            const user = await performRequest(Validate)
            actions.setUser(user)
        } catch {
            actions.setUser(LoadingStatus.NULL)
        }

    }),
    register: thunk(async (actions, payload) => {
        await actions.setUser(await performRequest(() => Register(payload.username, payload.email, payload.password)));
    }),
}


export default UserState;