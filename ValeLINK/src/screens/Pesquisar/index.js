import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Searchbar } from 'react-native-paper';

//pegue o parâmetro da tela anterior = route, nome = 
export default function Pesquisar() {
  const[searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
       <Searchbar
       style={styles.searchbar}
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchbar: {
    top: '5%'
  }
});