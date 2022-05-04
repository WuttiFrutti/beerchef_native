export default class Id<T>{
    key: string;

    constructor(key: string){
        this.key = key;
    }

    toJson(){
        return this.key
    }
}
