import { Text, View, Image } from 'react-native';
import bonitao from '../../../assets/bonitão.jpg'
import { styles } from './styles'

export default function Notificacoes(){
    return(
        <View style={styles.NotificationArea}>
            <Image source={bonitao} style={styles.companyimage}></Image>
            <View style={styles.informationofcompany}>
                <Text style={styles.company}>Fatec</Text>
                <Text style={styles.situation}>Vaga Perdente</Text>
            </View>
        </View>
    )
}