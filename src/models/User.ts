import Id from './Id';


export default class User {
    username: string;
    email: string;
    total: number;
    key: Id<User>;

    constructor(username: string, email: string, total: number, key: Id<User>) {
        this.username = username;
        this.email = email;
        this.total = total;
        this.key = key;
    }

    static fromJson(json: any){
        if (typeof json === 'string') json = JSON.parse(json.toString())

        const user = json;

        return new User(
            user.username,
            user.email,
            user.total,
            new Id<User>(user.key)
        )
    }
}