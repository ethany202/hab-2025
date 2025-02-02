import {Text, View, ScrollView} from 'react-native'
import SpecificExercise from './specificExercise';
import Header from '../header/header';

const assignedExercises = [
    {
        "exerciseName": "Seated Leg Raises",
        "exerciseDesc": "DESC"
    },
    {
        "exerciseName": "Seated Sitting Down Seat",
        "exerciseDesc": "DESC2"
    }
]

export default function YourExercises(){
    return (
        <ScrollView bounces={false} style={{
            alignSelf: 'stretch',
        }}>
            {/** Insert Header */}
            <Header pageTitle='Your Exercises'/>

            {assignedExercises.map((exercise, index) => {
                return (
                    <SpecificExercise
                        key={exercise.exerciseName}
                        exerciseNum={index+1}
                        exerciseName={exercise.exerciseName}
                        exerciseDesc={exercise.exerciseDesc}
                    />
                )
            })}
        </ScrollView>
    )
}