import React, {useState,useEffect} from "react";
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from "./styles";

import {Ionicons} from '@expo/vector-icons';

import api from '../../services/api';

import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Seguranca({ navigation }){
    const [selectedValue, setSelectedValue] = useState("sim");
    const [selectneighborhood, setNeighborhood] = useState("sim");
    
    const [cidade, setCidade] = useState("");
    const [numero, setNumero] = useState("");
    const [rua, setRua] = useState("");
    const [CEP, setCEP] = useState("");
    const [tempo_de_residencia, setTempo_de_residencia] = useState("");
    const [tipo_de_residencia, setTipo_de_residencia] = useState("");
    const [ponto_de_referencia, setPonto_de_referencia] = useState("");



    

    async function listarDados(){
        try {
            const user = await AsyncStorage.getItem('@user');
            const res = await api.get(`apiVALELINK/usuarios/listar.php?cod_usuario=${user}`);
            setCidade(res.data.cidade);
            setNumero(res.data.numero.toString());
            setCEP(res.data.CEP.toString());
            setRua(res.data.rua);
            setTempo_de_residencia(res.data.tempo_de_residencia);
            setTipo_de_residencia(res.data.tipo_de_residencia);
            setPonto_de_referencia(res.data.ponto_de_referencia);
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
                <Text style={styles.tittle}>Endereço</Text>
            </View>
            <View style={styles.input}>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Text style={styles.infostyle}>Cidade</Text>
                            <TextInput 
                            style={styles.cityinput}
                            placeholder={cidade}
                            >
                            </TextInput>
                        </View>
                        {/*  */}
                        <View style={{left: 24}}>
                            <Text style={styles.infostyle}>Número</Text>
                            <TextInput 
                            style={styles.numberinput}
                            placeholder={numero}
                            >
                            </TextInput>
                            {/*  */}
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Text style={styles.infostyle}>Rua</Text>
                            <TextInput 
                            style={styles.addressinput}
                            placeholder={rua}
                            >
                            </TextInput>
                            {/*  */}
                        </View>
                        <View style={{left: 24}}>
                            <Text style={styles.infostyle}>CEP</Text>
                            <TextInput 
                            style={styles.CEPinput}
                            placeholder={CEP}
                            >
                            </TextInput>
                            {/*  */}
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Text style={styles.infostyle}>Tempo de Resid.</Text>
                            <TextInput 
                            style={styles.residencetimeinput}
                            placeholder={tempo_de_residencia}
                            >
                            </TextInput>
                            {/*  */}
                        </View>
                        <View style={{left: 45}}>
                            <Text style={styles.infostyle}>Tipo de Resid.</Text>
                            <TextInput 
                            style={styles.typeofresidenceinput}
                            placeholder={tipo_de_residencia}
                            >
                            </TextInput>
                            {/*  */}
                        </View>
                    </View>
                    <Text style={styles.infostyle}>Ponto de referência</Text>
                    <TextInput 
                    style={styles.referencepointinput}
                    placeholder={ponto_de_referencia}
                    >
                    </TextInput>
                    {/*  */}

                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Text style={styles.infostyle}>Valor</Text>
                            <View style={styles.valueinput}>
                            <Picker
                                    selectedMaritalStatus={selectedValue}
                                    onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
                                >
                                    <Picker.Item label="Solteiro" value="solteiro" />
                                    <Picker.Item label="Casado" value="casado" />
                                    <Picker.Item label="Separado" value="separado" />
                                    <Picker.Item label="Divorciado" value="divorciado" />
                                    <Picker.Item label="Viúvo" value="viuvo" />
                            </Picker>
                            </View>
                            {/*  */}
                        </View>
                            <View style={{left: 82}}>
                            <Text style={styles.infostyle}>Bairro</Text>
                            <View style={styles.neighborhoodinput}>
                            <Picker
                                    selectedMaritalStatus={selectneighborhood}
                                    onValueChange={(itemValue, itemIndex) => setNeighborhood(itemValue)}
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
            </View>
            <TouchableOpacity style={styles.changedatabutton} onPress={() => console.log(ponto_de_referencia)}><Text style={styles.textbutton}>Alterar dados</Text></TouchableOpacity>
        </View>
    )
}