import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/Colors'
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <Image
                source={require('../assets/success.png')}
                //source={{ uri: 'https://westonconferences.com/cmoon_images/20191212205249801_award.jpg' }}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>Your phone needed 
                     <Text style={styles.highlight}> {props.roundsNumber}</Text> rounds to guess the number 
                    <Text style={styles.highlight}> {props.userNumber}</Text>
                </BodyText>
            </View>

            <MainButton onPress={props.onRestart} >NEW GAME</MainButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        width: '80%',
        height: 300,
        marginVertical: 20
    },

    resultText:{
        textAlign: 'center',
        fontSize: 20,
    },

    resultContainer:{
        marginHorizontal: 25,
        marginVertical: 15
    },

    highlight: {
        color: Colors.primary,
        fontFamily: 'ebrima-bold'
    }
})

export default GameOverScreen;