import { retrieveData, storeData, removeData } from "."
const TOKEN_KEY = "TOKEN"

export const saveToken = async (token: string) => {
    await storeData(TOKEN_KEY, token)
}

export const retrieveToken = async () => await retrieveData(TOKEN_KEY);

export const removeToken = async () => {
    await removeData(TOKEN_KEY)
}