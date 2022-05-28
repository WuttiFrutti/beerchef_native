
import { createStore, thunk, Thunk } from 'easy-peasy';
import User from '../models/User';
import DrinkState, { DrinkStateModel } from './DrinkState';
import ListState, { ListStateModel } from './ListState';
import UIState, { UIStateModel } from './UIState';
import UserState, { UserStateModel } from './UserState';

export interface StateModel {
    drinkState: DrinkStateModel,
    listState: ListStateModel,
    uiState: UIStateModel,
    userState: UserStateModel,
    loggedInCheck: Thunk<StateModel, User | null>
}

const store = createStore<StateModel>({
    drinkState: DrinkState,
    listState: ListState,
    uiState: UIState,
    userState: UserState,
    loggedInCheck: thunk(async (actions, payload) => {
        if (payload === null) {
            try{
                await actions.userState.validate();
                return true;
            }catch{
                return false;
            }
        }else{
            return true
        }
    })
})

export default store;