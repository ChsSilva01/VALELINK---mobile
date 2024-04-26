import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles.js';
import {Ionicons} from '@expo/vector-icons';

import icone from '../../../assets/icone_post_reserve.png';
import logo from '../../../assets/logo.png'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerheader}>  
          <Image source={logo} style={{width: '15%', height: '50%'}} resizeMode='stretch'></Image>
          <Text style={{color: '#00C16C', fontSize: 25, fontWeight: 'bold'}}>VALELINK</Text>
      </View>
      <ScrollView style={styles.scrollfunctions}>
        <View style={styles.post}>
          <View style={styles.profile}>
            <View style={styles.icon}>
              <Image source={icone} style={styles.imageIcon}></Image>
            </View>
            <View style={styles.nameUser}>
              <Text>Carlos</Text>
            </View>
            <TouchableOpacity style={styles.buttonS}>
                <Text style={styles.textButton}>Seguir</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infopost}>
            <View style={styles.textpost}></View>
            <View style={styles.imagepost}></View>
            <View style={styles.actionspost}>
                <Ionicons name='heart-outline' size={30}></Ionicons>
                <Ionicons name='chatbubble-outline' size={25}></Ionicons>
                <Ionicons name='share-social-outline' size={25}></Ionicons>
                <TouchableOpacity style={styles.buttonC}>
                    <Text style={styles.textButton}>Se Cadastrar!!!</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
        
      </ScrollView>
    </View>
  );
}
