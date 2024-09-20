import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import logo from '../../../assets/logo.png';
import { Picker } from '@react-native-picker/picker';
import company from '../../../assets/companyexemple.png';
import fonts from '../../styles/fonts';
import api from '../../services/api';
import url from '../../services/url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

export default function Vagas({ navigation }){
    const [lista, setLista] = useState([]);
    const [page, setPage] = useState(1);
    const [cod, setCod] = useState("");

    useEffect(() => {
        listarDados();
    },[])
  
    async function listarDados(){
        try {
            const res = await api.get(`apiVALELINK/vagas/listar.php?pagina=${page}&limite=10`);
            await AsyncStorage.setItem('@cod_vagas', JSON.stringify(res.data.resultado[0].cod_vagas));
            setLista(res.data.resultado);
            setPage(page + 1);
          } catch (error) {
            console.error('Erro ao buscar dados:', error);
          }
    }

    async function salvarCod(cod_vagas) {
        try {
          await AsyncStorage.setItem('@cod_vagas', JSON.stringify(cod_vagas));
          navigation.navigate('AnaliseDeVagas');
        } catch (error) {
          console.error('Erro ao salvar o código da vaga:', error);
        }
      }
    return(
        <View style={styles.container}>
            <View style={styles.margin}>
            <View style={styles.header}>
                <Image source={logo} style={styles.logoimage}></Image>
                <Text style={{fontSize: 24, right: 15, bottom: 0,fontFamily: fonts.title}}>Vagas</Text>
                <View></View>     
            </View>
                <View style={styles.searchview}>
                    <TextInput 
                        style={styles.course}
                        placeholder=' Vaga'
                    ></TextInput>
                    <TextInput 
                        style={styles.course}
                        placeholder=' Cidade'
                    ></TextInput>
                </View>
                <View style={{flexDirection: 'row',justifyContent: 'center', top: 40}}>
                    <TouchableOpacity style={styles.filters}><Text style={styles.filterstext}>Trabalho</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.filters}><Text style={styles.filterstext}>Senioridade</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.filters}><Text style={styles.filterstext}>Cidade</Text></TouchableOpacity>
                </View>
                <ScrollView style={{height: 350, top: 60}}>
                {lista.map(item =>(
                    <TouchableOpacity onPress = {() =>{ salvarCod(item.cod_vagas)}} key={item.cod_vagas}>
                        <View style={styles.vacancies}>
                            <Image source={{uri: `${url}/apiVALELINK/imagem/${item.foto_empresa}`}} style={styles.imagecompany}></Image>
                            <View style={styles.line}></View>
                            <View style={{left: 5}}>
                                <Text style={styles.texttitlevacancie}>Desenvolvimento Web</Text>
                                <Text style={styles.textnamecompany}>{item.nome_empresa}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
                </ScrollView>   
                <TouchableOpacity style={styles.button} onPress = {() =>{ navigation.navigate('BuscasVagas'); console.log(cod)}}><Text style={styles.textbutton}>Buscar</Text></TouchableOpacity>
            </View>
        </View>
    )
};