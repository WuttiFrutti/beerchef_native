import BeerList from "../models/BeerList";
import { action, Action } from 'easy-peasy';
import { Thunk } from 'easy-peasy';
import Id from "../models/Id";
import { thunk } from 'easy-peasy';
import { performRequest } from "../requests";
import { AddList, GetLists } from "../requests/List";
import User from "../models/User";
import { StateModel } from './index';
import { LoadingStatus } from "../types/LoadingStatus";


export type BeerListRequest = {
    name: string,
    price: number,
    join: boolean,
    users: Array<Id<User>>
}


export interface ListStateModel {
    lists: Array<BeerList> | LoadingStatus,
    ownedLists: Array<BeerList> | LoadingStatus,

    setLists: Action<ListStateModel, Array<BeerList> | LoadingStatus>,
    setOwnedLists: Action<ListStateModel, Array<BeerList> | LoadingStatus>,

    addList: Thunk<ListStateModel, BeerListRequest>,
    endList: Thunk<ListStateModel, Id<BeerList>>,
    removeList: Thunk<ListStateModel, Id<BeerList>>,
    addUserToList: Thunk<ListStateModel, { shareId: string }>

    getAll: Thunk<ListStateModel, undefined>
}

const ListState: ListStateModel = {
    lists: LoadingStatus.NOT_STARTED,
    ownedLists: LoadingStatus.NOT_STARTED,

    setLists: action((state, payload) => {
        state.lists = payload
    }),
    setOwnedLists: action((state, payload) => {
        state.ownedLists = payload
    }),
    addList: thunk(async (actions, payload, helpers) => {
        const list = await performRequest(() => AddList(payload.name, payload.price, payload.join, payload.users));

        const lists = helpers.getState().lists;
        const ownedLists = helpers.getState().ownedLists;

        if (payload.join && lists instanceof Array<BeerList>) {
            actions.setLists([...lists, list])
        }
        if (ownedLists instanceof Array<BeerList>) {
            actions.setOwnedLists([...ownedLists, list])
        }
    }),
    endList: thunk((state, payload) => {

    }),
    removeList: thunk((state, payload) => {

    }),
    addUserToList: thunk((state, payload) => {

    }),



    getAll: thunk(async (actions, payload, helpers) => {
        const { lists } = await performRequest(GetLists)
        actions.setLists(lists)

        const user = (helpers.getStoreState() as StateModel).userState.user;
        if (user instanceof User) {
            actions.setOwnedLists(lists.filter(list => list.owner === user.key))
        }
    }),
}

export default ListState;