import React, { useState, useEffect, useCallback } from 'react';
import { View, TouchableOpacity, ActivityIndicator, FlatList, Text, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import api from '../../services/api';
import { styles } from './styles';
import debounce from 'lodash.debounce'; // Biblioteca para debounce
import url from '../../services/url';

export default function Pesquisar({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [info, setInfo] = useState([]); // Estado para armazenar os resultados da pesquisa
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const Pesquisar = async (query) => {
    if (!query) {
      setInfo([]); // Limpa os resultados quando o campo de busca está vazio
      return;
    }

    try {
      setIsLoading(true);
      const res = await api.get(`apiVALELINK/pesquisa/pesquisar.php?pesquisa=${query}`);
      console.log("Resposta da API:", res.data); // Verificar a resposta da API

      // Verificar se a resposta tem 'success' como true e se contém a 'nome_empresa'
      if (res.data.success) {
        setInfo([{ nome_empresa: res.data.nome_empresa, foto_empresa: res.data.foto_empresa }]); // Armazena a resposta como um array
      } else {
        setInfo([]); // Se não houver resultados, limpa a lista
      }
    } catch (error) {
      console.log("Erro ao Listar: ", error);
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  };

  // Debounce para evitar múltiplas requisições enquanto o usuário digita
  const debouncedPesquisar = useCallback(debounce(Pesquisar, 500), []);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    debouncedPesquisar(query); // Chama a função de busca com debounce
  };

  // Verificar mudanças no estado 'info'
  useEffect(() => {
    console.log("Estado 'info' atualizado:", info);
  }, [info]);

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', top: 50 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name='arrow-back' size={30} color={'#000'} />
        </TouchableOpacity>
        <Searchbar
          style={styles.searchbar}
          placeholder="Pesquisar"
          onChangeText={handleSearchChange}
          value={searchQuery}
        />
      </View>

      {/* Exibir um loader enquanto está buscando */}
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" style={{ top: 50 }} />
      ) : (
        <FlatList
          style={styles.searchresult}
          data={info}
          keyExtractor={(item, index) => index.toString()} // Chave única para cada item
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={styles.enterprise}>
                {/* Exibir o nome da empresa */}
                <Image source={{uri: `${url}apiVALELINK/empresa/imgs/${item.foto_empresa}`}} style={styles.companyphoto}></Image>
                <Text>{item.nome_empresa}</Text>
              </View>
            </TouchableOpacity>
          )}
          refreshing={refreshing}
          onRefresh={() => Pesquisar(searchQuery)} // Permitir atualização manual
        />
      )}
    </View>
  );
}
