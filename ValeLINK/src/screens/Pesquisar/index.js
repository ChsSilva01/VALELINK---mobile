import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { styles } from './styles';
import {Ionicons} from '@expo/vector-icons';
//pegue o parâmetro da tela anterior = route, nome = 
export default function Pesquisar({ navigation }) {
  const[searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', top: 50}}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}><Ionicons name='arrow-back' size={30} color={'#000'}></Ionicons></TouchableOpacity>
        <Searchbar
          style={styles.searchbar}
          placeholder="Pesquisar"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <View></View>
      </View>
    </View>
  );
}