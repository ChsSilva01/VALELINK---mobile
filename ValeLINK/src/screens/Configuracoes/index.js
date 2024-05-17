import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { styles } from './styles';

import {Ionicons} from '@expo/vector-icons';


export default function Configuracoes() {
 

return (
    <View style={styles.container}>
      <View style={{width: '100%', height: 43}}></View>
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
      </View>
    </View>
  );
}

