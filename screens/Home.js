import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { auth } from '../firebase/firebase';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
    
    const signUserOut = async () => {
        try {
            await auth.signOut();
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <View style={ styles.container }>
            <Text>This is Home Screen</Text>
            <Button
                color="#0F4471"
                title="Logout"
                onPress={() => signUserOut()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;