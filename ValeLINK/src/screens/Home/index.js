import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';

import icone from '../../../assets/icone_post_reserve.png';
import logo from '../../../assets/logo.png'

export default function Home() {
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
          </View>
          <View style={styles.infopost}>
            <View style={styles.textpost}></View>
            <View style={styles.imagepost}></View>
            <View style={styles.actionspost}></View>
          </View>
        </View>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerheader: {
    width: '100%',
    height: '8%',
    backgroundColor: '#d9d9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollfunctions: {
    width: '100%',
    
  },
  post: {
    width: '90%',
    height: 570,
    display: 'flex',
    backgroundColor: '#b1b1b1',
    borderRadius: 15,
    left: '5%',
    top: '5%'
  },
  profile: {
    width: '100%', 
    height: '13%', 
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  icon: {
    width: 35, 
    height: 35, 
    borderRadius: 50, 
    left: '25%'
  },
  nameUser: {
    left: '50%'
  },
  infopost: {
    width: '100%', 
    height: '87%',
    backgroundColor: '#d9d9'
  },
  imageIcon: {
    width: '100%',
    height: '100%'
  },
  textpost: {
    width: '100%',
    height: '15%',
    backgroundColor: '#c98768'
  },
  imagepost: {
    width: '100%',
    height: '65%',
    backgroundColor: '#f4f4'
  }
});