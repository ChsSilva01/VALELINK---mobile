import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles.js';
import {Ionicons} from '@expo/vector-icons';

import icone from '../../../assets/coca-cola-logo.png';
import vagas from '../../../assets/vagas.png'

import api from '../../services/api';

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
          if (res.data.resultado.length > 0) {
            // Armazene o nome do primeiro item da lista
            setImagem(res.data.resultado[0].foto_empresa);
            setCod_post(res.data.resultado[0].cod_post);
            setComentario(res.data.resultado[0].comentario);
            setData_do_post(res.data.resultado[0].data_do_post);
            setHora_do_post(res.data.resultado[0].hora_do_post);
          }
        } catch (error) {
          console.error('Erro ao buscar dados:', error);
        }
  }

  let imagenicon = require("../../../assets/duasestrela.png");

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
              <TouchableOpacity style={styles.buttonC}><Text style={styles.textButton}>Seguir</Text></TouchableOpacity>
            </View>
            <View style={{width: 345, height: 210}}>
              <Text>{item.comentario}</Text>
              <Image source={{uri: item.foto_empresa}} style={{width: 323, height: 202}}></Image>
            </View>
            <View style={{width: 345, height: 36, flexDirection: 'row'}}>
            <TouchableOpacity><Ionicons name='heart-outline' size={30} style={styles.iconactionspost}></Ionicons></TouchableOpacity>
                <TouchableOpacity><Ionicons name='chatbubble-outline' size={25} style={styles.iconactionspost}></Ionicons></TouchableOpacity>
                <TouchableOpacity><Ionicons name='share-social-outline' size={25} style={styles.iconactionspost}></Ionicons></TouchableOpacity>
                <TouchableOpacity style={styles.buttonC}>
                    <Text style={styles.textButton}>Se Cadastrar!!!</Text>
                </TouchableOpacity>
            </View>
          </View>
          
        ))}
        {/* <View style={styles.post}>
          <View style={styles.profile}>
            <View style={styles.icon}>
              <Image source={icone} style={styles.imageIcon}></Image>
            </View>
            <View style={styles.nameUser}>
              <TouchableOpacity onPress = {() => navigation.navigate("Perfildaempresa")}><Text style={styles.nameUsertext}>Etec de Registro</Text></TouchableOpacity>
            </View>
          </View>
          <View style={styles.infopost}>
            <View style={styles.textpost}>
              <Text style={styles.textposstyle}>{comentario}</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Image source={require("../../../assets/post_etec.png")} style={styles.imagepost}></Image>
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
        </View> */}
        
      </ScrollView>
    </View>
  );
}
