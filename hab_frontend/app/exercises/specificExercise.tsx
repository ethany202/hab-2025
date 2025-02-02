import {Text, View, Button, TouchableOpacity} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";

interface SpecificExerciseProps{
    exerciseNum: number,
    exerciseName: string,
    exerciseDesc: string
}

const videoWidth = Dimensions.get('window').width * 0.8;
const videoHeight = videoWidth * 0.6;

export default function SpecificExercise({exerciseNum, exerciseName, exerciseDesc} : SpecificExerciseProps){
    return (
        <View style={{
            margin: 20,
            padding: 30,
            alignItems: 'center'
        }}>
            <Text style={styles.exerciseName}>{exerciseNum}. {exerciseName}</Text>
            <YoutubePlayer 
                height={videoHeight}
                width={videoWidth}
                videoId='1u8T9MQqgKs'/>
            <Text style={styles.exerciseDesc}>Description: {exerciseDesc}</Text>

            <TouchableOpacity
                style={styles.startButton}
                onPress={() => console.log("HI")}>
                <Text style={styles.startText}>
                    Start
                </Text>
            </TouchableOpacity>
        </View>
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