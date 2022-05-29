import Main from "./main";
import Pre from "./pre";
import { createStackNavigator } from '@react-navigation/stack';
import useUser from "../hooks/AuthHooks";
import { LoadingStatus } from "../types/LoadingStatus";
import User from "../models/User";

const Stack = createStackNavigator();

const Screens = () => {
    const user = useUser()

    return <Stack.Navigator screenOptions={{
        headerShown: false,
    }
    }>
        {!(user instanceof User) ? <Stack.Screen
            name="loadingtop"
        >{(props) => <Pre {...props} loaded={user !== LoadingStatus.NOT_STARTED} />}</Stack.Screen>
            : <Stack.Screen
                name="main"
                component={Main}
            />}

    </Stack.Navigator>
}


export default Screens;