import { Button, Card, Paragraph, Text, TextInput, Title, withTheme } from "react-native-paper";
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { View } from "react-native";
import { maxHeight, maxHeightVal, maxWidth, maxWidthVal } from "../../other/Helpers";
import { Logo } from "../../other/SVG.jsx";
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { useStoreActions } from './../../hooks/EasyHooks';

type RegisterFormState = {
    checkbox: boolean | undefined,
    email: string | undefined,
    passwordrepeat: string | undefined,
    username: string | undefined,
    password: string | undefined
}

const RegisterPage = ({ navigation, theme }: { navigation: any, theme: any }) => {
    const [formState, setFormState] = useState({
        checkbox: true,
        email: "",
        passwordrepeat: "",
        username: "",
        password: ""
    } as RegisterFormState);
    const [errors, setErrors] = useState({} as RegisterFormState);
    const [sending, setSending] = useState(false);
    const register = useStoreActions(a => a.userState.register)


    const updateForm = <T,>(prop: string, value: T) => {
        setFormState({ ...formState, [prop]: value });
    }


    return <>
        <View style={{
            alignItems: 'center',
            width: maxWidthVal - 40,
            margin: 20
        }}>

            <Card style={{
                width: '100%',
            }}>
                <Card.Title title="Registreren" />
                <Card.Content>
                    <TextInput
                        style={{ marginBottom: 4 }}
                        label="Gebruikersnaam"
                        disabled={sending}
                        value={formState.username}
                        mode="outlined"
                        onChangeText={text => updateForm("username", text)}></TextInput>
                    <TextInput
                        style={{ marginBottom: 4 }}
                        label="Email"
                        disabled={sending}
                        value={formState.email}
                        mode="outlined"
                        onChangeText={text => updateForm("email", text)}></TextInput>
                    <TextInput label="Wachtwoord"
                        style={{ marginBottom: 4 }}
                        mode="outlined"
                        value={formState.password}
                        disabled={sending}
                        secureTextEntry={true}
                        onChangeText={text => updateForm("password", text)}></TextInput>
                    <TextInput label="Wachtwoord Bevestigen"
                        mode="outlined"
                        value={formState.passwordrepeat}
                        secureTextEntry={true}
                        disabled={sending}
                        onChangeText={text => updateForm("passwordrepeat", text)}></TextInput>
                    <View>
                        <Button style={{ marginLeft: 'auto', marginTop: 8 }} uppercase={false} mode="contained" onPress={async () => {
                            const { username, password, email } = formState;
                            if (username == undefined || password == undefined || email == undefined) return
                            setSending(true)
                            console.log(await register({
                                username,
                                password,
                                email
                            }))
                            setSending(false)
                        }}>Registreren</Button>
                    </View>
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

export default withTheme(RegisterPage)