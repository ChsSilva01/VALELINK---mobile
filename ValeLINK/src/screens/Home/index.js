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
              <Text>Coca-Cola</Text>
            </View>
          </View>
          <View style={styles.infopost}>
            <View style={styles.textpost}>
              <Text>Venha trabalhar em nossa empresa</Text>
            </View>
            <View style={styles.imagepost}>
              <Image source={post}></Image>
            </View>
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
