import { Button, Card, Paragraph, Text, TextInput, Title, withTheme } from "react-native-paper";
import { useEffect } from 'react';
import { View } from "react-native";
import { maxHeight, maxHeightVal, maxWidth, maxWidthVal } from "../../other/Helpers";
import { Logo } from "../../other/SVG.jsx";
import { useStoreActions } from "../../hooks/EasyHooks";
import User from "../../models/User";



const LoginPage = ({ navigation }: { navigation: any }) => {
    const login = useStoreActions(s => s.userState.login)


    useEffect(() => navigation.addListener('beforeRemove', (e: any) => {
        e.preventDefault()
    }), [navigation])

    return <>
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: maxWidthVal - 40,
            height: maxHeight,
            margin: 20
        }}>

            <Card style={{
                width: '100%',
            }}>
                <Card.Title title="Card Title" subtitle="Card Subtitle" />
                <Card.Content>
                    <Paragraph>Card content</Paragraph>

                    <View>
                        <Button style={{ marginLeft: 'auto' }} uppercase={false} mode="contained" onPress={() => {
                            // navigation.navigate("register")
                            // setUser()
                            // login({ email: 'yeet', password: 'yeet' })
                            login({
                                email: "yeet2",
                                password: "test"
                            })
                        }}>Inloggen</Button>
                    </View>
                </Card.Content>
                <Card.Actions>
                    <Button uppercase={false} onPress={() => {
                        navigation.navigate("register")
                    }}>Nog geen account? Klik hier!</Button>
                </Card.Actions>
            </Card>
        </View>
    </>

}

export default LoginPage