import {Text, View} from 'react-native'


const assignedExercises = [
    {
        "exerciseName": "Seated ...",
        "exerciseDesc": "DESC"
    },
    {
        "exerciseName": "asldkjasd...",
        "exerciseDesc": "DESC2"
    }
]

export default function YourExercises(){
    return (
        <View>
            {/** Insert Header */}

            {assignedExercises.map(exercise => {
                return (
                    <View></View>
                )
            })}
        </View>
    )
}