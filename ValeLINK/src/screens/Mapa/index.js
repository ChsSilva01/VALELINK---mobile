import React,{useState,useEffect,useRef} from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';


import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { styles } from './styles';

import {Ionicons} from '@expo/vector-icons';

import { mapa } from '../../../assets/mapa.png'

// import config from '../../config';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';

export default function Mapa({ navigation }) {

  return(
    <View style={styles.container}>
       <View style={styles.header}>
                <TouchableOpacity onPress = {() => navigation.navigate("Home")}><Ionicons name="arrow-back" size={30}></Ionicons></TouchableOpacity>
                <Text style={styles.tittle}>Mapa</Text>
            </View>  
      <Image source={require("../../../assets/mapa.png")} style={{width: 393, height: 800}}>
        
      </Image>
    </View>
  );
}


