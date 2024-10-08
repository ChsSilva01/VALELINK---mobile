import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, ScrollView, Alert } from 'react-native';
import { styles } from "./styles";
import {Ionicons} from '@expo/vector-icons';

export default function Filtragem({ navigation }){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress = {() => navigation.navigate("Perfil")}><Ionicons name="close" size={30}></Ionicons></TouchableOpacity>
                <Text style={styles.tittle}>Filtragem</Text>
            </View> 
        </View>
    )
}