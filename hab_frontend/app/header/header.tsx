import { MaterialIcons } from '@expo/vector-icons';
import {View, Text, TouchableOpacity} from 'react-native';
import { StyleSheet } from 'react-native';
import { router } from 'expo-router';

interface HeaderProps{
    pageTitle: string,
    previousPath?: string
}

export default function Header({pageTitle, previousPath}: HeaderProps){
    return (
        <View style={styles.header}>
            <View>
                {
                    previousPath === undefined
                    ? <TouchableOpacity
                        onPress={() => router.replace({pathname: '/home/home'})}>
                        <MaterialIcons style={styles.homeIcon} color={'darkblue'} size={40} name={'home'}/>

                    </TouchableOpacity>
                    : <TouchableOpacity
                    onPress={() => router.replace({pathname: previousPath})}>
                        <MaterialIcons style={styles.homeIcon} color={'darkblue'} size={40} name={'arrow-back'}/>

                </TouchableOpacity>
                }
                
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