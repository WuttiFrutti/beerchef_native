import Id from './Id';
import User from './User';
import BeerList from './BeerList';


export default class Drink {
    amount: number;
    user: Id<User>;
    list: Id<BeerList>;
    updatedOn: Date;
    key: Id<Drink>;

    constructor(amount: number, user: Id<User>, list: Id<BeerList>, updatedOn: Date, key: Id<Drink>) {
        this.amount = amount;
        this.user = user;
        this.list = list;
        this.updatedOn = updatedOn;
        this.key = key;
    }

    static fromJson(json: any){
        if (typeof json === 'string') json = JSON.parse(json.toString())

        const drink = json;

        return new Drink(
            drink.amount,
            new Id<User>(drink.user),
            new Id<BeerList>(drink.list),
            new Date(drink.updatedOn),
            new Id<Drink>(drink.key)
        )
    }
}