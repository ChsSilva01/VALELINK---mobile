import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ImageBackground, Alert } from 'react-native';
import { styles } from './styles';
import { useState, useEffect } from 'react';

import imagefeed from '../../../assets/feedback_image.png'
import fonts from '../../styles/fonts';

import { showMessage, hideMessage } from "react-native-flash-message";

import {Ionicons} from '@expo/vector-icons';

import one from '../../../assets/umaestrela.png';
import two from '../../../assets/duasestrela.png';
import tree from '../../../assets/tresestrela.png';
import four from '../../../assets/quatroestrela.png';
import five from '../../../assets/cincoestrela.png';

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login({ navigation }) {
  const [teste,setTeste] = useState("");
  const [sucess,setSucess] = useState(true);
  const [experiencia_feedback,setExperiencia_feedback] = useState();
  const [comentario_feedback,setComentario_feedback] = useState("");
  // const [umaestrela,setUmaestrela] = useState("../../../assets/umaestrelasemcor.png");
  // const [duasestrela,setDuasestrela] = useState("../../../assets/duasestrelasemcor.png");
  // const [tresestrela,setTresestrela] = useState("../../../assets/tresestrelasemcor.png");
  // const [quatroestrela,setQuatroestrela] = useState("../../../assets/quatroestrelasemcor.png");
  // const [cincoestrela,setCincoestrela] = useState("../../../assets/cincoestrelasemcor.png");
  
  // useEffect(() => {
    // saveData();
  // }, []); 

  // async function experience() {
  //   if(experiencia_feedback == 5){
      
  //   }
  // }

  async function saveData() {
    const cod_usuario = await AsyncStorage.getItem('@user');
    console.log("cod_usuario", cod_usuario); 

    if (experiencia_feedback == "" || comentario_feedback == "") {
      showMessage({
          message: "Erro ao Salvar",
          description: 'Preencha os Campos Obrigatórios!',
          type: "warning",
      });
      return;
  }



  try {   
      const obj = {
        experiencia_feedback: experiencia_feedback,               
        comentario_feedback: comentario_feedback,              
        cod_usuario: cod_usuario,   
      }

      const res = await api.post('apiVALELINK/feedback/salvar.php', obj);
  
      if (res.data.sucesso === false) {
          showMessage({
              message: "Erro ao Salvar",
              description: res.data.mensagem,
              type: "warning",
              duration: 3000,
          });

          return;
      }

      setSucess(true);
      showMessage({
          message: "Salvo com Sucesso",
          description: "Registro Salvo",
          type: "success",
          duration: 800,
      });
      navigation.push("Usuario")

  } catch (error) {
      Alert.alert("Ops", "Alguma coisa deu errado, tente novamente.");
      setSucess(false);
  }
}


  return (
    <View style={styles.container}>
      <View style={styles.headerfeed}>
      <View style={styles.header}>
                <TouchableOpacity onPress = {() => navigation.navigate("Home")}><Ionicons name="arrow-back" size={30}></Ionicons></TouchableOpacity>
                <Text style={styles.tittle}>FeedBack</Text>
            </View>  
      </View>
      <Image source={imagefeed} style={styles.imagefeeddimensions}></Image>
      <View style={styles.areaforevaluation}>       
        <View>
          <Text style={{fontSize: 16, fontFamily: fonts.title}}>Por favor avalie sua experiência</Text>
          <View style={{width: 311, height: 65, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
            <TouchableOpacity style={styles.feedback} onPress={() => setExperiencia_feedback(5)}><Image source={five}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.feedback} onPress={() => setExperiencia_feedback(4)}><Image source={four}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.feedback} onPress={() => setExperiencia_feedback(3)}><Image source={tree}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.feedback} onPress={() => setExperiencia_feedback(2)}><Image source={two}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.feedback} onPress={() => {setExperiencia_feedback(1), console.log(experiencia_feedback)}}><Image source={one}></Image></TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={{fontFamily: fonts.title, fontSize: 16}}>Adicione um comentário:</Text>
          <TextInput 
            style={{width: 311, height: 137, backgroundColor: '#E9E9E9'}}
            onChangeText={(comentario_feedback) => setComentario_feedback(comentario_feedback)}
            value={comentario_feedback}
          >

          </TextInput>
        </View>
        <TouchableOpacity style={styles.send} onPress={() => saveData()}><Text style={{color: '#fff', fontSize: 14, fontFamily: fonts.title}}>Enviar</Text></TouchableOpacity>
      </View>
    </View>
  );
}


