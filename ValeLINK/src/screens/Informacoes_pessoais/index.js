import React, { useState } from 'react';
import { View, Text, Touchable, TextInput } from 'react-native';
import { styles } from "./styles";

import {Ionicons} from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";


export default function InformacoesPessoais({ navigation }){
    const [selectedDeficiency, setSelectedDeficiency] = useState("java");
    const [selectedMaritalStatus, setSelectedMaritalStatus] = useState("java");       

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress = {() => navigation.navigate("Perfil")}><Ionicons name="close" size={30}></Ionicons></TouchableOpacity>
                <Text style={styles.tittle}>Informações Pessoais</Text>
            </View>
            <Ionicons name="create-outline" size={33} color={'#01E581'} style={{left: 330, top: 10}}></Ionicons>     
                 <View style={styles.input}>
                    <Text style={styles.infostyle}>Nome Completo</Text>
                    <TextInput 
                    style={styles.nameinput}
                    >
                    </TextInput>
                    {/*  */}
                    <Text style={styles.infostyle}>RG</Text>
                    <TextInput
                    style={styles.rginput}
                    >
                    </TextInput>
                    {/*  */}

                    <Text style={styles.infostyle}>Data de nascimento</Text>
                    <TextInput
                    style={styles.dateinput}
                    >
                    </TextInput>

                    {/*  */}
                    <Text style={styles.infostyle}>RG</Text>
                    <TextInput
                    style={styles.rginput}
                    >
                    </TextInput>
                    {/*  */}

                    {/*  */}
                    <Text style={styles.infostyle}>RG</Text>
                    <TextInput
                    style={styles.rginput}
                    >
                    </TextInput>
                    {/*  */}

                    {/*  */}
                    <Text style={styles.infostyle}>Possui algum tipo de defiência?</Text>
                    <View style={styles.rginput}>
                        <Picker
                            selectedDeficiency={selectedDeficiency}
                            onValueChange={(itemValue, itemIndex) => setSelectedDeficiency(itemValue)}
                        >
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                            <Picker.Item label="Python" value="python" />
                            <Picker.Item label="C++" value="cpp" />
                        </Picker>
                    </View>
                    {/*  */}

                    <Text style={styles.infostyle}>Estado cívil</Text>
                    <View style={styles.rginput}>
                        <Picker
                            selectedMaritalStatus={selectedMaritalStatus}
                            onValueChange={(itemValue, itemIndex) => setSelectedMaritalStatus(itemValue)}
                        >
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                            <Picker.Item label="Python" value="python" />
                            <Picker.Item label="C++" value="cpp" />
                        </Picker>
                    </View>
                    {/*  */}

                    <Text style={styles.infostyle}>Especifique</Text>
                    <TextInput
                    style={styles.rginput}
                    >
                    </TextInput>
                    {/*  */}
                    <Text style={styles.infostyle}>Especifique</Text>
                    <TextInput
                    style={styles.rginput}
                    >
                    </TextInput>
                    {/*  */}
            </View>
        </View>
    )
}