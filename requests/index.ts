import axios from "axios";
import { retrieveToken } from "../persistence/token";

const Api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL || "192.168.178.108:8080" })


Api.interceptors.request.use(async (config) => {
    const token = await retrieveToken();
    config.headers = {
        Cookie: `token=${token};`
    };
})


export async function performRequest<T>(request: () => Promise<T>): Promise<T> {
    try {
        return await request();
    } catch (e) {
        throw Error("Error Performing request")
    }
}

export const sleep = (ms: number = 100) => new Promise(r => setTimeout(r, ms));

export default Api;
