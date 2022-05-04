import BeerList from "../models/BeerList";
import { action, Action } from 'easy-peasy';
import { Thunk } from 'easy-peasy';
import { UserStateModel } from './UserState';
import Id from "../models/Id";
import { StateModel } from ".";
import { thunk } from 'easy-peasy';




export interface ListStateModel {
    lists: Set<BeerList>,
    ownedLists: Set<BeerList>,
    setLists: Action<ListStateModel, Set<BeerList>>,
    setOwnedLists: Action<ListStateModel, Set<BeerList>>,

    addList: Thunk<ListStateModel, BeerList>,
    endList: Thunk<ListStateModel, Id<BeerList>>,
    removeList: Thunk<ListStateModel, Id<BeerList>>,
    addUserToList: Thunk<ListStateModel, { shareId: string }>

    getAll: Thunk<StateModel, undefined>
}

const ListState: ListStateModel = {
    lists: new Set(),
    ownedLists: new Set(),
    
    setLists: action((state, payload) => {

    }),
    setOwnedLists: action((state, payload) => {

    }),
    addList: thunk((state, payload) => {

    }),
    endList: thunk((state, payload) => {

    }),
    removeList: thunk((state, payload) => {

    }),
    addUserToList: thunk((state, payload) => {

    }),



    getAll: thunk((state, payload) => {

    }),
}

export default ListState;