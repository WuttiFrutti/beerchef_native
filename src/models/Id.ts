// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class Id<T>{
    key: string;

    constructor(key: string) {
        this.key = key;
    }

    toString(){
        return this.key
    }

    toJSON() {
        return this.key
    }
}
