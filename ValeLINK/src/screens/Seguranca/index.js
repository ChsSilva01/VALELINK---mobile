import React from "react";
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from "./styles";

import {Ionicons} from '@expo/vector-icons';

export default function Seguranca(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress = {() => navigation.navigate("Perfil")}><Ionicons name="close" size={30}></Ionicons></TouchableOpacity>
                <Text style={styles.tittle}>Segurança</Text>
            </View>
            <View style={styles.input}>
                    <Text style={styles.infostyle}>Telefone para contato</Text>
                    <TextInput 
                    style={styles.nameinput}
                    >
                    </TextInput>
                    {/*  */}
            </View>
        </View>
    )
}