import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { styles } from './styles';
import logo from '../../../assets/logo.png'
import logocompany from '../../../assets/logo_company.png';
import contract_time_icon from '../../../assets/contract_time_icon.png';
import time_of_work from '../../../assets/time_of_work.png';
import wage from '../../../assets/wage.png';
import fonts from '../../styles/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import url from '../../services/url';
import {Ionicons} from '@expo/vector-icons';

export default function AnaliseDeVagas({ navigation }){
    const [nome_empresa, setNomeEmpresa] = useState("");
    const [foto_empresa, setFotoEmpresa] = useState("");
    const [salario_vagas, setSalario_vagas] = useState("");
    const [carga_horaria_vagas, setCarga_horaria_vagas] = useState("");
    const [tempo_contrato_vagas, setTempo_contrato_vagas] = useState("");
    const [area_vagas, setArea_vagas] = useState("");
    
    useEffect(() => {
        listarDados();
    },[])
  
    async function listarDados(){
        try {
            const cod_vagas = await AsyncStorage.getItem('@cod_vagas');
            const res = await api.get(`apiVALELINK/vagas/listarempresa.php?cod_vagas=${cod_vagas}`);
            setNomeEmpresa(res.data.nome_empresa);
            setFotoEmpresa(res.data.foto_empresa);
            setSalario_vagas(res.data.salario_vagas);
            setCarga_horaria_vagas(res.data.carga_horaria_vagas);
            setTempo_contrato_vagas(res.data.tempo_contrato_vagas);
            setArea_vagas(res.data.area_vagas);

          } catch (error) {
            console.error('Erro ao buscar dados:', error);
          }
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity onPress = {() => navigation.navigate("Vagas")}><Ionicons name="arrow-back" size={30}></Ionicons></TouchableOpacity>
                <Text style={{fontSize: 24, right: 15, bottom: 0,fontFamily: fonts.title}}>Vagas</Text>
                <View></View>     
            </View>
            <View style={styles.vacancy}>
                <Image source={{uri: `${url}/apiVALELINK/imagem/${foto_empresa}`}} style={styles.logocompany}></Image>
                <View style={{top: 27, left: 23}}>
                    <Text>{area_vagas}</Text>
                    <Text>{nome_empresa}</Text>
                </View>
                <View style={{ top: 27, width: 353, height: 150, justifyContent: 'space-around', alignItems: 'start', paddingLeft: 20}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{width: 34, height: 34,backgroundColor: '#004443', alignItems: 'center', justifyContent: 'center', borderRadius: 6}}>
                            <Image source={contract_time_icon}></Image>
                        </View>
                        <Text style={{fontSize: 16, left: 5}}>{tempo_contrato_vagas}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{width: 34, height: 34,backgroundColor: '#004443', alignItems: 'center', justifyContent: 'center', borderRadius: 6}}>
                            <Image source={time_of_work}></Image>
                        </View>
                        <Text style={{fontSize: 16, left: 5}}>{carga_horaria_vagas}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{width: 34, height: 34,backgroundColor: '#004443', alignItems: 'center', justifyContent: 'center', borderRadius: 6}}>
                            <Image source={wage}></Image>
                        </View>
                        <Text style={{fontSize: 16, left: 5}}>R${salario_vagas}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.button}><Text style={styles.textbutton}>Enviar curriculo</Text></TouchableOpacity>
                <ScrollView style={styles.descriptionarea}>
                    <Text style={styles.descriptiontext}>Descrição:</Text>
                    
                </ScrollView>
                
            </View>
        </View>
    )
}