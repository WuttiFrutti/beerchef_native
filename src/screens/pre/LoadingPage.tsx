import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { withTheme } from "react-native-paper"
import { Logo } from "../../other/SVG.jsx";
import { maxHeight, maxWidth } from '../../other/Helpers';
import { useEffect } from 'react';

const LoadingPage = ({ theme, navigation, loaded }: { theme: any, navigation: any, loaded: boolean }) => {



    return <>
        <View style={{
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            width: maxWidth,
            height: maxHeight,
            overflow: 'visible'
        }}>
            <ActivityIndicator animating={true} color={theme.colors.primary} size='large' />
        </View>

        {/* <View style={{
            justifyContent: 'center',
            width: maxWidth,
            alignItems: 'center',

        }}>
            <Logo width={300} style={{ marginTop: 100 }} />
        </View> */}
    </>
}

export default withTheme(LoadingPage);