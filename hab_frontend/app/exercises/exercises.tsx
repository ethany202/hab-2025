import {View, Text} from 'react-native';

enum UserType {
    Patient,
    Caregiver
}

interface ExercisesProps{
    userType: UserType
}

export default function Exercises({userType} : ExercisesProps){
    
    if(userType == UserType.Patient){
        return (
            <View>
                
            </View>
        )
    }

    return (
        <View>
            
        </View>
    )
}