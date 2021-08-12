import React from 'react';
import { View, Text, Button, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const win = Dimensions.get('window');

const Skip = ({...props}) => (
    <Button
        title='Skip'
        color="#000000"
        />
);

const Next = ({...props}) => (
    <Button
        title='Next'
        color="#000000"
        {...props}
        />
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:8}}
        {...props}
    ><Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        style={styles.container}
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image 
                    style={styles.images}
                    source={require('../assets/catbug2.png')} />,
            title: 'Welcome to Catpital One',
            subtitle: 'Get out of the rat race and into the cat race',
          },
          {
            backgroundColor: '#fff',
            image: <Image 
                    style={styles.images}
                    source={require('../assets/catbug4.png')} />,
            title: 'Real-Time Learning',
            subtitle: 'Invest your paycheck in real-time and receive bonuses for learning',
          },
          {
            backgroundColor: '#fff',
            image: <Image 
                    style={styles.images}
                    source={require('../assets/catbug3.png')} />,
            title: 'Build Your Purrfect Future',
            subtitle: 'something something get started',
          },
        ]}
      />

    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // height: '100%',
    },
    images: {
        resizeMode:'contain',
        // //flex: 1,
        width: 0.5*win.width,
        height: 0.25*win.height
    },
});