import { Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './styles';
import {Ionicons} from '@expo/vector-icons';
import icone from '../../../assets/foto_de_perfil_coca_cola.png';

export default function Perfildaempresa({ navigation }){
    return(
        <ImageBackground
            style={styles.container}
            source={require('../../../assets/papel_de_parede_coca_cola.png')}
        >
            <View style={styles.back}>
                <TouchableOpacity onPress = {() => navigation.navigate("Home")}><Ionicons name='arrow-back' size={25} style={styles.actionsprofile}></Ionicons></TouchableOpacity>
            </View>
            <View style={styles.areaprofile}>
                <View style={styles.employeefollowersandprofile}>
                    <View style={styles.infostatus}>
                        <Text style={{color: '#004443', fontSize: 15.14}}>1k</Text>
                        <Text style={{color: '#00755C', fontSize: 13.12}}>Seguidores</Text>
                    </View>
                    <View style={styles.circleimage}>
                        <Image source={icone} style={styles.profileimage}></Image>
                    </View>
                    <View style={styles.infostatus}>
                        <Text style={{color: '#004443', fontSize: 15.14}}>342</Text>
                        <Text style={{color: '#00755C', fontSize: 13.12}}>Funcionários</Text>
                    </View>
                </View>
                <View style={styles.Settingsprofile}>
                    <View style={styles.Settingsname}>
                        <Text style={styles.nameprofile}>@Coca-Cola</Text>
                        <Text style={styles.descriptionsprofile}>Opa, abriu a geladeira e tá sem Coca? Não se preocupe! Peça seu produto Coca‑Cola no Na Sua Casa e receba suas bebidas favoritas</Text>
                        <TouchableOpacity style={styles.follow}><Text>Seguir</Text></TouchableOpacity>
                    </View>     
                                  
                </View>
            </View>
        </ImageBackground>
    )
}