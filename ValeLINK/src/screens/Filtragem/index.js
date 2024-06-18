import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, ScrollView, Alert } from 'react-native';
import { styles } from "./styles";

import {Ionicons} from '@expo/vector-icons';
import api from '../../services/api';
export default function Filtragem({ navigation }){
    const [carlos,setCarlos] = useState('Banana');
    const [lista,setLista] = useState([]);
    const [page, setPage] = useState(1);
    const [nome, setNome] = useState('');

    useEffect(() => {
        listarDados();
    },[])

    async function listarDados(){
        try {
            const res = await api.get(`apiVALELINK/usuarios/listar.php?pagina=${page}&limite=10`);
            setLista(res.data.resultado);
            setPage(page + 1);
            if (res.data.resultado.length > 0) {
              // Armazene o nome do primeiro item da lista
              setNome(res.data.resultado[0].nome);
            }
          } catch (error) {
            console.error('Erro ao buscar dados:', error);
          }
    }
    return(
        
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress = {() => navigation.navigate("Perfil")}><Ionicons name="close" size={30}></Ionicons></TouchableOpacity>
                <Text style={styles.tittle}>Teste</Text>
            </View>
            <ScrollView>
            <View style={styles.grid}>
                   {lista.map(item => (
                      <View
                         style={styles.griditem}
                         key={item.id}
                      >
                        <Text
                          style={{color: '#ffffff'}}
                        >
                            {item.id} - {item.nome}</Text>
                        
                        
                      </View>

                   ))}
                   <Text>Carlos{nome}</Text>
                </View>
                <TextInput 
                placeholder={nome}
                style={{width: 250, height: 50, backgroundColor: '#d9d9'}}></TextInput>
            </ScrollView>
            
        </View>
    )
}