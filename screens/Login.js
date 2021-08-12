import React, { useState } from "react";
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    Button
} from 'react-native';
import { auth } from '../firebase/firebase';

const LoginScreen = ({ navigation }) => {
    const [ fields, setFields ] = useState({
        email: "",
        password: ""
    });

    const handleTextChange = (field, value) => {
        setFields(fields => ({
            ...fields,
            [field]: value
        }))
    };

    const validateForm = () => {
        return (
            fields.email && fields.password
        );
    }

    const signUserIn = async () => {
        if (!validateForm()) return;
        const { email, password } = fields;
        try {
            const user = (await auth.signInWithEmailAndPassword(email, password)).user;
            console.log({
                displayName: user.displayName,
                email: user.email
            })
        } catch (err) {
            console.error(err);
        }

    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputStyle}
                placeholder="Email"
                value={fields.email}
                autoCapitalize="none"
                onChangeText={
                    (val) => handleTextChange("email", val)
                }
            />
            <TextInput
                style={styles.inputStyle}
                placeholder="Password"
                value={fields.password}
                autoCapitalize="none"
                onChangeText={
                    (val) => handleTextChange("password", val)
                }
                maxLength={15}
                secureTextEntry={true}
            />
            <Button
                color="#0F4471"
                title="Login"
                onPress={() => signUserIn()}
            />
            <Text 
                style={styles.registerText}
                onPress={() => navigation.navigate('Register')}
            >
                Not registered? Click here to register
            </Text>                          
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 35,
        backgroundColor: '#fff'
    },
    inputStyle: {
        width: '100%',
        marginBottom: 15,
        paddingBottom: 15,
        alignSelf: "center",
        borderColor: "#ccc",
        borderBottomWidth: 1
    },
    registerText: {
        color: '#FC3C3C',
        marginTop: 25,
        textAlign: 'center'
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
});

export default LoginScreen;