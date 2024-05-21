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
                        <Text style={styles.amount}>1k</Text>
                        <Text style={styles.quantityofwhat}>Seguidores</Text>
                    </View>
                    <View style={styles.circleimage}>
                        <Image source={icone} style={styles.profileimage}></Image>
                    </View>
                    <View style={styles.infostatus}>
                        <Text style={styles.amount}>342</Text>
                        <Text style={styles.quantityofwhat}>Funcionários</Text>
                    </View>
                </View>
                <View style={styles.Settingsprofile}>
                    <View style={styles.Settingsname}>
                        <Text style={styles.nameprofile}>@Coca-Cola</Text>
                        <Text style={styles.descriptionsprofile}>Opa, abriu a geladeira e tá sem Coca? Não se preocupe! Peça seu produto Coca‑Cola no Na Sua Casa e receba suas bebidas favoritas</Text>
                        <TouchableOpacity style={styles.follow}><Text style={styles.followtext}>Seguir</Text></TouchableOpacity>
                    </View>  
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomWidth: 1, borderColor: '#B5B5B5'}}>  
                        <Text>Publicações</Text>             
                        <Text>Fotos</Text>             
                        <Text>Vídeos</Text>   
                    </View>          
                </View>
            </View>
        </ImageBackground>
    )
}