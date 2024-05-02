import { Text, View } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import {Ionicons} from '@expo/vector-icons';

export default function Perfil(){
    return(
        <LinearGradient
            colors={['#01E581', '#00C16C', '#00755C']}
            start={{ x: -2, y: 2 }}
            end={{ x: 2, y: 2 }}
            style={styles.container}
        >
            <View style={styles.back}><Ionicons name='arrow-back' size={25} style={styles.actionsprofile}></Ionicons><Ionicons name='camera-reverse' size={25} style={styles.actionsprofile}></Ionicons></View>
            <View style={styles.areaprofile}>

            </View>
        </LinearGradient>
    )
}