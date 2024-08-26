import React, { useState, useEffect } from 'react';
import { View, Text, Touchable, TextInput } from 'react-native';
import { styles } from "./styles";

import {Ionicons} from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import { RadioButton } from 'react-native-paper';

import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function InformacoesPessoais({ navigation }){
    const [selectedDeficiency, setSelectedDeficiency] = useState("sim");
    const [selectedMaritalStatus, setSelectedMaritalStatus] = useState("java");    
    const [nome_usuario,setNome_usuario] = useState("");
    const [CPF,setCPF] = useState("");
    const [RG,setRG] = useState("");
    const [data_de_nascimento,setData_de_nascimento] = useState("");
    // const [Deficiencia,setDeficiencia] = useState("");
    // const [Estado_Civil,setEstado_Civil] = useState("");
    // const [Sexo,setSexo] = useState("");
    const [Especifique,setEspecifique] = useState("");

    const [selectedValue, setSelectedValue] = useState('option1');

    

    useEffect(() => {
        listarDados();
    },[])

    async function listarDados(){
        try {
            const user = await AsyncStorage.getItem('@user');
            const res = await api.get(`apiVALELINK/usuarios/buscarId.php?cod_usuario=${user}`);
            setNome_usuario(res.data.nome_usuario);
            setCPF(String(res.data.CPF));
            setRG(String(res.data.RG));
            setData_de_nascimento(String(res.data.data_de_nascimento));

          } catch (error) {
            console.error('Erro ao buscar dados:', error);
          }
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress = {() => navigation.navigate("Perfil")}><Ionicons name="close" size={30}></Ionicons></TouchableOpacity>
                <Text style={styles.tittle}>Informações Pessoais</Text>
            </View>     
                 <View style={styles.input}>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Text style={styles.infostyle}>Nome Completo</Text>
                            <TextInput 
                            placeholder={nome_usuario}
                            style={styles.nameinput}
                            >
                            </TextInput>
                        </View>
                        {/*  */}
                        <View style={{left: 27}}>
                            <Text style={styles.infostyle}>RG</Text>
                            <TextInput
                            placeholder={RG}
                            style={styles.rginput}
                            >
                            </TextInput>
                        </View>
                        {/*  */}
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Text style={styles.infostyle}>Data de nascimento</Text>
                            <TextInput
                            placeholder={data_de_nascimento}
                            style={styles.dateinput}
                            >
                            </TextInput>
                        </View>
                        {/*  */}
                        <View style={{left: 35}}>
                            <Text style={styles.infostyle}>CPF</Text>
                            <TextInput
                            style={styles.rginput}
                            placeholder={CPF}
                            >
                            </TextInput>
                        </View>
                        {/*  */}
                    </View>

                    {/*  */}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View>
                            <View style={styles.infostyleDeficiety}>
                                <Text style={styles.infostyle}>Possui algum tipo de defiência?</Text>
                            </View>
                            <View style={styles.rginput}>
                                <Picker
                                    selectedDeficiency={selectedDeficiency}
                                    onValueChange={(itemValue, itemIndex) => setSelectedDeficiency(itemValue)}
                                >
                                    <Picker.Item label="Sim" value="sim" />
                                    <Picker.Item label="Não" value="nao" />
                                </Picker>
                            </View>
                        </View>
                        {/*  */}
                        <View style={{right: 30}}>
                            <Text style={styles.infostyle}>Estado cívil</Text>
                            <View style={styles.maritalstatusinput}>
                                <Picker
                                    selectedMaritalStatus={selectedMaritalStatus}
                                    onValueChange={(itemValue, itemIndex) => setSelectedMaritalStatus(itemValue)}
                                >
                                    <Picker.Item label="Solteiro" value="solteiro" />
                                    <Picker.Item label="Casado" value="casado" />
                                    <Picker.Item label="Separado" value="separado" />
                                    <Picker.Item label="Divorciado" value="divorciado" />
                                    <Picker.Item label="Viúvo" value="viuvo" />
                                </Picker>
                            </View>
                        </View>
                    </View>
                    {/*  */}

                    <Text style={styles.infostyle}>Especifique</Text>
                    <TextInput
                    placeholder="Sei la"
                    style={styles.rginput}
                    >
                    </TextInput>
                    {/*  */}
                    <Text style={styles.infostyle}>Sexo</Text>
                    <RadioButton.Group
                        onValueChange={(value) => setSelectedValue(value)}
                        value={selectedValue}
                    >
                        {/* Create individual radio buttons with labels */}
                        <View style={{flexDirection: 'row'}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton value="option1" color="green" />
                            <Text style={styles.infostyle}>Masculino</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton value="option2" color="green" />
                            <Text style={styles.infostyle}>Feminino</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton value="option3" color="green" />
                            <Text style={styles.infostyle}>Outro</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton value="option4" color="green" />
                            <Text style={styles.infostyle}>Prefiro não dizer</Text>
                            </View>
                        </View>
                    </RadioButton.Group>
                    {/*  */}
            </View>
            <TouchableOpacity style={styles.changedatabutton}><Text style={styles.textbutton}>Alterar dados</Text></TouchableOpacity>
        </View>
    )
}
