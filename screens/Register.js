import React, { useState } from "react";
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    Button
} from 'react-native';
import { auth } from '../firebase/firebase';
import { LinearGradient } from 'expo-linear-gradient';

const RegisterScreen = ({ navigation }) => {
    const [ fields, setFields ] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleTextChange = (field, value) => {
        setFields(fields => ({
            ...fields,
            [field]: value
        }))
    }

    const validateForm = () => {
        const { 
            username, 
            email, 
            password, 
            confirmPassword 
        } = fields;

        return (
            username.length > 0 &&
            email.length > 0 &&
            password.length > 0 &&
            password.length === confirmPassword.length &&
            password === confirmPassword
        );
    }

    const registerUser = async () => {
        if (!validateForm()) return;

        console.log("registering user");

        const { username, email, password } = fields;

        try {
            const user = (await auth.createUserWithEmailAndPassword(email, password)).user;
            await user.updateProfile({
                displayName: username
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <View style={styles.container}>  
            <LinearGradient
                colors={['#f6f6f6', '#eadaf4', '#efb9e4', '#f994c3', '#ff6c93', '#f45888', '#e8427d', '#dc2672', '#b0378b', '#7a4493', '#434889', '#0f4471']}
                style={styles.linearGradient}
            >
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Name"
                    value={fields.username}
                    autoCapitalize="none"
                    onChangeText={
                        (val) => handleTextChange("username", val)
                    }
                />      
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
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Confirm Password"
                    value={fields.confirmPassword}
                    autoCapitalize="none"
                    onChangeText={
                        (val) => handleTextChange("confirmPassword", val)
                    }
                    maxLength={15}
                    secureTextEntry={true}
                />
                <Button
                    color="#0F4471"
                    title="Register"
                    onPress={() => registerUser()}
                />
                <Text 
                    style={styles.loginText}
                    onPress={() => navigation.navigate('Login')}
                >
                    Already registered? Click here to login
                </Text>                
            </LinearGradient>
                      
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
    loginText: {
        color: '#FC3C3C',
        marginTop: 25,
        textAlign: 'center'
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: "100%",
        width: "100%",
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

export default RegisterScreen;