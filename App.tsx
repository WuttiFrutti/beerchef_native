import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import theme from "./src/other/Theme";
import Screen from "./src/screens";
import { LightWave } from './src/other/SVG.jsx';
import { Platform, Dimensions, View, LogBox } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import TopBar from "./src/components/TopBar";
import store from "./src/state";
import { StoreProvider } from "easy-peasy";
import { maxHeightVal } from './src/other/Helpers';
import { StatusBar } from 'expo-status-bar';


if (Platform.OS === "web") {
  const body = document.querySelector("body");
  if (body !== null) body.style.overflow = "hidden"
}

const waveStyle = {
  position: Platform.OS === 'web' ? 'fixed' : 'absolute',
  height: Platform.OS === 'web' ? "100vh" : Dimensions.get('window').height,
  width: Platform.OS === 'web' ? "100vw" : Dimensions.get('window').width,
  top: getStatusBarHeight() * 3,
  left: 0,
  right: 0,
}

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const StoreProviderOverride = StoreProvider as any;

LogBox.ignoreLogs([
  "Overwriting fontFamily style attribute preprocessor"
]);

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <StoreProviderOverride store={store}>
        <PaperProvider theme={theme}>
          <View>
            {Platform.OS !== "web" ? <StatusBar style="dark" /> : <></>}
            <LightWave style={waveStyle}
              subStyle={{
                bottom: 0,
                minWidth: 2040,
                position: 'absolute',
              }} />

          </View>
          <Screen />
        </PaperProvider>
      </StoreProviderOverride>
    </NavigationContainer>
  );
}


