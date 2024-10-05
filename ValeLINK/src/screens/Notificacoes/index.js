import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { coringa } from '../../../assets/bonitão.jpg';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import url from '../../services/url';

export default function Notificacoes(){
    const [nome_empresa, setNome_empresa] = useState([]);
    const [foto_empresa, setFoto_empresa] = useState([]);
    const [status_notificacoes, setStatus_notificacoes] = useState([]);

    useEffect(() => {
        listarDados();
    },[])
    
    async function listarDados(){
        try {
            const user = await AsyncStorage.getItem('@user');
            const res = await api.get(`apiVALELINK/notificacoes/listar.php?cod_usuario=${user}`);
            setNome_empresa(res.data.nome_empresa);
            setFoto_empresa(res.data.foto_empresa);
            setStatus_notificacoes(res.data.status_notificacoes);
          } catch (error) {
            console.error('Erro ao buscar dados:', error);
          }
    }

    return(
        <View style={styles.container}>
            <View style={styles.areafromactions}>
                <TouchableOpacity style={styles.actions} onPress={() => console.log(foto_empresa)}><Text style={styles.cleanall}>Limpar tudo</Text></TouchableOpacity>
            </View>
            <View style={styles.NotificationArea}>
            <Image source={{uri: `${url}apiVALELINK/empresa/imgs/${foto_empresa}`}} style={styles.companyphoto}></Image>
                <View style={styles.line}></View>
                <View style={styles.distance}>
                    <View style={styles.organization}>
                        <Text style={styles.companyname}>{nome_empresa}</Text>
                        <Text style={styles.time}>1h</Text>
                    </View>
                    <Text style={styles.status}>{status_notificacoes}</Text>
                </View>
            </View> 
        </View>
    )
}