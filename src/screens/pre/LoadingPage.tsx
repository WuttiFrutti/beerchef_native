import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { withTheme } from "react-native-paper"
import { Logo } from "../../other/SVG.jsx";
import { maxHeight, maxWidth } from '../../other/Helpers';
import { useEffect } from 'react';

const LoadingPage = ({ theme, navigation, loaded }: { theme: any, navigation: any, loaded: boolean }) => {
    return <>
        <View style={{
            alignItems: 'center',
            width: maxWidth,
            overflow: 'visible',
            marginTop: 30
        }}>
            <ActivityIndicator animating={true} color={theme.colors.primary} size='large' />
        </View>
    </>
}

export default withTheme(LoadingPage);