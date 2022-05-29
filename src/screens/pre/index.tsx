import { View, ScrollView } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { withTheme } from "react-native-paper"
import { maxWidth, maxWidthVal } from "../../other/Helpers";
import { Logo } from "../../other/SVG.jsx";
import { maxHeight, maxHeightVal } from '../../other/Helpers';
import Animated, { Transition, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import LoadingPage from './LoadingPage';
import LoginPage from './LoginPage';
import RegisterPage from "./RegisterPage";

const Stack = createStackNavigator();

const Pre = ({ loaded, theme }: { loaded: boolean, theme: any }) => {

    return <>
        <ScrollView contentContainerStyle={{
            height: maxHeight
        }}>
            <View style={{
                justifyContent: 'center',
                width: maxWidth,
                alignItems: 'center',
            }}>
                <Logo width={300} style={{ marginTop: 50 }} />
            </View>

            <Stack.Navigator screenOptions={{
                headerShown: false,
                presentation: 'card'
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
        </ScrollView>


    </>
}

export default withTheme(Pre);