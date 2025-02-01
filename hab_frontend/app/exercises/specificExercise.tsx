import {Text, View} from 'react-native'

interface SpecificExerciseProps{
    exerciseNum: number,
    exerciseName: string,
    exerciseDesc: string
}

export default function SpecificExercise({exerciseNum, exerciseName, exerciseDesc} : SpecificExerciseProps){
    return (
        <View>
            <Text>{exerciseNum}. {exerciseName}</Text>
            
        </View>
    )
}