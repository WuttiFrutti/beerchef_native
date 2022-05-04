
import { useEffect, useState } from "react";
import { sleep } from "../requests";
import { useStateActions, useStateState } from './../hooks/StateHooks';
import Main from "./main";
import Pre from "./pre";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Screens = () => {
    const loggedInCheck = useStateActions(actions => actions.loggedInCheck)
    const user = useStateState(s => s.userState.user)
    const [loaded, setLoaded] = useState(false)


    useEffect(() => {
        (async () => {
            await loggedInCheck(user)
            await sleep(1000)
            setLoaded(true)
        })()
    }, [])


    return <Stack.Navigator screenOptions={{
        headerShown: false,
        contentStyle: {
            backgroundColor: ''
        },
        animationEnabled: true,
        animation: 'slide_from_right'
    }
    }>
        {user === null ? <Stack.Screen
            name="loadingtop"
        >{(props) => <Pre {...props} loaded={loaded} />}</Stack.Screen>
            : <Stack.Screen
                name="main"
                component={Main}
            />}

    </Stack.Navigator>
}


export default Screens;