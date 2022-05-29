import { Button, Card, Paragraph, Text, TextInput, withTheme, Checkbox } from "react-native-paper";
import { useEffect, useState } from 'react';
import { View } from "react-native";
import { maxHeight, maxHeightVal, maxWidth, maxWidthVal } from "../../other/Helpers";
import { Logo } from "../../other/SVG.jsx";
import { useStoreActions } from "../../hooks/EasyHooks";
import User from "../../models/User";
import { Theme } from "react-native-paper/lib/typescript/types";

type LoginFormState = {
    checkbox: boolean | undefined,
    email: string | undefined,
    password: string | undefined
}

const LoginPage = ({ navigation, theme }: { navigation: any, theme: Theme }) => {
    const login = useStoreActions(s => s.userState.login)

    const [formState, setFormState] = useState({
        checkbox: true,
        email: "",
        password: ""
    } as LoginFormState);
    const [errors, setErrors] = useState({} as LoginFormState);
    const [sending, setSending] = useState(false);
    const register = useStoreActions(a => a.userState.register)


    const updateForm = <T,>(prop: string, value: T) => {
        setFormState({ ...formState, [prop]: value });
    }



    useEffect(() => navigation.addListener('beforeRemove', (e: any) => {
        e.preventDefault()
    }), [navigation])

    return <>
        <View style={{
            alignItems: 'center',
            width: maxWidthVal - 40,
            margin: 20
        }}>
            <Card style={{
                width: '100%',
            }}>
                <Card.Title title="Inloggen" />
                <Card.Content>
                    <TextInput
                        style={{ marginBottom: 4 }}
                        label="Gebruikersnaam"
                        disabled={sending}
                        value={formState.email}
                        mode="outlined"
                        onChangeText={text => updateForm("email", text)}></TextInput>
                    <TextInput
                        style={{ marginBottom: 4 }}
                        label="Gebruikersnaam"
                        disabled={sending}
                        value={formState.password}
                        mode="outlined"
                        onChangeText={text => updateForm("password", text)}></TextInput>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <Checkbox
                            disabled={sending}
                            color={theme.colors.primary}
                            status={formState.checkbox ? 'checked' : 'unchecked'}
                            onPress={() => updateForm("checkbox", !formState.checkbox)}
                        /><Text>Ingelogd Blijven</Text>
                    </View>
                    <View>
                        <Button style={{ marginLeft: 'auto' }} uppercase={false} mode="contained" onPress={() => {
                            login({
                                email: formState.email as string,
                                password: formState.password as string
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

export default withTheme(LoginPage)