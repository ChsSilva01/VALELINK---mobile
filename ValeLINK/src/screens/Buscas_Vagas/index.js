import { View, TouchableOpacity, Text, Image, TextInput } from 'react-native';
import { styles } from './styles';
import logo from '../../../assets/logo.png';
import imagevacancies from '../../../assets/image_vacancies.png';
import fonts from '../../styles/fonts';

export default function BuscasVagas(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} style={styles.logoimage}></Image>
                <Text style={{fontSize: 24, right: 15, bottom: 0,fontFamily: fonts.title}}>Vagas</Text>
                <View></View>     
            </View>
            <View style={styles.searchvacancies}>
                <Text style={styles.title}>Encontre a vaga perfeita</Text>
                <Image style={styles.image} source={imagevacancies}></Image>
                <Text style={styles.textinfo}>Adicione uma palavra referente a area de sua busca</Text>
                <TextInput 
                    style={styles.course}
                    placeholder='  Vaga'
                ></TextInput>
                <TextInput 
                    style={styles.course}
                    placeholder='  Cidade'
                ></TextInput> 
            </View>
            <TouchableOpacity style={styles.button}><Text style={styles.textbutton}>Buscar</Text></TouchableOpacity>          
        </View>
    )
}