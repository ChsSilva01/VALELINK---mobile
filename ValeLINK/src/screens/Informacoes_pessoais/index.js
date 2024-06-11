import React, { useState } from 'react';
import { View, Text, Touchable, TextInput } from 'react-native';
import { styles } from "./styles";

import {Ionicons} from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import { RadioButton } from 'react-native-paper';


export default function InformacoesPessoais({ navigation }){
    const [selectedDeficiency, setSelectedDeficiency] = useState("sim");
    const [selectedMaritalStatus, setSelectedMaritalStatus] = useState("java");    
    const [nome,setNome] = useState("")

    const [selectedValue, setSelectedValue] = useState('option1');

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress = {() => navigation.navigate("Perfil")}><Ionicons name="close" size={30}></Ionicons></TouchableOpacity>
                <Text style={styles.tittle}>Informações Pessoais</Text>
            </View>
            <Ionicons name="create-outline" size={33} color={'#01E581'} style={{left: 330, top: 10}}></Ionicons>     
                 <View style={styles.input}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View>
                            <Text style={styles.infostyle}>Nome Completo</Text>
                            <TextInput 
                            style={styles.nameinput}
                            >
                            </TextInput>
                        </View>
                        {/*  */}
                        <View>
                            <Text style={styles.infostyle}>RG</Text>
                            <TextInput
                            style={styles.rginput}
                            >
                            </TextInput>
                        </View>
                        {/*  */}
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View>
                            <Text style={styles.infostyle}>Data de nascimento</Text>
                            <TextInput
                            style={styles.dateinput}
                            >
                            </TextInput>
                        </View>
                        {/*  */}
                        <View>
                            <Text style={styles.infostyle}>CPF</Text>
                            <TextInput
                            style={styles.rginput}
                            placeholder={nome}
                            >
                            </TextInput>
                        </View>
                        {/*  */}
                    </View>

                    {/*  */}
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
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
                        <View>
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
                            <Text>Masculino</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton value="option2" color="green" />
                            <Text>Feminino</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton value="option3" color="green" />
                            <Text>Outro</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton value="option4" color="green" />
                            <Text>Prefiro não dizer</Text>
                            </View>
                        </View>
                    </RadioButton.Group>
                    {/*  */}
            </View>
        </View>
    )
}