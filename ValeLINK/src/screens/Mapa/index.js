//npm install react-native-maps --save-exact
//expo install expo-location
//expo install expo-permissions

import React, {useState,useEffect,useRef} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { styles } from './styles';

import {Ionicons} from '@expo/vector-icons';

import goncalves from '../../../assets/goncalves.png';


// import config from '../../config';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';

export default function Mapa({ navigation }) {
  const [origin,setOrigin]=useState(null);
  //2 parte busca e rotas
  const mapEl=useRef(null);
  const [distance,setDistance]=useState(null);
  const [destination,setDestination]=useState(null);
 

  useEffect(()=>{
    (async function(){      
      let { status } = await Location.requestForegroundPermissionsAsync(); 
        if (status === 'granted') {
            let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
            setOrigin({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421
            })
        } else {
            throw new Error('Location permission not granted');
        }
    })();
  },[]);


  return(
    <View style={styles.container}>
       {/* <View style={styles.header}>
                <TouchableOpacity onPress = {() => navigation.navigate("Home")}><Ionicons name="arrow-back" size={30}></Ionicons></TouchableOpacity>
                <Text style={styles.tittle}>Mapa</Text>
        </View>  
            <MapView
          style={styles.map}
          initialRegion={origin}
          showsUserLocation={true}
          zoomEnabled={true}
          loadingEnabled={true} 
              2 parte  busca e rotas  
          ref={mapEl}           
          >
          MARCADOR NO MAPA
          1
          
            <Marker
              coordinate={{latitude: -24.492119638680506, longitude: -47.83520075432022}} //lugar onde você quer marcar 
              title={'Sharpel'} //titulo do marcador
              description={'Descrição da empresa'}
              onPress={() => navigation.navigate("MapaEmpresa")}
            >
              <View style={styles.marcador}>
                <Image 
                  source={goncalves}
                  style={styles.marcadorImage}
                >
                  
                </Image>

                <Text style={{color: 'white', fontSize: 13}}> Meu Local </Text>
              </View>         
            </Marker>
         

 



</MapView> */}




    </View>
  );
}


