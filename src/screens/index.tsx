
import { useEffect, useState } from "react";
import { sleep } from "../requests";
import { useStoreActions, useStoreState } from '../hooks/EasyHooks';
import Main from "./main";
import Pre from "./pre";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useUser from "../hooks/AuthHooks";
import { LoadingStatus } from "../types/LoadingStatus";
import User from "../models/User";

const Stack = createNativeStackNavigator();

const Screens = () => {
    const user = useUser()

    return <Stack.Navigator screenOptions={{
        headerShown: false,
        contentStyle: {
            backgroundColor: ''
        },
        animation: 'slide_from_right'
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