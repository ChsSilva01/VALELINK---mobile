import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { coringa } from '../../../assets/bonitão.jpg';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import url from '../../services/url';

export default function Notificacoes(){

    const [info, setInfo] = useState([]);
    useEffect(() => {
        listarDados();
    },[])
    
    async function listarDados(){
        try {
            const user = await AsyncStorage.getItem('@user');
            const res = await api.get(`apiVALELINK/notificacoes/listar.php?cod_usuario=${user}`);
            setInfo(res.data.data);
          } catch (error) {
            console.error('Erro ao buscar dados:', error);
          }
    }

    return(
        <View style={styles.container}>
            <View style={styles.areafromactions}>
                <TouchableOpacity style={styles.actions} onPress={() => console.log(info)}><Text style={styles.cleanall}>Limpar tudo</Text></TouchableOpacity>
            </View>
            <FlatList
                data={info}
                keyExtractor={(item, index) => index.toString()} // Chave única para cada item
                renderItem={({ item }) => (
                    <View style={styles.NotificationArea}>
                        <Image source={{uri: `${url}apiVALELINK/empresa/imgs/${item.foto_empresa}`}} style={styles.companyphoto}></Image>
                            <View style={styles.line}></View>
                            <View style={styles.distance}>
                                <View style={styles.organization}>
                                    <Text style={styles.companyname}>{item.nome_empresa}</Text>
                                    <Text style={styles.time}>1h</Text>
                                </View>
                                <Text style={styles.status}>{item.status_notificacoes}</Text>
                            </View>
                    </View> 
                )}
            />
        </View>
    )
}