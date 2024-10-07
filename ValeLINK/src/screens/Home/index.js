import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles.js';
import {Ionicons} from '@expo/vector-icons';

import icone from '../../../assets/coca-cola-logo.png';
import vagas from '../../../assets/vagas.png'

import api from '../../services/api';
import url from '../../services/url.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {
  const [foto_empresa,setImagem] = useState(null);
  const [like, setLike] = useState("heart-outline");
  const [color, setColor] = useState("#000");
  const [curriculo, setCurriculo] = useState();
  

  const [lista,setLista] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
      listarDados();
      Iconelike();
      salvarCurriculo();
  },[])

  async function listarDados(){
          const res = await api.get(`apiVALELINK/post/listar.php?pagina=${page}&limite=10`);
          setLista(res.data.resultado);
          setPage(page + 1); 
  }

  let imagemdopost = foto_empresa;

  async function Iconelike() {
    if(like == 'heart-outline'){
      setLike('heart');
      setColor("#d9d9");
    } else {
      setLike('heart-outline');
      setColor("#000");
    }
  }

  async function salvarCod(cod_empresa) {
    try {
      console.log(cod_empresa)
      await AsyncStorage.setItem('@cod_empresa', JSON.stringify(cod_empresa));
      navigation.navigate('Perfildaempresa');
    } catch (error) {
      console.error('Erro ao salvar o código da vaga:', error);
    }
  }

  async function salvarCurriculo() {
    const cod_usuario = await AsyncStorage.getItem('@user');
    const res = await api.get(`apiVALELINK/curriculo/salvarcurriculo.php?cod_usuario=${cod_usuario}`);
    setCurriculo(res.data.cod_curriculo);
  }
  async function enviarCurriculo(cod_empresa) {
    const cod_usuario = await AsyncStorage.getItem('@user');
    
    const res = await api.post(`apiVALELINK/curriculo/salvarcurriculo.php`, {
        cod_usuario: cod_usuario,
        cod_curriculo: curriculo,
        cod_empresa: cod_empresa
    });

    console.log(res.data.mensagem);
  }
  return (
    <View style={styles.container}>
      
      <ScrollView style={styles.scrollfunctions}>
        {lista.map((item, index) =>(
          <View key={`${item.cod_post}-${index}`} style={styles.postcontainer}>
            <View style={styles.headercontainer}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  key={item.cod_post} 
                  source={{uri: `${url}/apiVALELINK/empresa/imgs/${item.foto_empresa}`}}
                  style={styles.companylogo}
                ></Image>
                <TouchableOpacity onPress={() => salvarCod(item.cod_empresa)}>
                  <Text style={styles.nameUsertext}>{item.nome_empresa}</Text>
                </TouchableOpacity>
                <Text style={styles.postschedule}>{item.diferenca_hora}</Text>
              </View>
              <TouchableOpacity style={styles.buttonD} onPress={()=> console.log(item.cod_empresa)}><Text style={styles.textButton} >+</Text></TouchableOpacity>
            </View>
            <View style={styles.contentcontainer}>
              <View style={styles.commentcontainer}>
                <Text style={{textAlign: 'justify'}}>{item.conteudo_post}</Text>
              </View>
              {item.midia_post && ( 
                <Image source={{uri: `${url}/apiVALELINK/post/imgs/${item.midia_post}`}} style={styles.imagecontent}></Image>
              )}
            </View>
            <View style={styles.footercontainer}>
                <TouchableOpacity onPress={Iconelike}><Ionicons name={like} size={28} style={styles.iconactionspost} color={color}></Ionicons></TouchableOpacity>
                <TouchableOpacity><Ionicons name='chatbubble-outline' size={23} style={styles.iconactionspost}></Ionicons></TouchableOpacity>
                <TouchableOpacity><Ionicons name='share-social-outline' size={23} style={styles.iconactionspost}></Ionicons></TouchableOpacity>
                <TouchableOpacity style={styles.buttonC} onPress={() => enviarCurriculo(item.cod_empresa)}>
                    <Text style={styles.textButton}>Enviar currículo!!!</Text>
                </TouchableOpacity>
            </View>
          </View>
          
        ))}
      </ScrollView>
    </View>
  );
}
