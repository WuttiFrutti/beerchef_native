import { View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { withTheme } from "react-native-paper"
import { maxWidth, maxWidthVal } from "../../other/Helpers";
import { Logo } from "../../other/SVG";
import { maxHeight, maxHeightVal } from './../../other/Helpers';
import Animated, { Transition, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import LoadingPage from './LoadingPage';
import LoginPage from './LoginPage';
import RegisterPage from "./RegisterPage";

const Stack = createNativeStackNavigator();
const Pre = ({ loaded, theme }) => {

    return <>

        <View style={{
            justifyContent: 'center',
            width: maxWidth,
            alignItems: 'center',
            position: 'absolute'

        }}>
            <Logo width={300} style={{ marginTop: 100 }} />
        </View>
        <Stack.Navigator screenOptions={{
            headerShown: false,
            contentStyle: {
                backgroundColor: ''
            },
            animationEnabled: true,
            animation: 'slide_from_right'
        }
        }>
            {!loaded ? <Stack.Screen
                name="loading"
            >{(props) => <LoadingPage {...props} loaded={loaded} />}</Stack.Screen>
                : <>
                    <Stack.Screen
                        name="login"
                        component={LoginPage}
                    />
                    <Stack.Screen
                        name="register"
                        component={RegisterPage}
                    />
                </>}

        </Stack.Navigator>
    </>
}

export default withTheme(Pre);