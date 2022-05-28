import Id from './Id';
import User from './User';
import Drink from './Drink';


export default class ListUser {
    user: Id<User>;
    drinks: Array<Id<Drink>>;
    total: number;

    constructor(user: Id<User>, drinks: Array<Id<Drink>> = [], total: number = 0) {
        this.user = user;
        this.drinks = drinks;
        this.total = total;
    }

    static fromJson(json: any) {
        if (typeof json === 'string') json = JSON.parse(json.toString())

        const listUser = json;

        return new ListUser(new Id<User>(listUser.user),
            [listUser.drinks.map((drink: string) => new Id<Drink>(drink))],
            listUser.total || 0);

    }
}