import { Button, Card, Paragraph, Text, TextInput, Title, withTheme } from "react-native-paper";
import { useEffect } from 'react';
import { View } from "react-native";
import { maxHeight, maxHeightVal, maxWidth, maxWidthVal } from "../../other/Helpers";
import { Logo } from "../../other/SVG.jsx";



const RegisterPage = ({ navigation }: { navigation: any }) => {

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
                </Card.Content>
                <Card.Actions>
                    <Button uppercase={false} onPress={() => {
                        navigation.navigate("login")
                    }}>Heb je al een account? Klik hier!</Button>
                </Card.Actions>
            </Card>
        </View>
    </>

}

export default RegisterPage