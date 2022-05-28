import { Appbar, withTheme } from 'react-native-paper';
import { LogoSmall } from '../other/SVG.jsx';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { useStoreActions } from '../hooks/EasyHooks';

const Content = Appbar.Content as any

const TopBar = ({ theme }: { theme: any }) => {
    const logout = useStoreActions(a => a.userState.logout)


    return <>
        <Appbar.Header style={{
            backgroundColor: theme.colors.surface,
        }} theme={theme}>
            <LogoSmall
                style={{
                    position: 'absolute',
                    left: -10,
                    width: 200
                }}
            />

            <Content />

            <Appbar.Action icon={
                ({ color, size }) => (
                    <FontAwesome
                        name="user-circle"
                        size={size}
                        color={theme.colors.primary}
                        solid
                        style={{
                            marginBottom: -5,
                        }}
                    />
                )
            } onPress={() => logout()} />


        </Appbar.Header>

    </>
}


export default withTheme(TopBar);