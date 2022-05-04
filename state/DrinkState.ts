import { action, Action, thunk, Thunk } from "easy-peasy";
import BeerList from "../models/BeerList";
import Drink from "../models/Drink";
import Id from "../models/Id";
import ListUser from "../models/ListUser";



export interface DrinkStateModel {
    drinks: Set<Drink>,
    setDrinks: Action<DrinkStateModel, Set<Drink>>,

    getListUserDrinks: Thunk<DrinkStateModel, ListUser>,
    getListDrinks: Thunk<DrinkStateModel, Id<BeerList>>,
    addDrinkToList: Thunk<DrinkStateModel, Drink>
    editDrinkOnList: Thunk<DrinkStateModel, { list: Id<BeerList>, drink: Id<Drink>, amount: number }>
    deleteDrinkOnList: Thunk<DrinkStateModel, Id<Drink>>
}

const DrinkState: DrinkStateModel = {
    drinks: new Set(),
    setDrinks: action((state, payload) => {

    }),
    getListUserDrinks: thunk((state, payload) => {

    }),
    getListDrinks: thunk((state, payload) => {

    }),
    addDrinkToList: thunk((state, payload) => {

    }),
    editDrinkOnList: thunk((state, payload) => {

    }),
    deleteDrinkOnList: thunk((state, payload) => {

    }),
}

export default DrinkState;