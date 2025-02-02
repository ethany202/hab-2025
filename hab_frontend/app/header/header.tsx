import { MaterialIcons } from '@expo/vector-icons';
import {View, Text, TouchableOpacity} from 'react-native';
import { StyleSheet } from 'react-native';
import { router } from 'expo-router';

interface HeaderProps{
    pageTitle: string
}

export default function Header({pageTitle}: HeaderProps){
    return (
        <View style={styles.header}>
            <View>
                <TouchableOpacity
                    onPress={() => router.replace({pathname: '/home/home'})}>
                    <MaterialIcons style={styles.homeIcon} color={'darkblue'} size={40} name={'home'}/>

                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.pageTitle}>{pageTitle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignSelf: 'stretch',
        height: 120,
        backgroundColor: 'lightblue',
        alignItems:'center',
        display: 'flex',
        flexDirection: 'row'
    },
    pageTitle: {
        color: 'darkblue',
        fontSize: 25,
        fontWeight: 700,
        marginTop: 20,
        right: 0
    },
    homeIcon: {
        //position: 'absolute',
        marginTop: 20,
        marginRight: 20,
        //top: 20,
        //left: 20
    }
})