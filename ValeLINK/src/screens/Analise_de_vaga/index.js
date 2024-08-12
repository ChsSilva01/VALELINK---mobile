import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import logo from '../../../assets/logo.png'
import logocompany from '../../../assets/logo_company.png';
import contract_time_icon from '../../../assets/contract_time_icon.png';
import time_of_work from '../../../assets/time_of_work.png';
import wage from '../../../assets/wage.png';
import fonts from '../../styles/fonts';

export default function AnaliseDeVagas(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} style={styles.logoimage}></Image>
                <Text style={{fontSize: 24, right: 15, bottom: 0,fontFamily: fonts.title}}>Vagas</Text>
                <View></View>     
            </View>
            <View style={styles.vacancy}>
                <Image source={logocompany} style={styles.logocompany}></Image>
                <View style={{top: 27, left: 23}}>
                    <Text>Desenvolvimento de Jogos</Text>
                    <Text>Sherpel</Text>
                </View>
                <View style={{flexDirection: 'row', top: 27, width: 353, height: 43, justifyContent: 'space-around', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{width: 34, height: 34,backgroundColor: '#004443', alignItems: 'center', justifyContent: 'center', borderRadius: 6}}>
                            <Image source={contract_time_icon}></Image>
                        </View>
                        <Text style={{fontSize: 16, left: 5}}>2 Anos</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{width: 34, height: 34,backgroundColor: '#004443', alignItems: 'center', justifyContent: 'center', borderRadius: 6}}>
                            <Image source={time_of_work}></Image>
                        </View>
                        <Text style={{fontSize: 16, left: 5}}>8hrs</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{width: 34, height: 34,backgroundColor: '#004443', alignItems: 'center', justifyContent: 'center', borderRadius: 6}}>
                            <Image source={wage}></Image>
                        </View>
                        <Text style={{fontSize: 16, left: 5}}>R$1300</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.button}><Text style={styles.textbutton}>Enviar curriculo</Text></TouchableOpacity>
                <Text style={styles.descriptiontext}>Descrição da empresa</Text>
            </View>
        </View>
    )
}