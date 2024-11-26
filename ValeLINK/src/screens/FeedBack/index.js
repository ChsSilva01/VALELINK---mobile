import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ImageBackground, Alert } from 'react-native';
import { styles } from './styles';
import { useState, useEffect } from 'react';

import imagefeed from '../../../assets/feedback_image.png'
import fonts from '../../styles/fonts';

import { showMessage, hideMessage } from "react-native-flash-message";

import {Ionicons} from '@expo/vector-icons';

import one from '../../../assets/umaestrelasemcor.png';    // Imagem de 1 estrela colorida
import two from '../../../assets/duasestrelasemcor.png';  // Imagem de 2 estrelas coloridas
import tree from '../../../assets/tresestrelasemcor.png'; // Imagem de 3 estrelas coloridas
import four from '../../../assets/quatroestrelasemcor.png'; // Imagem de 4 estrelas coloridas
import five from '../../../assets/cincoestrelasemcor.png';  // Imagem de 5 estrelas coloridas

import oneGray from '../../../assets/umaestrela.png';    // Imagem de 1 estrela cinza
import twoGray from '../../../assets/duasestrela.png';  // Imagem de 2 estrelas cinza
import treeGray from '../../../assets/tresestrela.png'; // Imagem de 3 estrelas cinza
import fourGray from '../../../assets/quatroestrela.png'; // Imagem de 4 estrelas cinza
import fiveGray from '../../../assets/cincoestrela.png';  // Imagem de 5 estrelas cinza

import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';

export default function Login({ navigation }) {
  const [teste, setTeste] = useState("");
  const [sucess, setSucess] = useState(true);
  const [experiencia_feedback, setExperiencia_feedback] = useState(0);  // Inicialmente, nenhuma estrela selecionada (0)
  const [comentario_feedback, setComentario_feedback] = useState("");

  // Função para salvar os dados na API
  async function saveData() {
    try {
      const cod_usuario = await AsyncStorage.getItem('@user');
      console.log('Usuário:', cod_usuario);
      console.log('experiencia_feedback:', experiencia_feedback);
      console.log('comentario_feedback:', comentario_feedback);
  
      const res = await api.post(`apiVALELINK/feedback/salvar.php`, {
        cod_usuario: cod_usuario,
        experiencia_feedback: experiencia_feedback,
        comentario_feedback: comentario_feedback
      });
  
      console.log('Resposta da API:', res.data);
    } catch (error) {
      console.error('Erro ao enviar currículo:', error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerfeed}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons name="arrow-back" size={30}></Ionicons>
          </TouchableOpacity>
          <Text style={styles.tittle}>FeedBack</Text>
        </View>  
      </View>
      <Image source={imagefeed} style={styles.imagefeeddimensions}></Image>
      <View style={styles.areaforevaluation}>       
        <View>
          <Text style={{fontSize: 16, fontFamily: fonts.title}}>Por favor avalie sua experiência</Text>
          <View style={{width: 311, height: 65, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
            {/* Exibindo imagens coloridas inicialmente e alterando para cinza conforme a seleção */}
            <TouchableOpacity style={styles.feedback} onPress={() => setExperiencia_feedback(1)}>
              <Image source={experiencia_feedback >= 1 ? oneGray : one} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.feedback} onPress={() => setExperiencia_feedback(2)}>
              <Image source={experiencia_feedback >= 2 ? twoGray : two} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.feedback} onPress={() => setExperiencia_feedback(3)}>
              <Image source={experiencia_feedback >= 3 ? treeGray : tree} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.feedback} onPress={() => setExperiencia_feedback(4)}>
              <Image source={experiencia_feedback >= 4 ? fourGray : four} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.feedback} onPress={() => setExperiencia_feedback(5)}>
              <Image source={experiencia_feedback >= 5 ? fiveGray : five} />
            </TouchableOpacity>  
          </View>
        </View>
        <View>
          <Text style={{fontFamily: fonts.title, fontSize: 16}}>Adicione um comentário:</Text>
          <TextInput 
            style={{width: 311, height: 137, backgroundColor: '#E9E9E9', textAlignVertical: 'top'}}
            onChangeText={(comentario_feedback) => setComentario_feedback(comentario_feedback)}
            value={comentario_feedback}
          >
          </TextInput>
        </View>
        <TouchableOpacity style={styles.send} onPress={() => saveData()}>
          <Text style={{color: '#fff', fontSize: 14, fontFamily: fonts.title}}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
