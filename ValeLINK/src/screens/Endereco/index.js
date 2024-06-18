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
                <Text style={styles.tittle}>Endereço</Text>
            </View>
            <View style={styles.input}>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Text style={styles.infostyle}>Cidade</Text>
                            <TextInput 
                            style={styles.cityinput}
                            >
                            </TextInput>
                        </View>
                        {/*  */}
                        <View>
                            <Text style={styles.infostyle}>Número</Text>
                            <TextInput 
                            style={styles.numberinput}
                            >
                            </TextInput>
                            {/*  */}
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Text style={styles.infostyle}>Endereço</Text>
                            <TextInput 
                            style={styles.addressinput}
                            >
                            </TextInput>
                            {/*  */}
                        </View>
                        <View>
                            <Text style={styles.infostyle}>CEP</Text>
                            <TextInput 
                            style={styles.CEPinput}
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
                            >
                            </TextInput>
                            {/*  */}
                        </View>
                        <View>
                            <Text style={styles.infostyle}>Tipo de Resid.</Text>
                            <TextInput 
                            style={styles.typeofresidenceinput}
                            >
                            </TextInput>
                            {/*  */}
                        </View>
                    </View>
                    <Text style={styles.infostyle}>Ponto de referência</Text>
                    <TextInput 
                    style={styles.referencepointinput}
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
                            <View>
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
            <TouchableOpacity style={styles.changedatabutton}><Text style={styles.textbutton}>Alterar dados</Text></TouchableOpacity>
        </View>
    )
}