import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from "./styles";

import {Ionicons} from '@expo/vector-icons';

import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/api";

export default function Curriculo({ navigation }){
    const[objetivo_curriculo, setObjetivo_curriculo] = useState('');
    const[historico_profissional_curriculo, setHistorico_profissional_curriculo] = useState('');
    const[formacao_academica_curriculo, setFormacao_academica_curriculo] = useState('');
    const[habilidade_e_competencias_curriculo, setHabilidade_e_competencias_curriculo] = useState('');

    const [isLoading, setIsLoading] = useState(true); 
    const [refreshing, setRefreshing] = useState(false); 

    async function listarDados(){
        try {
            const user = await AsyncStorage.getItem('@user');
            const res = await api.get(`apiVALELINK/curriculo/listarcurriculo.php?cod_usuario=${user}`);
            setObjetivo_curriculo(res.data.objetivo_curriculo);
            setHistorico_profissional_curriculo(res.data.historico_profissional_curriculo);
            setFormacao_academica_curriculo(res.data.formacao_academica_curriculo);
            setHabilidade_e_competencias_curriculo(res.data.habilidade_e_competencias_curriculo);

        } catch (error) {
            console.log("Erro ao Listar " + error);
        } finally {
            setIsLoading(false);
            setRefreshing(false);
        }
    }
    useEffect(() => {
        listarDados();
    },[])

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress = {() => navigation.navigate("Perfil")}><Ionicons name="close" size={30}></Ionicons></TouchableOpacity>
                <Text style={styles.tittle}>Currículo</Text>
            </View>
            <View style={styles.input}>
                    <Text style={styles.infostyle}>Objetivo</Text>
                    <TextInput 
                    style={styles.objective}
                    multiline={true}
                    placeholder={objetivo_curriculo}
                    >
                    </TextInput>
                    {/*  */}

                    <Text style={styles.infostyle}>Histórico profissional</Text>
                    <TextInput 
                    style={styles.professionalhistory}
                    multiline={true}
                    placeholder={historico_profissional_curriculo}
                    >
                    </TextInput>
                    {/*  */}

                    <Text style={styles.infostyle}>Formação acadêmica</Text>
                    <TextInput 
                    style={styles.academictraining}
                    multiline={true}
                    placeholder={formacao_academica_curriculo}
                    >
                    </TextInput>
                    {/*  */}

                    <Text style={styles.infostyle}>Habilidade e competências</Text>
                    <TextInput 
                    style={styles.skillandcompetencies}
                    multiline={true}
                    placeholder={habilidade_e_competencias_curriculo}
                    >
                    </TextInput>
                    {/*  */}

            </View>
            <TouchableOpacity style={styles.changedatabutton}><Text style={styles.textbutton}>Alterar dados</Text></TouchableOpacity>
        </View>
    )
}