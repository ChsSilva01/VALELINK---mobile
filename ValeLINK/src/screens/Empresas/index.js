import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native';
import { styles } from './styles';

import {Ionicons} from '@expo/vector-icons';

import coringa from '../../../assets/foto_coringa.png'

export default function Empresas({ navigation }){
    return(
    <View style={styles.container}>
        <View style={styles.NotificationArea}>
            <View style={styles.circle}></View>
            <Image source={coringa} style={styles.companyimage}></Image>
            <View style={styles.informationofcompany}>
                <View style={styles.companyandtime}>
                    <Text style={styles.company}>Sprite</Text>
                    <View style={styles.smallcircle}></View>
                    <Text style={styles.timestyle}>2hrs atrás</Text>
                </View>
                <View>
                    <Text style={styles.situation}>Somos uma empresa de refrigerante</Text>
                </View>
            </View>
        </View>
        <TouchableOpacity style={styles.vacancie} onPress={() => navigation.navigate('Vagas')}><Ionicons name='briefcase-outline' size={38} color={'#01E581'}></Ionicons></TouchableOpacity>
    </View>
    )
}