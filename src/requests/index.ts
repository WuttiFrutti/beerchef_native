import axios from "axios";
import { retrieveToken } from "../persistence/token";

const Api = axios.create({ baseURL: "http://192.168.178.108:8080", withCredentials: true })

Api.interceptors.request.use(async (config) => {
    try {
        const token = await retrieveToken();
        config.headers = {
            Cookie: `token=${token};`
        };
        return config
    } catch (e) {
        config.headers = {
            Cookie: ``
        };
        return config
    }
})

export async function performRequest<T>(request: () => Promise<T>): Promise<T> {
    try {
        return await request();
    } catch (e) {
        console.log(e)
        throw Error("Error Performing request")
    }
}

export const sleep = (ms: number = 100) => new Promise(r => setTimeout(r, ms));

export default Api;
