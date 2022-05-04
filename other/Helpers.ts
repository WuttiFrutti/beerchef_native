
import { Platform, Dimensions } from 'react-native';


export const maxHeight = Platform.OS === 'web' ? '100vh' : Dimensions.get('window').height
export const maxWidth = Platform.OS === 'web' ? '100vw' : Dimensions.get('window').width

export const maxHeightVal = Platform.OS === 'web' ? document.body.clientHeight : Dimensions.get('window').height
export const maxWidthVal = Platform.OS === 'web' ? document.body.clientWidth : Dimensions.get('window').width


export const getCurrentWidth = () => Platform.OS === 'web' ? document.body.clientWidth : Dimensions.get('window').width