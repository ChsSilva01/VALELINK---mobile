import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles.js';
import {Ionicons} from '@expo/vector-icons';

import icone from '../../../assets/coca-cola-logo.png';
import vagas from '../../../assets/vagas.png'

import api from '../../services/api';

export default function Home({ navigation }) {
  const [imagem,setImagem] = useState("");
  const [comentario,setComentario] = useState("");
  const [data_do_post,setData_do_post] = useState("");
  const [hora_do_post,setHora_do_post] = useState("");

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
          if (res.data.resultado.length > 0) {
            // Armazene o nome do primeiro item da lista
            setImagem(res.data.resultado[0].imagem);
            // setComentario(res.data.resultado[2].comentario);
            // setData_do_post(res.data.resultado[3].data_do_post);
            // setHora_do_post(res.data.resultado[4].hora_do_post);
          }
        } catch (error) {
          console.error('Erro ao buscar dados:', error);
        }
  }

  return (
    <View style={styles.container}>
      
      <ScrollView style={styles.scrollfunctions}>
        <View style={styles.post}>
          <View style={styles.profile}>
            <View style={styles.icon}>
              <Image source={icone} style={styles.imageIcon}></Image>
            </View>
            <View style={styles.nameUser}>
              <TouchableOpacity onPress = {() => navigation.navigate("Perfildaempresa")}><Text style={styles.nameUsertext}>Coca-Cola</Text></TouchableOpacity>
            </View>
          </View>
          <View style={styles.infopost}>
            <View style={styles.textpost}>
              <Text style={styles.textposstyle}>{imagem}</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Image source={vagas} style={styles.imagepost}></Image>
            </View>
            <View style={styles.actionspost}>
                <TouchableOpacity><Ionicons name='heart-outline' size={30} style={styles.iconactionspost}></Ionicons></TouchableOpacity>
                <TouchableOpacity><Ionicons name='chatbubble-outline' size={25} style={styles.iconactionspost}></Ionicons></TouchableOpacity>
                <TouchableOpacity><Ionicons name='share-social-outline' size={25} style={styles.iconactionspost}></Ionicons></TouchableOpacity>
                <TouchableOpacity style={styles.buttonC}>
                    <Text style={styles.textButton}>Se Cadastrar!!!</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
        
      </ScrollView>
    </View>
  );
}
