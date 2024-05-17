import React from "react";
import { View, Text } from 'react-native';
import { styles } from "./styles";

import {Ionicons} from '@expo/vector-icons';

export default function InformacoesPessoais(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="close" size={30}></Ionicons>
                <Text style={styles.tittle}>Informações Pessoais</Text>
            </View>
        </View>
    )
}