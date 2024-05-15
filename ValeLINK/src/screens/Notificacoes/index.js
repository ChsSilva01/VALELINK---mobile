import { Text, View, Image } from 'react-native';

import { styles } from './styles'

export default function Notificacoes(){
    return(
        <View style={styles.NotificationArea}>
            <Image></Image>
            <View >
                <Text>Fatec</Text>
                <Text style={styles.situation}>Vaga Perdente</Text>
            </View>
        </View>
    )
}