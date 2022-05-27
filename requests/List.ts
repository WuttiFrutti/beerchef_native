import Api from ".";
import BeerList from "../models/BeerList";
import Id from "../models/Id";
import User from "../models/User";




export const AddList = async (name: string, price: number, join: boolean, users: Array<Id<User>>): Promise<BeerList> => {
    const { data } = await Api.post("/list", {
        name,
        price,
        join,
        users: [...users]
    });

    return BeerList.fromJson(data);
}

export const GetLists = async () => {
    const { data } = await Api.get("/list/all")

    return {
        lists: data.lists.map((s: any) => BeerList.fromJson(s)) as Array<BeerList>
    }
}