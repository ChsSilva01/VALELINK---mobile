import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import logo from '../../../assets/logo.png'
import ImagemInicial from '../../../assets/imagem_inicial.png'

export default function Inicial({ navigation }){
    return(
        <View style={styles.container}>
            <View style={styles.margin}>
                <View style={{flexDirection: 'row', alignItems: 'center', top: 10}}>
                    <Image source={logo} style={{width: 55, height: 38}} resizeMode='stretch'></Image>
                    <Text style={styles.texttitle}>VALELINK</Text>
                </View>
                <Image source={ImagemInicial} style={styles.ImagemInicial}></Image>
                <View style={styles.viewtextinfo}>
                    <Text style={styles.textinfo}>Seu emprego ideal está esperando por você!</Text>
                    <Text style={styles.textinfosecond}>Você deve realizar o cadastro utilizando seu computador</Text>
                    <TouchableOpacity onPress = {() => navigation.navigate("Login")} style={styles.button}><Text style={styles.textbutton}>Login</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}