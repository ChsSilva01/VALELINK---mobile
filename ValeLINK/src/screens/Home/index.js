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
  const [like, setLike] = useState("heart-outline");
  const [color, setColor] = useState("#fff");

  const [lista,setLista] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
      listarDados();
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
      setColor("#d9d9")
    } else {
      setLike('heart-outline');
      setColor("#fff")
    }
  }
  return (
    <View style={styles.container}>
      
      <ScrollView style={styles.scrollfunctions}>
        {lista.map((item, index) =>(
          <View key={`${item.cod_post}-${index}`} style={{marginTop: 26,width: 345, height: 317, left: 26, elevation: 2, borderRadius: 10}}>
            <View style={{width: 345, height: 71, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  key={item.cod_post} 
                  source={icone}
                  style={{width: 40,height: 40}}
                ></Image>
                <TouchableOpacity onPress={() => navigation.navigate('Perfildaempresa')}>
                  <Text style={styles.nameUsertext}>{item.nome_empresa}</Text>
                </TouchableOpacity>
                <Text style={{color: '#959595', fontSize: 12, left: 20}}>{item.hora_do_post}</Text>
              </View>
              <TouchableOpacity style={styles.buttonC} onPress={()=> console.log(item)}><Text style={styles.textButton} >Seguir</Text></TouchableOpacity>
            </View>
            <View style={{width: 345, height: 210, alignItems: 'center'}}>
              <View style={{alignItems: 'flex-start', width: 323}}>
                <Text>{item.comentario}</Text>
              </View>
              <Image source={{uri: `${url}/apiVALELINK/imagem/${item.imagem}`}} style={{width: 323, height: 202, resizeMode: 'stretch'}}></Image>
            </View>
            <View style={{width: 345, height: 36, flexDirection: 'row', top: 5}}>
                <TouchableOpacity onLongPress={Iconelike}><Ionicons name={like} size={28} style={styles.iconactionspost} color={color}></Ionicons></TouchableOpacity>
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
