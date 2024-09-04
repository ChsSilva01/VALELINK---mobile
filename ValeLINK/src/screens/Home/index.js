import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles.js';
import {Ionicons} from '@expo/vector-icons';

import icone from '../../../assets/coca-cola-logo.png';
import vagas from '../../../assets/vagas.png'

import api from '../../services/api';
import url from '../../services/url.js';

export default function Home({ navigation }) {
  const [foto_empresa,setImagem] = useState(null);
  const [comentario,setComentario] = useState("");
  const [data_do_post,setData_do_post] = useState("");
  const [hora_do_post,setHora_do_post] = useState("");
  const [cod_post, setCod_post] = useState("arthur.png");

  const [lista,setLista] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
      listarDados();
  },[])

  async function listarDados(){
      try {
          const res = await api.get(`apiVALELINK/post/listar.php?pagina=${page}&limite=10`);
          setLista(res.data.resultado);
          setPage(page + 1);
        } catch (error) {
          console.error('Erro ao buscar dados:', error);
        }
  }

  let imagemdopost = foto_empresa;

  return (
    <View style={styles.container}>
      
      <ScrollView style={styles.scrollfunctions}>
        {lista.map(item =>(
          <View key={item.cod_post} style={{marginTop: 26,width: 345, height: 317, left: 26, elevation: 2, borderRadius: 10}}>
            <View style={{width: 345, height: 71, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  key={item.cod_post} 
                  source={icone}
                  style={{width: 40,height: 40}}
                ></Image>
                <Text style={styles.nameUsertext}>{item.nome_empresa}</Text>
                <Text style={{color: '#959595', fontSize: 12}}>{item.hora_do_post}</Text>
              </View>
              <TouchableOpacity style={styles.buttonC} onPress={()=> console.log(item)}><Text style={styles.textButton} >Seguir</Text></TouchableOpacity>
            </View>
            <View style={{width: 345, height: 210}}>
              <Text>{item.comentario}</Text>
              <Image source={{uri: `${url}/apiVALELINK/imagem/${item.imagem}`}} style={{width: 323, height: 202}}></Image>
            </View>
            <View style={{width: 345, height: 36, flexDirection: 'row', top: 5}}>
            <TouchableOpacity><Ionicons name='heart-outline' size={28} style={styles.iconactionspost}></Ionicons></TouchableOpacity>
                <TouchableOpacity><Ionicons name='chatbubble-outline' size={23} style={styles.iconactionspost}></Ionicons></TouchableOpacity>
                <TouchableOpacity><Ionicons name='share-social-outline' size={23} style={styles.iconactionspost}></Ionicons></TouchableOpacity>
                <TouchableOpacity style={styles.buttonC}>
                    <Text style={styles.textButton}>Se Cadastrar!!!</Text>
                </TouchableOpacity>
            </View>
          </View>
          
        ))}
      </ScrollView>
    </View>
  );
}
