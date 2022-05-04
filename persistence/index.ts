import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: any) => {
    try {
        await AsyncStorage.setItem(`@${key}`, value)
    } catch (e) {
        throw Error("Error writing value")
    }
}

export async function retrieveData(key: string): Promise<string> {
    try {
        const value = await AsyncStorage.getItem(`@${key}`)
        if (value !== null) {
            return value
        }
        throw Error("Data not set")
    } catch (e) {
        throw Error("Error reading value")
    }
}