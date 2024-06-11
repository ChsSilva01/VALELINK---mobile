import React, {useState} from "react";
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from "./styles";

import {Ionicons} from '@expo/vector-icons';

import { Picker } from "@react-native-picker/picker";

export default function Seguranca({ navigation }){
    const [selectedValue, setSelectedValue] = useState("sim");
    const [selectneighborhood, setNeighborhood] = useState("sim");
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress = {() => navigation.navigate("Perfil")}><Ionicons name="close" size={30}></Ionicons></TouchableOpacity>
                <Text style={styles.tittle}>Segurança</Text>
            </View>
            <View style={styles.input}>
                    <Text style={styles.infostyle}>Cidade</Text>
                    <TextInput 
                    style={styles.cityinput}
                    >
                    </TextInput>
                    {/*  */}

                    <Text style={styles.infostyle}>Número</Text>
                    <TextInput 
                    style={styles.numberinput}
                    >
                    </TextInput>
                    {/*  */}

                    <Text style={styles.infostyle}>Endereço</Text>
                    <TextInput 
                    style={styles.addressinput}
                    >
                    </TextInput>
                    {/*  */}

                    <Text style={styles.infostyle}>CEP</Text>
                    <TextInput 
                    style={styles.CEPinput}
                    >
                    </TextInput>
                    {/*  */}

                    <Text style={styles.infostyle}>Tempo de Resid.</Text>
                    <TextInput 
                    style={styles.residencetimeinput}
                    >
                    </TextInput>
                    {/*  */}

                    <Text style={styles.infostyle}>Tipo de Resid.</Text>
                    <TextInput 
                    style={styles.typeofresidenceinput}
                    >
                    </TextInput>
                    {/*  */}

                    <Text style={styles.infostyle}>Ponto de referência</Text>
                    <TextInput 
                    style={styles.referencepointinput}
                    >
                    </TextInput>
                    {/*  */}

                    <Text style={styles.infostyle}>Valor</Text>
                    <Picker
                            selectedMaritalStatus={selectedValue}
                            onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
                            style={styles.valueinput}
                        >
                            <Picker.Item label="Solteiro" value="solteiro" />
                            <Picker.Item label="Casado" value="casado" />
                            <Picker.Item label="Separado" value="separado" />
                            <Picker.Item label="Divorciado" value="divorciado" />
                            <Picker.Item label="Viúvo" value="viuvo" />
                    </Picker>
                    {/*  */}

                    <Text style={styles.infostyle}>Bairro</Text>
                    <Picker
                            selectedMaritalStatus={selectneighborhood}
                            onValueChange={(itemValue, itemIndex) => setNeighborhood(itemValue)}
                            style={styles.neighborhoodinput}
                        >
                            <Picker.Item label="Solteiro" value="solteiro" />
                            <Picker.Item label="Casado" value="casado" />
                            <Picker.Item label="Separado" value="separado" />
                            <Picker.Item label="Divorciado" value="divorciado" />
                            <Picker.Item label="Viúvo" value="viuvo" />
                    </Picker>
                    {/*  */}
            </View>
        </View>
    )
}