import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native';
import { styles } from './styles';

import imagefeed from '../../../assets/feedback_image.png'
import fonts from '../../styles/fonts';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.headerfeed}></View>
      <Image source={imagefeed} style={styles.imagefeeddimensions}></Image>
      <View style={styles.areaforevaluation}>       
        <View>
          <Text style={{fontSize: 16, fontFamily: fonts.title}}>Por favor avalie sua experiência</Text>
          <View style={{width: 311, height: 65, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
            <TouchableOpacity style={{width: 50, height: 50, backgroundColor: '#d9d9d9', borderRadius: 50}}></TouchableOpacity>
            <TouchableOpacity style={{width: 50, height: 50, backgroundColor: '#d9d9d9', borderRadius: 50}}></TouchableOpacity>
            <TouchableOpacity style={{width: 50, height: 50, backgroundColor: '#d9d9d9', borderRadius: 50}}></TouchableOpacity>
            <TouchableOpacity style={{width: 50, height: 50, backgroundColor: '#d9d9d9', borderRadius: 50}}></TouchableOpacity>
            <TouchableOpacity style={{width: 50, height: 50, backgroundColor: '#d9d9d9', borderRadius: 50}}></TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={{fontFamily: fonts.title, fontSize: 16}}>Adicione um comentário:</Text>
          <TextInput style={{width: 311, height: 137, backgroundColor: '#E9E9E9'}}>

          </TextInput>
        </View>
        <TouchableOpacity style={{width: 311, height: 33, backgroundColor: '#00C16C', alignItems: 'center', justifyContent: 'center', borderRadius: 5}}><Text style={{color: '#fff', fontSize: 14, fontFamily: fonts.title}}>Enviar</Text></TouchableOpacity>
      </View>
    </View>
  );
}


