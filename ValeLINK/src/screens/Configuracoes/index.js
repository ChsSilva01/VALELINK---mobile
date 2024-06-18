import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import Header from '../../components/Header'
import {Ionicons} from '@expo/vector-icons';


export default function Configuracoes({ navigation }) {

return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress = {() => navigation.navigate("Home")}><Ionicons name="arrow-back" size={30}></Ionicons></TouchableOpacity>
        <Text style={styles.tittle}>Configurações</Text>
      </View>  
      <View style={styles.config}>
        <View style={styles.titlefromconfig}>
          <Text style={styles.titlefromconfigtext}>Geral</Text>
        </View>
        <View style={styles.configfromarea}>   
            <Text style={styles.configtext}>Tema</Text>
            <View style={styles.gotosettings}>
              <Text style={styles.configtext}>Auto</Text>
              <Ionicons name="chevron-forward" style={styles.icon}></Ionicons>
            </View>
        </View>
        <View style={styles.configfromarea}>   
            <Text style={styles.configtext}>Idioma</Text>
            <View style={styles.gotosettings}>
              <Text style={styles.configtext}>PT-BR</Text>
            </View>
        </View>
        <View style={styles.titlefromconfig}>
          <Text style={styles.titlefromconfigtext}>Acessibilidade</Text>
        </View>
        <View style={styles.configfromarea}>   
            <Text style={styles.configtext}>Fonte</Text>
            <View style={styles.gotosettings}>
              <Text style={styles.configtext}>Médio</Text>
            </View>
        </View>
        <View style={styles.configfromarea}>   
            <Text style={styles.configtext}>Ajuste de cor</Text>
            <View style={styles.gotosettings}>
              <Text style={styles.configtext}>Auto</Text>
              <Ionicons name="chevron-forward" style={styles.icon}></Ionicons>
            </View>
        </View>
      </View>
    </View>
  );
}

