import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native';
import { styles } from './styles';

import {Ionicons} from '@expo/vector-icons';

import url from '../../services/url';
import api from '../../services/api';


export default function Empresas({ navigation }){
    const [nome_empresa, setNome_empresa] = useState("");
    const [foto_empresa, setFoto_empresa] = useState("");
    const [descricao_da_empresa, setDescricao_da_empresa] = useState("");
    
    useEffect(() => {
        listarDados();
    },[])
    
    async function listarDados(){
        try {
            const res = await api.get(`apiVALELINK/listar_empresa/listar.php`); 
            setNome_empresa(res.data.nome_empresa);
            setFoto_empresa(res.data.foto_empresa);
            setDescricao_da_empresa(res.data.descricao_da_empresa);
          } catch (error) {
            console.error('Erro ao buscar dados:', error);
          }
    }

    const limite = 30;
    return(
    <View style={styles.container}>
        <View style={styles.NotificationArea}>
            <View style={styles.circle}></View>
            <Image source={{uri: `${url}apiValeLINK/empresa/imgs/${foto_empresa}`}} style={styles.companyimage}></Image>   
            <View style={styles.informationofcompany}>
                <View style={styles.companyandtime}>
                    <Text style={styles.company}>{nome_empresa}</Text>
                    <View style={styles.smallcircle}></View>
                    <Text style={styles.timestyle}>2hrs atrás</Text>
                </View>
                <View>
                    <Text style={styles.situation}>{descricao_da_empresa.substring(0, limite) + '...'}</Text>
                </View>
            </View>
        </View>
        <TouchableOpacity style={styles.vacancie} onPress={() => navigation.navigate('Vagas')}><Ionicons name='briefcase-outline' size={38} color={'#01E581'}></Ionicons></TouchableOpacity>
    </View>
    )
}