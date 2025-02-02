import {Text, View, ScrollView, Button, TouchableOpacity} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import YoutubePlayer from 'react-native-youtube-iframe';
import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";
import { router } from 'expo-router';
import Header from '../header/header';

interface CurrentExerciseProps{
    exerciseName: string,
    exerciseDesc: string
}

const videoWidth = Dimensions.get('window').width * 0.8;
const videoHeight = videoWidth * 0.6;

export default function CurrentExercise(){

    const {exerciseName, exerciseDesc} = useLocalSearchParams()

    return (
        <ScrollView style={{
            alignSelf: 'stretch'
        }}>
            <Header pageTitle={exerciseName.toString()} previousPath='/exercises/yourExercises'></Header>

            <View style={{
                margin: 20,
                padding: 30,
                alignItems: 'center'
            }}>
                <YoutubePlayer 
                    height={videoHeight}
                    width={videoWidth}
                    videoId='1u8T9MQqgKs'/>
                <Text style={styles.exerciseDesc}>Description: {exerciseDesc}</Text>

                <TouchableOpacity
                    style={styles.startButton}
                    onPress={() => console.log("HELLO")}>
                    <Text style={styles.startText}>
                        Next Exercise
                    </Text>
                </TouchableOpacity>
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    exerciseName: {
        fontSize: 30,
        marginTop: 10,
        marginBottom: 10
    },
    exerciseDesc: {
        fontSize: 20,
        marginVertical: 20
    },
    startButton: {
        backgroundColor: 'lightblue',
        borderRadius: 12
    },
    startText: {
        fontSize: 22,
        margin: 10,
        marginHorizontal: 50,
        color: 'darkblue',
        fontWeight: 700
    }
})