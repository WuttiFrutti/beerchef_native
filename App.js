import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import theme from "./other/Theme";
import Screen from "./screens";
import { LightWave } from './other/SVG';
import { Platform, Dimensions, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import TopBar from "./components/TopBar";
import store from "./state";
import { StoreProvider } from "easy-peasy";
import { maxHeightVal } from './other/Helpers';

if (Platform.OS === "web") {
  document.querySelector("body").style.overflow = "hidden"
}

const waveStyle = {
  position: Platform.OS === 'web' ? 'fixed' : 'absolute',
  height: Platform.OS === 'web' ? "100vh" : Dimensions.get('window').height,
  width: Platform.OS === 'web' ? "100vw" : Dimensions.get('window').width,
  top: getStatusBarHeight() * 3,
  left: 0,
  right: 0,
}

export default function App() {
  return (
    <NavigationContainer>
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>

          <View>
            <LightWave style={waveStyle}
              subStyle={{
                bottom: 0,
                minWidth: 2040,
                position: 'absolute',
              }} />
          </View>

          <Screen />
        </PaperProvider>
      </StoreProvider>
    </NavigationContainer>
  );
}


