import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles.js';
import {Ionicons} from '@expo/vector-icons';

import icone from '../../../assets/coca-cola-logo.png';
import post from '../../../assets/image-post.png'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      
      <ScrollView style={styles.scrollfunctions}>
        <View style={styles.post}>
          <View style={styles.profile}>
            <View style={styles.icon}>
              <Image source={icone} style={styles.imageIcon}></Image>
            </View>
            <View style={styles.nameUser}>
              <Text style={styles.nameUsertext}>Coca-Cola</Text>
            </View>
          </View>
          <View style={styles.infopost}>
            <View style={styles.textpost}>
              <Text style={styles.textposstyle}>Venha trabalhar em nossa empresa</Text>
            </View>
            <View style={styles.imagepost}>
              <Image source={post}></Image>
            </View>
            <View style={styles.actionspost}>
                <Ionicons name='heart' size={30} style={styles.iconactionspost}></Ionicons>
                <Ionicons name='chatbubble' size={25} style={styles.iconactionspost}></Ionicons>
                <Ionicons name='share-social' size={25} style={styles.iconactionspost}></Ionicons>
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
