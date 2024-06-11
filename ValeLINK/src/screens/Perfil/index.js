import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import {Ionicons} from '@expo/vector-icons';
import  Bonitao  from '../../../assets/bonitão.jpg';

export default function Perfil({ navigation }){
    return(
        <LinearGradient
            colors={['#01E581', '#00C16C', '#00755C']}
            start={{ x: -2, y: 2 }}
            end={{ x: 2, y: 2 }}
            style={styles.container}
        >
            <View style={styles.back}>
                <TouchableOpacity onPress = {() => navigation.navigate("Home")}><Ionicons name='arrow-back' size={25} style={styles.actionsprofile}></Ionicons></TouchableOpacity>
                <TouchableOpacity><Ionicons name='camera-reverse' size={25} style={styles.actionsprofile}></Ionicons></TouchableOpacity>
            </View>
            <View style={styles.areaprofile}>
                <View style={styles.circleimage}>
                    <Image source={Bonitao} style={styles.profileimage}></Image>
                </View>
                <View style={styles.Settingsprofile}>
                    <View style={styles.Settingsname}>
                        <Text style={styles.nameprofile}>Arthur Albino</Text>
                        <Text style={styles.descriptionsprofile}>Text Product</Text>
                    </View>
                    <View style={styles.Settingsfromperson}>  
                            <View style={styles.personalinformation}>
                                <View style={styles.organize}>
                                    <Ionicons name='clipboard-outline' color='#01E581' size={25}></Ionicons>
                                    <Text style={styles.textpersonalinformation}>Informações Pessoais</Text>
                                </View>
                                <TouchableOpacity onPress = {() => navigation.navigate("InformacoesPessoais")}>
                                    <Ionicons name='chevron-forward' color='#01E581' size={25}></Ionicons>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.personalinformation}>
                                <View style={styles.organize}>
                                    <Ionicons name='locate-outline' color='#01E581' size={25}></Ionicons>
                                    <Text style={styles.textpersonalinformation}>Endereço</Text>
                                </View>
                                <TouchableOpacity onPress = {() => navigation.navigate("Seguranca")}>
                                    <Ionicons name='chevron-forward' color='#01E581' size={25}></Ionicons>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.personalinformation}>
                                <View style={styles.organize}>
                                    <Ionicons name='ellipsis-horizontal-outline' color='#01E581' size={25}></Ionicons>
                                    <Text style={styles.textpersonalinformation}>Outros</Text>  
                                </View>
                                <TouchableOpacity onPress = {() => navigation.navigate("Filtragem")}>
                                    <Ionicons name='chevron-forward' color='#01E581' size={25}></Ionicons>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.personalinformation}>
                                <View style={styles.organize}>
                                    <Ionicons name='lock-closed-outline' color='#01E581' size={25}></Ionicons>
                                    <Text style={styles.textpersonalinformation}>Segurança</Text>
                                </View>
                                <TouchableOpacity onPress = {() => navigation.navigate("Seguranca")}>
                                    <Ionicons name='chevron-forward' color='#01E581' size={25}></Ionicons>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.personalinformation}>
                                <View style={styles.organize}>
                                    <Ionicons name='filter-outline' color='#01E581' size={25}></Ionicons>
                                    <Text style={styles.textpersonalinformation}>Filtragem</Text>  
                                </View>
                                <TouchableOpacity onPress = {() => navigation.navigate("Filtragem")}>
                                    <Ionicons name='chevron-forward' color='#01E581' size={25}></Ionicons>
                                </TouchableOpacity>
                            </View>
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}