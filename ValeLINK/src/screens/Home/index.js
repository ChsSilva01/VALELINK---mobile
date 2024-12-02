import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from './styles.js';
import { Ionicons } from '@expo/vector-icons';
import { Asset } from 'expo-asset'; // Importando Asset para download das imagens

import api from '../../services/api';
import url from '../../services/url.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {
  const [foto_empresa, setImagem] = useState(null);
  const [like, setLike] = useState("heart-outline");
  const [color, setColor] = useState("#000");
  const [curriculo, setCurriculo] = useState();
  const [lista, setLista] = useState([]);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false); // Estado para pull-to-refresh
  const [isLoading, setIsLoading] = useState(false); // Estado para carregamento inicial

  useEffect(() => {
    listarDados(); // Carregar dados na montagem do componente
    salvarCurriculo();
    loadImages(); // Carregar as imagens de forma assíncrona
  }, []);

  // Função para carregar imagens de forma assíncrona
  const loadImages = async () => {
    try {
      const images = [
        // Verificando se a URL não é null ou inválida antes de tentar baixar
        foto_empresa && `${url}/apiVALELINK/empresa/imgs/${foto_empresa}`
      ].filter(Boolean); // Filtra as URLs inválidas

      if (images.length > 0) {
        await Promise.all(images.map(async (imageUri) => {
          try {
            await Asset.fromURI(imageUri).downloadAsync(); // Baixa a imagem a partir da URI
          } catch (error) {
            console.error("Erro ao carregar imagem:", error); // Captura e exibe erros de download
          }
        }));
        console.log("Imagens carregadas com sucesso.");
      }
    } catch (error) {
      console.error("Erro ao carregar imagens:", error);
    }
  };

  async function listarDados(refresh = false) {
    try {
      if (!refresh) setIsLoading(true); // Mostrar loader inicial, se não for um refresh
      const res = await api.get(`apiVALELINK/post/listar.php?pagina=${refresh ? 1 : page}&limite=10`);
      if (res.data && Array.isArray(res.data.resultado)) {
        setLista(refresh ? res.data.resultado : [...lista, ...res.data.resultado]);
        setPage(refresh ? 2 : page + 1); // Reseta ou incrementa a página
      } else {
        console.error('Erro: Dados inesperados da API', res.data);
      }
    } catch (error) {
      console.error('Erro ao listar dados:', error);
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  }

  async function salvarCod(cod_empresa) {
    try {
      console.log(cod_empresa);
      await AsyncStorage.setItem('@cod_empresa', JSON.stringify(cod_empresa));
      navigation.navigate('Perfildaempresa');
    } catch (error) {
      console.error('Erro ao salvar o código da vaga:', error);
    }
  }

  async function salvarCurriculo() {
    try {
      const cod_usuario = await AsyncStorage.getItem('@user');
      const res = await api.get(`apiVALELINK/curriculo/salvarcurriculo.php?cod_usuario=${cod_usuario}`);
      setCurriculo(res.data.cod_curriculo);
    } catch (error) {
      console.error('Erro ao salvar currículo:', error);
    }
  }

  async function enviarCurriculo(cod_empresa) {
    try {
      const cod_usuario = await AsyncStorage.getItem('@user');
      console.log('Usuário:', cod_usuario);
      console.log('Currículo:', curriculo);
      console.log('Empresa:', cod_empresa);

      const res = await api.post(`apiVALELINK/curriculo/enviarcurriculo.php`, {
        cod_usuario: cod_usuario,
        cod_curriculo: curriculo,
        cod_empresa: cod_empresa
      });

      console.log('Resposta da API:', res.data);
    } catch (error) {
      console.error('Erro ao enviar currículo:', error);
    }
  }

  function Iconelike() {
    setLike(like === 'heart-outline' ? 'heart' : 'heart-outline');
    setColor(like === 'heart-outline' ? "#d9d9" : "#000");
  }

  const renderItem = ({ item }) => (
    <View style={styles.postcontainer}>
      <View style={styles.headercontainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {/* Verificando se a URL da imagem é válida */}
          {item.foto_empresa && (
            <Image
              key={item.cod_post}
              source={{ uri: `${url}/apiVALELINK/empresa/imgs/${item.foto_empresa}` }}
              style={styles.companylogo}
            />
          )}
          <TouchableOpacity onPress={() => salvarCod(item.cod_empresa)}>
            <Text style={styles.nameUsertext}>{item.nome_empresa}</Text>
          </TouchableOpacity>
          <Text style={styles.postschedule}>{item.diferenca_hora}</Text>
        </View>
        <TouchableOpacity style={styles.buttonD} onPress={() => console.log(item.cod_empresa)}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentcontainer}>
        <View style={styles.commentcontainer}>
          <Text style={{ textAlign: 'justify' }}>{item.conteudo_post}</Text>
        </View>
        {item.midia_post && (
          <Image
            source={{ uri: `${url}/apiVALELINK/post/imgs/${item.midia_post}` }}
            style={styles.imagecontent}
          />
        )}
      </View>
      <View style={styles.footercontainer}>
        <TouchableOpacity onPress={Iconelike}>
          <Ionicons name={like} size={28} style={styles.iconactionspost} color={color} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="chatbubble-outline" size={23} style={styles.iconactionspost} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="share-social-outline" size={23} style={styles.iconactionspost} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonC} onPress={() => enviarCurriculo(item.cod_empresa)}>
          <Text style={styles.textButton}>Enviar currículo!!!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      <FlatList
        data={lista}
        keyExtractor={(item, index) => `${item.cod_post}-${index}`}
        renderItem={renderItem}
        onRefresh={() => listarDados(true)} // Atualiza a lista ao puxar para baixo
        refreshing={refreshing} // Estado de carregamento do pull-to-refresh
        onEndReachedThreshold={0.1} // Limite para acionar o carregamento adicional
        ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>Nenhum dado encontrado</Text>}
        style={styles.scrollfunctions}
      />
    </View>
  );
}
