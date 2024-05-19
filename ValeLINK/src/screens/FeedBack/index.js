import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native';
import { styles } from './styles';

import imagefeed from '../../../assets/feedback_image.png'
import fonts from '../../styles/fonts';

import onestar from '../../../assets/umaestrela.png';
import twostar from '../../../assets/duasestrela.png';
import treestar from '../../../assets/tresestrela.png';
import fourstar from '../../../assets/quatroestrela.png';
import fivestar from '../../../assets/cincoestrela.png';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.headerfeed}></View>
      <Image source={imagefeed} style={styles.imagefeeddimensions}></Image>
      <View style={styles.areaforevaluation}>       
        <View>
          <Text style={{fontSize: 16, fontFamily: fonts.title}}>Por favor avalie sua experiência</Text>
          <View style={{width: 311, height: 65, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
            <TouchableOpacity style={styles.feedback}><Image source={fivestar}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.feedback}><Image source={fourstar}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.feedback}><Image source={treestar}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.feedback}><Image source={twostar}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.feedback}><Image source={onestar}></Image></TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={{fontFamily: fonts.title, fontSize: 16}}>Adicione um comentário:</Text>
          <TextInput style={{width: 311, height: 137, backgroundColor: '#E9E9E9'}}>

          </TextInput>
        </View>
        <TouchableOpacity style={styles.send}><Text style={{color: '#fff', fontSize: 14, fontFamily: fonts.title}}>Enviar</Text></TouchableOpacity>
      </View>
    </View>
  );
}


