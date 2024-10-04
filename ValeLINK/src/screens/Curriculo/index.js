import React, {useState} from "react";
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from "./styles";

import {Ionicons} from '@expo/vector-icons';

import { Picker } from "@react-native-picker/picker";

export default function Curriculo({ navigation }){
    const [selectedValue, setSelectedValue] = useState("sim");
    const [selectneighborhood, setNeighborhood] = useState("sim");
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress = {() => navigation.navigate("Perfil")}><Ionicons name="close" size={30}></Ionicons></TouchableOpacity>
                <Text style={styles.tittle}>Currículo</Text>
            </View>
            <View style={styles.input}>
                    <Text style={styles.infostyle}>Objetivo</Text>
                    <TextInput 
                    style={styles.phonenumberforverification}
                    >
                    </TextInput>
                    {/*  */}

                    <Text style={styles.infostyle}>Histórico profissional</Text>
                    <TextInput 
                    style={styles.verificationemail}
                    >
                    </TextInput>
                    {/*  */}

                    <Text style={styles.infostyle}>Formação acadêmica</Text>
                    <TextInput 
                    style={styles.email}
                    >
                    </TextInput>
                    {/*  */}

                    <Text style={styles.infostyle}>Habilidade e competências</Text>
                    <TextInput 
                    style={styles.cityinput}
                    >
                    </TextInput>
                    {/*  */}

            </View>
            <TouchableOpacity style={styles.changedatabutton}><Text style={styles.textbutton}>Alterar dados</Text></TouchableOpacity>
        </View>
    )
}