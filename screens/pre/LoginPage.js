import { Button, Card, Paragraph, Text, TextInput, Title, withTheme } from "react-native-paper";
import { useEffect } from 'react';
import { View } from "react-native";
import { maxHeight, maxHeightVal, maxWidth, maxWidthVal } from "../../other/Helpers";
import { Logo } from "../../other/SVG";
import { useStateActions } from "../../hooks/EasyHooks";
import User from "../../models/User";



const LoginPage = ({ navigation }) => {
    const setUser = useStateActions(a => a.userState.setUser)

    useEffect(() => navigation.addListener('beforeRemove', (e) => {
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
                            setUser(new User(1))
                            // login({ email: 'yeet', password: 'yeet' })
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

export default withTheme(LoginPage);