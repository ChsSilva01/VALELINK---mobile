import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { styles } from './styles';
import {Ionicons} from '@expo/vector-icons';
import api from '../../services/api';
import { FlatList } from 'react-native-gesture-handler';
//pegue o parâmetro da tela anterior = route, nome = 
export default function Pesquisar({ navigation }) {
  const[searchQuery, setSearchQuery] = useState('');
  const[info, setInfo] = useState('');
  const[isLoading, setIsLoading] = useState('');
  const[refreshing, setRefreshing] = useState('');
  

  async function Pesquisar() {
    try {
        const res = await api.get(`apiVALELINK/pesquisa/pesquisar.php?pesquisa=${searchQuery}`);
        setInfo(res.data);
    } catch (error) {
        console.log("Erro ao Listar " + error);
    } finally {
        setIsLoading(false);
        setRefreshing(false);

    }
  }
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', top: 50}}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}><Ionicons name='arrow-back' size={30} color={'#000'}></Ionicons></TouchableOpacity>
        <Searchbar
          style={styles.searchbar}
          placeholder="Pesquisar"
          onChangeText={setSearchQuery}
          value={searchQuery}
          onIconPress={Pesquisar}
        />
        <View></View>
      </View>
    </View>
  );
}