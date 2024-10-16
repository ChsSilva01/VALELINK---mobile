import { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './styles';
import {Ionicons} from '@expo/vector-icons';
import icone from '../../../assets/foto_coringa.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import url from '../../services/url';
import { LinearGradient } from 'expo-linear-gradient';

export default function Perfildaempresa({ navigation }){
    const [nome_empresa, setNomeEmpresa] = useState("");
    const [descricao_da_empresa, setDescricao_da_empresa] = useState("");
    const [quantidade_de_funcionario_empresa, setQuantidade_de_funcionario_empresa] = useState("");
    const [quantidade_de_seguidores_empresa, setQuantidade_de_seguidores_empresa] = useState("");
    const [foto_empresa, setFoto_empresa] = useState("");
    

    useEffect(() => {
        listarDados();
    },[])
  
    async function listarDados(){
        try {
            const cod_empresa = await AsyncStorage.getItem('@cod_empresa');
            const res = await api.get(`apiVALELINK/empresa/listarempresa.php?cod_empresa=${cod_empresa}`);
            setNomeEmpresa(res.data.nome_empresa);  
            setDescricao_da_empresa(res.data.descricao_da_empresa);  
            setQuantidade_de_funcionario_empresa(res.data.quantidade_de_funcionario_empresa);  
            setQuantidade_de_seguidores_empresa(res.data.quantidade_de_seguidores_empresa);  
            setFoto_empresa(res.data.foto_empresa);  
          } catch (error) {
            console.error('Erro ao buscar dados:', error);
          }
    }
    return(
        <LinearGradient
            style={styles.container}
            colors={['#01E581', '#00C16C', '#00755C']}
            start={{ x: -2, y: 2 }}
            end={{ x: 2, y: 2 }}
        >
            <View style={styles.back}>
                <TouchableOpacity onPress = {() => navigation.navigate("Home")}><Ionicons name='arrow-back' size={25} style={styles.actionsprofile}></Ionicons></TouchableOpacity>
            </View>
            <View style={styles.areaprofile}>
                <View style={styles.employeefollowersandprofile}>
                    <View style={styles.infostatus}>
                        <Text style={styles.amount}>{quantidade_de_seguidores_empresa}k</Text>
                        <Text style={styles.quantityofwhat}>Seguidores</Text>
                    </View>
                    <View style={styles.circleimage}>
                        <Image source={{uri: `${url}/apiVALELINK/empresa/imgs/${foto_empresa}`}} style={styles.profileimage}></Image>
                    </View>
                    <View style={styles.infostatus}>
                        <Text style={styles.amount}>{quantidade_de_funcionario_empresa}</Text>
                        <Text style={styles.quantityofwhat}>Funcionários</Text>
                    </View>
                </View>
                <View style={styles.Settingsprofile}>
                    <View style={styles.Settingsname}>
                        <Text style={styles.nameprofile}>@{nome_empresa}</Text>
                        <Text style={styles.descriptionsprofile}>{descricao_da_empresa}</Text>
                        <TouchableOpacity style={styles.follow}><Text style={styles.followtext}>Seguir</Text></TouchableOpacity>
                    </View>  
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomWidth: 1, borderColor: '#B5B5B5'}}>  
                        <Text>Publicações</Text>             
                        <Text>Fotos</Text>             
                        <Text>Vídeos</Text>   
                    </View>          
                </View>
            </View>
        </LinearGradient>
    )
}