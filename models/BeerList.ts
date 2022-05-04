import Id from './Id';
import User from './User';
import ListUser from './ListUser';


export default class BeerList {
    name: string;
    price: number;
    owner: Id<User>;
    users: Set<ListUser>;
    shareId: string;
    total: number;
    key: Id<BeerList>;

    constructor(name: string, price: number, owner: Id<User>, users: Set<ListUser>, shareId = "", total: number = 0, key:Id<BeerList> = new Id("")) {
        this.name = name;
        this.price = price;
        this.owner = owner;
        this.users = users;
        this.shareId = shareId;
        this.total = total;
        this.key = key
    }

    static fromJson(json: any) {
        if (typeof json === 'string') json = JSON.parse(json.toString())

        const list = json;

        return new BeerList(
            list.name,
            Number(list.price),
            new Id<User>(list.user),
            new Set<ListUser>(list.users.map(ListUser.fromJson)),
            list.shareId || "",
            list.total || 0,
            new Id<BeerList>(list.key)
        )
    }

}

