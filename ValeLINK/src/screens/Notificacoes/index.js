import { Text, View, Image, TouchableOpacity } from 'react-native';
import foto from '../../../assets/foto_coringa.png'
import { styles } from './styles'

export default function Notificacoes(){
    return(
        <View style={styles.container}>
            <View style={styles.areafromactions}>
                <TouchableOpacity style={styles.actions}><Text style={styles.markasread}>Marcar como lido</Text></TouchableOpacity>
                <TouchableOpacity style={styles.actions}><Text style={styles.cleanall}>Limpar tudo</Text></TouchableOpacity>
            </View>
            <View style={styles.NotificationArea}>
                <View style={styles.circle}></View>
                <Image source={foto} style={styles.companyimage}></Image>
                <View style={styles.informationofcompany}>
                    <View style={styles.companyandtime}>
                        <Text style={styles.company}>Fatec</Text>
                        <View style={styles.smallcircle}></View>
                        <Text style={styles.timestyle}>2hrs atrás</Text>
                    </View>
                    <View>
                        <Text style={styles.situation}>Vaga Perdente</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}