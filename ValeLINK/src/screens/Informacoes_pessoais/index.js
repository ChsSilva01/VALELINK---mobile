import React from "react";
import { View, Text, Touchable, TextInput } from 'react-native';
import { styles } from "./styles";

import {Ionicons} from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";



export default function InformacoesPessoais({ navigation }){
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
            </View>
        </View>
    )
}