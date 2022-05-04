import { Appbar, withTheme } from 'react-native-paper';
import { LogoSmall } from '../other/SVG';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';


const TopBar = ({ theme }) => {

    return <>
        <Appbar.Header style={{
            backgroundColor: theme.colors.surface,
            // overflow: 'visible'
        }} theme={theme}>
            <LogoSmall
                style={{
                    position: 'absolute',
                    left: -10,
                    width: 200
                }}
            />

            <Appbar.Content />

            <Appbar.Action icon={
                ({ focused, color, size }) => (
                    <FontAwesome
                        name="user-circle"
                        size={size}
                        color={focused ? color : theme.colors.primary}
                        focused={focused}
                        solid
                        style={{
                            marginBottom: -5,
                        }}
                    />
                )
            } onPress={() => { }} />


        </Appbar.Header>

    </>
}


export default withTheme(TopBar);