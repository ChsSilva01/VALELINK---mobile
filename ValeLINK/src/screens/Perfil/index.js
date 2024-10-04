import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import {Ionicons} from '@expo/vector-icons';
import  Arthur  from '../../../assets/arthur.png';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import url from '../../services/url';

export default function Perfil({ navigation }){
    const[foto_usuario, setImage] = useState(null);
    const [nome_usuario, setNome] = useState("");
    const [isLoading, setIsLoading] = useState(true); 
    const [refreshing, setRefreshing] = useState(false); 

    async function listarDadosid() {
        try {
            const user = await AsyncStorage.getItem('@user');
            const res = await api.get(`apiVALELINK/usuarios/buscarId.php?cod_usuario=${user}`);
            setNome(res.data.nome_usuario);
            setImage(res.data.foto_usuario);
    
        } catch (error) {
            console.log("Erro ao Listar " + error);
        } finally {
            setIsLoading(false);
            setRefreshing(false);
    
        }
      }
      useEffect(() => {
        listarDadosid();
      }, []); 

    return(
        <LinearGradient
            colors={['#01E581', '#00C16C', '#00755C']}
            start={{ x: -2, y: 2 }}
            end={{ x: 2, y: 2 }}
            style={styles.container}
        >
            <View style={styles.back}>
                <TouchableOpacity onPress = {() => navigation.navigate("Home")}><Ionicons name='arrow-back' size={25} style={styles.actionsprofile}></Ionicons></TouchableOpacity>
                <TouchableOpacity><Ionicons name='camera-reverse' size={25} style={styles.actionsprofile}></Ionicons></TouchableOpacity>
            </View>
            <View style={styles.areaprofile}>
                <View style={styles.circleimage}>
                    <Image source={{uri: `${url}/apiVALELINK/usuarios/imgs/${foto_usuario}`}} style={styles.profileimage}></Image>
                </View>
                <View style={styles.Settingsprofile}>
                    <View style={styles.Settingsname}>
                        <Text style={styles.nameprofile}>{nome_usuario}</Text>
                        <Text style={styles.descriptionsprofile}>Designer</Text>
                    </View>
                    <View style={styles.Settingsfromperson}>  
                            <View style={styles.personalinformation}>
                                <View style={styles.organize}>
                                    <Ionicons name='clipboard-outline' color='#01E581' size={25}></Ionicons>
                                    <Text style={styles.textpersonalinformation}>Informações Pessoais</Text>
                                </View>
                                <TouchableOpacity onPress = {() => navigation.navigate("InformacoesPessoais")}>
                                    <Ionicons name='chevron-forward' color='#01E581' size={25}></Ionicons>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.personalinformation}>
                                <View style={styles.organize}>
                                    <Ionicons name='locate-outline' color='#01E581' size={25}></Ionicons>
                                    <Text style={styles.textpersonalinformation}>Endereço</Text>
                                </View>
                                <TouchableOpacity onPress = {() => navigation.navigate("Endereco")}>
                                    <Ionicons name='chevron-forward' color='#01E581' size={25}></Ionicons>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.personalinformation}>
                                <View style={styles.organize}>
                                    <Ionicons name='ellipsis-horizontal-outline' color='#01E581' size={25}></Ionicons>
                                    <Text style={styles.textpersonalinformation}>Outros</Text>  
                                </View>
                                <TouchableOpacity onPress = {() => navigation.navigate("Outros")}>
                                    <Ionicons name='chevron-forward' color='#01E581' size={25}></Ionicons>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.personalinformation}>
                                <View style={styles.organize}>
                                    <Ionicons name='lock-closed-outline' color='#01E581' size={25}></Ionicons>
                                    <Text style={styles.textpersonalinformation}>Curriculo</Text>
                                </View>
                                <TouchableOpacity onPress = {() => navigation.navigate("Curriculo")}>
                                    <Ionicons name='chevron-forward' color='#01E581' size={25}></Ionicons>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.personalinformation}>
                                <View style={styles.organize}>
                                    <Ionicons name='filter-outline' color='#01E581' size={25}></Ionicons>
                                    <Text style={styles.textpersonalinformation}>Filtragem</Text>  
                                </View>
                                <TouchableOpacity onPress = {() => navigation.navigate("Filtragem")}>
                                    <Ionicons name='chevron-forward' color='#01E581' size={25}></Ionicons>
                                </TouchableOpacity>
                            </View>
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}