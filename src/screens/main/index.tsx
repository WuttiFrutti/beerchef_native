import React from "react";
import MyLists from "./MyLists";
import Home from "./Home";
import Friends from "./Friends";
import { withTheme } from "react-native-paper";
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { Platform } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { getCurrentWidth, maxHeight } from "../../other/Helpers";
import TopBar from "../../components/TopBar";



const Tabs = createMaterialTopTabNavigator();

const itemStyleWidth = 100;

const iconStyle = { width: 100 };

const Main = ({ theme }: { theme:any }) => {
  return (<>
    <TopBar />

    <Tabs.Navigator tabBarPosition="bottom" screenOptions={{
      tabBarActiveTintColor: theme.colors.primary,
      tabBarLabelStyle: { fontSize: 12 },
      tabBarItemStyle: { width: itemStyleWidth },
      tabBarContentContainerStyle: {
        justifyContent: 'center'
      },
      tabBarStyle: Platform.OS === 'web' ? {
        width: '100%',
        bottom: '0',
        position: 'fixed',
      } : {},
      tabBarBounces: true,
      tabBarIndicatorStyle: {
        left: (getCurrentWidth() / 2) - (itemStyleWidth + (itemStyleWidth / 2))
      }
    }} sceneContainerStyle={{
      maxHeight: maxHeight,
      backgroundColor: '',
    }}>
      <Tabs.Screen component={Friends} name="Vrienden" options={{
        tabBarIcon: ({ focused, color, size }) => (
          <FontAwesome
            name="user-friends"
            size={size || 24}
            color={focused ? color : theme.colors.primary}
            focused={focused}
            style={iconStyle}
          />
        )
      }} />
      <Tabs.Screen component={Home} name="Home" options={{
        tabBarIcon: ({ focused, color, size }) => (
          <FontAwesome
            name="home"
            size={size || 24}
            color={focused ? color : theme.colors.primary}
            focused={focused}
            style={iconStyle}
          />
        )
      }} />
      <Tabs.Screen component={MyLists} name="Mijn Lijsten" options={{
        tabBarIcon: ({ focused, color, size }) => (
          <FontAwesome
            name="list-ul"
            size={size || 24}
            color={focused ? color : theme.colors.primary}
            focused={focused}
            style={iconStyle}
          />
        )
      }} />
    </Tabs.Navigator>
  </>
  )
};



export default withTheme(Main);