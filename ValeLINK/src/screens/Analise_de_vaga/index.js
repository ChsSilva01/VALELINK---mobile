import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import logo from '../../../assets/logo.png'
import logocompany from '../../../assets/logo_company.png';

export default function AnaliseDeVagas(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} style={styles.logoimage}></Image>
                <Text style={{fontSize: 24}}>VAGAS</Text>     
            </View>
            <ScrollView style={styles.vacancy}>
                <Image source={logocompany} style={styles.logocompany}></Image>
                <View style={{top: 27, left: 23, height: 'auto'}}>
                    <Text>Desenvolvimento de Jogos</Text>
                    <Text>Sherpel</Text>
                </View>
            </ScrollView>
        </View>
    )
}